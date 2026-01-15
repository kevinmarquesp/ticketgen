/** @enum {string} */
const BREAD = Object.freeze({
  REGULAR: "REGULAR",  // Regular
  BIGMAC: "BIGMAC",    // Big Mac
  QUARTER: "QUARTER",  // Quarterão
});

/** @enum {string} */
const CONDIMENT = Object.freeze({
  LETTUCE: "LETTUCE",                  // Alface
  PICLES: "PICLES",                    // Picles
  SLICED_CHEADDAR: "SLICED_CHEADDAR",  // Queijo Cheaddar
  REIDRATED_ONION: "REIDRATED_ONION",  // Cebola Reidratada
  FRESH_ONION: "FRESH_ONION",          // Cebola Fresca
  SHOYO_ONION: "SHOYO_ONION",          // Cebola Shoyo
});

/** @enum {string} */
const SAUCE = Object.freeze({
  BIGMAC: "BIGMAC",                    // Molho Big Mac
  KETCHUP: "KETCHUP",                  // Ketchup
  MUSTARD: "MUSTARD",                  // Mostarda
  MCMELT_CHEADDAR: "MCMELT_CHEADDAR",  // Molho Cheadar McMelt
  MAYONESE: "MAYONESE",                // Mayonese
  MCMAYO: "MCMAYO",                    // Méquinese
  CBO: "CBO",                          // CBO
  CREAM_RACH: "CREAM_RACH",            // Cream Ranch
  TASTY: "TASTY",                      // Molho Tasty
});

/** @enum {string} */
const PATTY = Object.freeze({
  QUARTER: "QUARTER",  // Carne 4:1
  REGULAR: "REGULAR",  // Carne 10:1
  CHICKEN: "CHICKEN",  // Carne de Chicken
});

/** To translate the meal enums to the portuguese names */
const toPortuguese = Object.freeze({
  [BREAD.REGULAR]: "Regular",
  [BREAD.BIGMAC]: "Big Mac",
  [BREAD.QUARTER]: "Quarterão",
  [CONDIMENT.LETTUCE]: "Alface",
  [CONDIMENT.PICLES]: "Picles",
  [CONDIMENT.SLICED_CHEADDAR]: "Queijo Cheaddar",
  [CONDIMENT.REIDRATED_ONION]: "Cebola Reidratada",
  [CONDIMENT.FRESH_ONION]: "Cebola Fresca",
  [CONDIMENT.SHOYO_ONION]: "Cebola Shoyo",
  [SAUCE.BIGMAC]: "Molho Big Mac",
  [SAUCE.KETCHUP]: "Ketchup",
  [SAUCE.MUSTARD]: "Mostarda",
  [SAUCE.MCMELT_CHEADDAR]: "Molho Cheadar McMelt",
  [SAUCE.MAYONESE]: "Mayonese",
  [SAUCE.MCMAYO]: "Méquinese",
  [SAUCE.CBO]: "CBO",
  [SAUCE.CREAM_RACH]: "Cream Ranch",
  [SAUCE.TASTY]: "Molho Tasty",
  [PATTY.QUARTER]: "Carne 4:1",
  [PATTY.REGULAR]: "Carne 10:1",
  [PATTY.CHICKEN]: "Carne de Chicken",
});

/**
 * @typedef MealProps
 * @property {string} name Display name for the UI.
 * @property {BREAD} bread Kind of bread for this meal.
 * @property {SAUCE[]} sauces Sausages used to create this meal.
 * @property {CONDIMENT[]} condiments List of condiments to build the meal.
 */

class Meal {
  #props = undefined;
  #removed = [];

  /** @param {MealProps} props */
  constructor(props) {
    this.#props = props;
  }

  /**
   * Generates a order string for the current meal.
   * @returns {string}
   */
  text() {
    let result = `${this.#props.name}`;

    if (this.#isGrill()) {
      result += "\n  GRILL";

      return result;
    }

    if (this.#removed.length < 1)
      return result;

    for (let ri of new Set(this.#removed)) {
      const rem = this.#removed  // How much of this item was removed.
        .filter(e => e === ri)
        .length;

      if (this.#remaining(ri) < 1) {  // If any can still be removed.
        result += `\n  SEM ${toPortuguese[ri]}`;

        continue;
      }

      // If it's still possible to remove more.
      result += `\n  MENOS ${rem} ${toPortuguese[ri]}`;
    }

    return result;
  }

  /**
   * Lists the current condiments/sauces in the meal, considering #removed.
   * @returns {(CONDIMENT | SAUCE)[]}
   */
  getCurrent() {
    return [
      ...this.#props.condiments,
      ...this.#props.sauces,
    ].filter(e => !this.#removed.includes(e));
  }

  /**
   * Determine if it's grill by comparing to the minimal GRILL requirements.
   * @returns {bolean}
   */
  #isGrill() {
    const grill = [
      CONDIMENT.SLICED_CHEADDAR,
      PATTY.REGULAR,
      PATTY.QUARTER,
      PATTY.CHICKEN,
    ];

    return this.getCurrent()
      .filter(e => !grill.includes(e))
      .length < 1;
  }

  /**
   * Adds a single item (condiment or sauce) to the removed list.
   * @param {CONDIMENT | SAUCE} item Single condiment or sauce to be removed.
   */
  remove(item) {
    if (this.#remaining(item) < 1)
      return;

    this.#removed.push(item);
  }

  /**
   * Get the remaning count present in the current state of the meal to remove.
   * @param {CONDIMENT | SAUCE} item Condiment or sauce to count.
   * @returns number
   */
  #remaining(item) {
    const items = [  // How much is present in the meal by default.
      ...this.#props.condiments,
      ...this.#props.sauces,
    ]
      .filter(e => e === item)
      .length;

    const removed = this.#removed  // How much to be removed.
      .filter(e => e === item)
      .length;

    return items - removed;
  }
};

// [TODO]: Aicionar o método de troca de molho.
// [NOTE]: Considerando ketchup e mostarda como um único molho.
// [TODO]: Por configuração para mostrar SOMENTE o que vai.

const BigMac = new Meal({
  name: "Big Mac",
  bread: BREAD.BIGMAC,
  sauces: [
    SAUCE.BIGMAC,
    SAUCE.BIGMAC,
  ],
  condiments: [
    CONDIMENT.LETTUCE,
    CONDIMENT.LETTUCE,
    CONDIMENT.PICLES,
    CONDIMENT.PICLES,
    CONDIMENT.SLICED_CHEADDAR,
    CONDIMENT.REIDRATED_ONION,
    CONDIMENT.REIDRATED_ONION,
  ],
});

BigMac.remove(CONDIMENT.LETTUCE);
BigMac.remove(CONDIMENT.LETTUCE);
BigMac.remove(CONDIMENT.PICLES);
BigMac.remove(CONDIMENT.PICLES);
BigMac.remove(CONDIMENT.REIDRATED_ONION);
BigMac.remove(CONDIMENT.REIDRATED_ONION);
BigMac.remove(SAUCE.BIGMAC);
BigMac.remove(SAUCE.BIGMAC);

console.log(BigMac.text());
//console.log(BigMac.getCurrent());

const Cheeseburger = new Meal({
  name: "Cheeseburger",
  bread: BREAD.REGULAR,
  sauces: [
    SAUCE.KETCHUP,
    SAUCE.MUSTARD,
  ],
  condiments: [
    CONDIMENT.PICLES,
    CONDIMENT.SLICED_CHEADDAR,
    CONDIMENT.REIDRATED_ONION,
  ],
})

Cheeseburger.remove(SAUCE.KETCHUP);
Cheeseburger.remove(SAUCE.MUSTARD);
Cheeseburger.remove(CONDIMENT.PICLES);
Cheeseburger.remove(CONDIMENT.REIDRATED_ONION);

//console.log(Cheeseburger.text());
//console.log(Cheeseburger.getCurrent());
