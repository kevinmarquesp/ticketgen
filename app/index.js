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