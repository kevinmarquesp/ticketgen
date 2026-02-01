const Bread = Object.freeze({
  REGULAR_BUN: "REGULAR_BUN",
  BIGMAC_BUN: "BIGMAC_BUN",
  DARK_BUN: "DARK_BUN",
  QUARTER_BUN: "QUARTER_BUN",
});

/** @typedef {typeof Bread[keyof typeof Bread]} Bread */

const Condiment = Object.freeze({
  LETTUCE: "LETTUCE",
  PICLES: "PICLES",
  SLI_CHEADDAR: "SLI_CHEADDAR",
  REI_ONION: "REI_ONION",
  FRESH_ONION: "FRESH_ONION",
  SHOYO_ONION: "SHOYO_ONION",
});

/** @typedef {typeof Condiment[keyof typeof Condiment]} Condiment */

const Sauce = Object.freeze({
  BIGMAC_SAUCE: "BIGMAC_SAUCE",
  KETCHUP: "KETCHUP",
  MUSTARD: "MUSTARD",
  CHEADDAR_MCMELT: "CHEADDAR_MCMELT",
  MAYONESE: "MAYONESE",
  CBO: "CBO",
  CREAM_RANCH: "CREAM_RANCH",
  TASTY: "TASTY",
});

/** @typedef {typeof Sauce[keyof typeof Sauce]} Sauce */

const Patty = Object.freeze({
  QUARTER: "QUARTER",
  REGULAR: "REGULAR",
  CHICKEN: "CHICKEN",
});

/** @typedef {typeof Patty[keyof typeof Patty]} Patty */

/** @typedef {Bread | Condiment | Sauce | Patty} Ingredient */

/** 
 * @type {Ingredient, {
 *  name: string;
 *  abbr: string;
 * }>}
 */
const Translate = Object.freeze({
  [Bread.REGULAR_BUN]: { name: "Pão Regular", abbr: "PÃO REG" },
  [Bread.BIGMAC_BUN]: { name: "Pão de BigMac", abbr: "PÃO BIG" },
  [Bread.DARK_BUN]: { name: "Pão Escuro", abbr: "PÃO ESCURO" },
  [Bread.QUARTER_BUN]: { name: "Pão de Quarteirão", abbr: "PÃO QUARTEIRÃO" },
  [Condiment.LETTUCE]: { name: "Alface", abbr: "ALFACE" },
  [Condiment.PICLES]: { name: "Picles", abbr: "PICLES" },
  [Condiment.SLI_CHEADDAR]: { name: "Cheaddar Fatiado", abbr: "CHEADDAR" },
  [Condiment.REI_ONION]: { name: "Cebola Reidratada", abbr: "CEBOLA REIDR" },
  [Condiment.FRESH_ONION]: { name: "Cebola Fresca", abbr: "CEBOLA FRES" },
  [Condiment.SHOYO_ONION]: { name: "Cebola Shoyo", abbr: "CEB SHOYO" },
  [Sauce.BIGMAC_SAUCE]: { name: "Molho BigMac", abbr: "MOLHO BIG" },
  [Sauce.KETCHUP]: { name: "Ketchup", abbr: "KETCHUP" },
  [Sauce.MUSTARD]: { name: "Mostarda", abbr: "MOSTARDA" },
  [Sauce.CHEADDAR_MCMELT]: { name: "Molho Cheaddar McMelt", abbr: "MOLHO CHEADDAR" },
  [Sauce.MAYONESE]: { name: "Méquinese", abbr: "MAIONESE" },
  [Sauce.CBO]: { name: "Molho CBO", abbr: "CBO" },
  [Sauce.CREAM_RANCH]: { name: "Molho Cream Ranch", abbr: "MOLHO RANCH" },
  [Sauce.TASTY]: { name: "Molho Big Tasty", abbr: "MOLHO TASTY" },
  [Patty.CHICKEN]: { name: "Carne de Chicken", abbr: "CAR CHICK" },
  [Patty.REGULAR]: { name: "Molho Big Tasty", abbr: "CAR REGULAR" },
  [Patty.QUARTER]: { name: "Molho Big Tasty", abbr: "CAR QUART" },
});