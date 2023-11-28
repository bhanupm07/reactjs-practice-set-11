import { faker } from "@faker-js/faker";

faker.seed(123);

export const data = [...Array(50)].map((item) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.url(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.helpers.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale",
  ]),
  idealFor: faker.helpers.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
  level: faker.helpers.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional",
  ]),
  color: faker.internet.color(),
}));
