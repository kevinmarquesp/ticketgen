const LunchError = Object.freeze({
  EMPTY_NAME_ERROR: "Empty name string not allowed",
  EMPTY_INGREDIENTS_ERROR: "Empty ingredients lists not allowed",
});

/** @typedef {typeof LunchError[keyof typeof LunchError]} LUnchError */

class Lunch {
  /** @type {string} */
  #name;

  /** @type {[Ingredient, number][]} */
  #ingredients;

  /** @type {[Ingredient, number][]} */
  #removed = [];

  /** @type {[Ingredient, number][]} */
  #added = [];

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
   *  removed: [Ingredient, number][];
   *  added: [Ingredient, number][];
   *  state: [Ingredient, number][];
   * }}
   */
  inspect() {
    // TODO: Add some logic to generate the current state of the lunch.
    
    return {
      name: this.#name,
      ingredients: this.#ingredients,
      removed: this.#removed,
      added: this.#added,
      state: [],
    };
  }

  /**
   * @returns {string}
   */
  ticket() {
    if (this.#removed.length === 0 && this.#added.length === 0)
      return this.#name;

    return "";
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   * @returns {[Ingredient, number][]}
   */
  remove(ingredient, amnt) {
    return [];
  }

  /**
   * @param {Ingredient} ingredient 
   * @param {number} amnt 
   * @returns {[Ingredient, number][]}
   */
  add(ingredient, amnt) {
    return [];
  }
}