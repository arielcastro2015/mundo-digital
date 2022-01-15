const products = [
  { TELEFONO: "SAMSUNG GALAXY J8 DE 64 GB", TOTAL: 42700, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A01 CORE", TOTAL: 18600, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A02 ", TOTAL: 28500, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A02S 64GB", TOTAL: 33600, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A03S", TOTAL: 34500, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A10S 32GB", TOTAL: 30000, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A12 64GB", TOTAL: 37500, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A12 128GB", TOTAL: 40700, A: "A" },
  { TELEFONO: "SAMSUNG GLAXY M12", TOTAL: 41200, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A21s 64GB", TOTAL: 38200, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A21S 128GB", TOTAL: 45000, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A22", TOTAL: 46400, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A30S", TOTAL: 48500, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A31 64GB ", TOTAL: 41000, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A31 128GB", TOTAL: 46000, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A32 128GB", TOTAL: 52400, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A52 128", TOTAL: 64900, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A70 128GB", TOTAL: 64200, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY A72", TOTAL: 75300, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY S21", TOTAL: 13520, A: "A" },
  { TELEFONO: "SAMSUNG GALAXY S21 PLUS", TOTAL: 15100, A: "A" },
  { TELEFONO: "MOTOROLA MOTO E6I 32gb", TOTAL: 24400, A: "A" },
  { TELEFONO: "MOTOROLA MOTO E7 ", TOTAL: 28200, A: "A" },
  { TELEFONO: "MOTOROLA MOTO E20", TOTAL: 31500, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G9 POWER 128GB", TOTAL: 45700, A: "A" },
  { TELEFONO: "MOTO G9 PLUS 128GB", TOTAL: 51700, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G7 PLUS", TOTAL: 45500, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G20", TOTAL: 37600, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G20 128GB", TOTAL: 41200, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G30", TOTAL: 45500, A: "A" },
  { TELEFONO: "MOTOROLA MOTO G60s", TOTAL: 61000, A: "A" },
  { TELEFONO: "MOTOROLA MOTO E7I POWER", TOTAL: 31000, A: "A" },
  { TELEFONO: "XIAOMI REDMI 7A 32GB", TOTAL: 26800, A: "A" },
  { TELEFONO: "XIAOMI REDMI NOTE 8 64GB", TOTAL: 43300, A: "A" },
  { TELEFONO: "XIAOMI REDMI 9", TOTAL: 39400, A: "A" },
  { TELEFONO: "XIAOMI REDMI NOTE 9 128", TOTAL: 55000, A: "A" },
  { TELEFONO: "XIAOMI REDMI NOTE 10 PRO 128", TOTAL: 89500, A: "A" },
  { TELEFONO: "XIAOMI REDMI NOTE 10 128GB", TOTAL: 60000, A: "A" },
  { TELEFONO: "XIAOMI MI 11i 128GB", TOTAL: 12470, A: "A" },
  { TELEFONO: "XIAOMI POCO M3 64GB", TOTAL: 50200, A: "A" },
  { TELEFONO: "XIAOMI POCO M3 128GB", TOTAL: 52200, A: "A" },
  { TELEFONO: "XIAOMI POCO M3 PRO 5G", TOTAL: 53800, A: "A" },
  { TELEFONO: "XIAOMI MI A3 64GB", TOTAL: 42000, A: "A" },
  { TELEFONO: "XIAOMI POCO F3 5G", TOTAL: 84400, A: "A" },
  { TELEFONO: "XIAOMI POCO X3 PRO 256GB", TOTAL: 74000, A: "A" },
  { TELEFONO: "XIAOMI POCO X3 PRO 128GB", TOTAL: 67800, A: "A" },
  { TELEFONO: "XIAOMI POCO X3 NFC128", TOTAL: 65800, A: "A" },
];

const lowerCase = (string) =>
  string.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());

export const productsChange = [
  ...products.map(({ TELEFONO, TOTAL }) => ({
    TELEFONO: lowerCase(TELEFONO),
    TOTAL,
  })),
];