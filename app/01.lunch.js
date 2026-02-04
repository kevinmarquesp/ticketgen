const MAX_LUNCH_CHANGES = 99;

const LunchError = Object.freeze({
  EMPTY_NAME_ERROR: "Empty name string not allowed",
  EMPTY_INGREDIENTS_ERROR: "Empty ingredients lists not allowed",
  ADD_BUN_ERROR: "Can't add more than one bun",
  AMMOUNT_ZERO_ERROR: "Can't use 0 for ingredient ammount",
  LIMIT_ADD_EXCEDED_ERROR: `Limit of ${MAX_LUNCH_CHANGES} adds was exceded`,
  LIMIT_RMV_EXCEDED_ERROR: `Limit of ${MAX_LUNCH_CHANGES} removes was exceded`,
});

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
   * @returns {string}
   */
  ticket() {
    if (this.#delta.length === 0)
      return this.#name;

    return "";
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   * @returns {[Ingredient, number][]}
   */
  remove(ingredient, amnt) {
    assert(amnt > 0, LunchError.AMMOUNT_ZERO_ERROR);

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