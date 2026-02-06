const MAX_LUNCH_CHANGES = 99;

const LunchError = Object.freeze({
  EMPTY_NAME_ERROR: "Empty name string not allowed",
  EMPTY_INGREDIENTS_ERROR: "Empty ingredients lists not allowed",
  ADD_BUN_ERROR: "Can't add more than one bun",
  AMMOUNT_ZERO_ERROR: "Can't use 0 for ingredient ammount",
  LIMIT_ADD_EXCEDED_ERROR: `Limit of ${MAX_LUNCH_CHANGES} adds was exceded`,
  LIMIT_RMV_EXCEDED_ERROR: `Limit of ${MAX_LUNCH_CHANGES} removes was exceded`,
  ZERO_AMOUNT_ERROR: 'Invalid ingredient ammount, less than 0 is invalid',
  NON_EXISTING_REMOVAL_ERROR: "Atempted to remove a non existing ingredient",
});

const GRILL_CORE = new Set([
  ...Object.values(Bread),
  ...Object.values(Patty),
  Condiment.SLI_CHEADDAR,
]);

/** @typedef {typeof LunchError[keyof typeof LunchError]} LUnchError */

class Lunch {
  /** @type {string} */
  #name;

  /** @type {[Ingredient, number][]} */
  #ingredients;

  /** @type {[Ingredient, number][]} */
  #delta = [];

  /**
   * @param {{
   *  name: string;
   *  ingredients: [Ingredient, number][];
   * }} _
   */
  constructor({ name, ingredients }) {
    assert(name !== "", LunchError.EMPTY_NAME_ERROR);
    assert(ingredients.length !== 0, LunchError.EMPTY_INGREDIENTS_ERROR);

    for (const [, amnt] of ingredients) {
      assert(amnt > 0, LunchError.ZERO_AMOUNT_ERROR);
    }

    this.#ingredients = ingredients;
    this.#name = name;
  }

  /**
   * 
   * @returns {{
   *  name: string;
   *  ingredients: [Ingredient, number][];
   *  delta: [Ingredient, number][];
   * }}
   */
  inspect() {
    return {
      name: this.#name,
      ingredients: this.#ingredients,
      delta: this.#delta,
    };
  }

  /**
   * @returns {string[]}
   */
  ticket() {
    const lines = [this.#name];
    const deltaIngredients = new Set(this.#delta.map(([ingr]) => ingr));

    // Combines both ingredients with delta in a detailed matrix.

    const matrix = [
      ...this.#delta
        .map(([ingr, delt]) => {
          const registered = this.#ingredients
            .find(([i]) => i === ingr);

          const amnt = registered ? registered[1] : 0;
          const diff = amnt + delt;

          return [ingr, amnt, delt, diff];
        }),
      ...this.#ingredients
        .filter(([ingr]) =>
          !deltaIngredients.has(ingr))
        .map(([ingr, amnt]) =>
          [ingr, amnt, 0, amnt]),
    ];

    // Determine if the lunch configuration is GRILL or not.

    const ignorable = new Set(this.#ingredients
      .filter(([ingr]) => !GRILL_CORE.has(ingr))
      .map(([ingr]) => ingr));

    const grill = [...ignorable]
      .every((igno) => matrix
        .some(([ingr,,, diff]) => igno === ingr && diff <= 0));

    const printable =  grill ?
      matrix.filter(([ingr]) => !ignorable.has(ingr)) :
      matrix;

    // Converts everything into a readable string.

    if (grill)
      lines.push("\t*GRILL");

    return [
      ...lines,
      ...printable
        .filter(([,, delt]) =>
          delt !== 0)
        .map(([ingr, amnt, delt, diff]) => {
          const trans = Translate[ingr].abbr;
          
          if (diff <= 0)
            return `\tSEM ${trans}`;

          if (diff < amnt)
            return `\tMENOS ${Math.abs(delt)} ${trans}`;

          if (diff > amnt && delt === 1)
            return `\tEXTRA ${trans}`;

          return `\tEXTRA ${delt} ${trans}`;
        })
        .sort(),
    ];
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   * @returns {[Ingredient, number][]}
   */
  remove(ingredient, amnt) {
    assert(amnt > 0, LunchError.AMMOUNT_ZERO_ERROR);

    const ingredientsSet = new Set([
      ...this.#ingredients.map(([ingr]) => ingr),
      ...this.#delta.map(([ingr]) => ingr),
    ]);

    assert(ingredientsSet.has(ingredient),
      LunchError.NON_EXISTING_REMOVAL_ERROR);

    this.#change(ingredient, -1 * amnt);

    return [...this.#delta];
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   * @returns {[Ingredient, number][]}
   */
  add(ingredient, amnt) {
    assert(amnt > 0, LunchError.AMMOUNT_ZERO_ERROR);
    assert(!(Object.values(Bread).includes(ingredient)),
      LunchError.ADD_BUN_ERROR);

    this.#change(ingredient, amnt);

    return [...this.#delta];
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   */
  #change(ingredient, amnt) {
    const exists = this.#delta.some(([i]) => i === ingredient);

    if (!exists) {
      assertBoundary(amnt);
      this.#delta.push([ingredient, amnt]);

      return;
    }

    this.#delta = this.#delta
      .map(([i, a]) => {
        if (i !== ingredient)
          return [i, a];

        assertBoundary(a + amnt);

        return [i, a + amnt];
      })
      .filter(([_, a]) => a !== 0);

      /**
       * @param {number} amnt 
       */
      function assertBoundary(next) {
        assert(next <= MAX_LUNCH_CHANGES, LunchError.LIMIT_ADD_EXCEDED_ERROR);
        assert(next >= -MAX_LUNCH_CHANGES, LunchError.LIMIT_RMV_EXCEDED_ERROR);
      }
  }
}
