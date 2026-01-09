const INGREDIENTS = {
  breads: [
    { id: "regular",  name: "Regular" },
    { id: "bigmac",   name: "Big Mac" },
    { id: "quarter",  name: "Quarterão" },
    { id: "dark_bun", name: "Pão Escuro (Integral)" },
  ],
  condiments: [
    { id: "lettuce",         name: "Alface" },
    { id: "picles",          name: "Picles" },
    { id: "sliced_cheaddar", name: "Queijo Cheaddar" },
    { id: "reidrated_onion", name: "Cebola Reidratada" },
    { id: "fresh_onion",     name: "Cebola Fresca" },
    { id: "shoyo_onion",     name: "Cebola Shoyo" },
  ],
  sauces: [
    { id: "bigmac",          name: "Molho Big Mac" },
    { id: "ketchup",         name: "Ketchup" },
    { id: "mustard",         name: "Mostarda" },
    { id: "mcmelt_cheaddar", name: "Molho Cheadar McMelt" },
    { id: "mayonese",        name: "Mayonese" },
    { id: "mcmayo",          name: "Méquinese" },
    { id: "cbo",             name: "CBO" },
    { id: "cream_rach",      name: "Cream Ranch" },
    { id: "tasty",           name: "Molho Tasty" },
  ],
  patty: [
    { id: "10:1",    name: "Carne 10:1" },
    { id: "4:1",     name: "Carne 4:1 (Quarterão)" },
    { id: "chicken", name: "Carne Chicken" },
  ]
};

/*
  Lista de metodos para um lanche
    - Mostrar texto
    - Remover condimento
    - Trocar molho
*/

console.log(INGREDIENTS.sauces);