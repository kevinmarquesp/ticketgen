class Lunch {
  /** @type {string} */
  #name;

  /** @type {[Ingredient, number][]} */
  #ingredients;

  /** @type {[Ingredient, number][]} */
  #removed = [];

  /** @type {{ from: Sauce, to: Sauce }?} */
  #replaced;

  /**
   * @param {{
   *  name: string;
   *  ingredients: [Ingredient, number][];
   * }} _
   */
  constructor({ name, ingredients }) {
    this.#ingredients = ingredients;
    this.#name = name;
  }

  /**
   * @returns {string}
   */
  ticket() {
    if (this.#removed.length === 0)
      return this.#name;

    return "";
  }

  /**
   * @param {Ingredient} ingredient
   * @returns {Ingredient[]}
   */
  remove(ingredient) {
    return [];
  }

  /**
   * @param {{ from: Sauce, to: Sauce }} _
   * @returns {[Sauce[], Sauce?]}
   */
  altsauce({
    from: oldsauce,
    to: newsauce
  }) {
    return [[oldsauce], newsauce];
  }
}