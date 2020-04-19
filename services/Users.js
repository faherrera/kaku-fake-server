const _ = require('lodash');

const UserService = (faker) => {
  const users = [];
  _.times(10, () => {
    users.push({
      "address": faker.address.streetAddress(),
      "avatarImageSrc": faker.image.avatar(),
      "city": faker.address.city(),
      "country": faker.address.country(),
      "email": faker.internet.email(),
      "firstName": faker.name.firstName(),
      "id": faker.random.number(999999),
      "lastName": faker.name.lastName(),
      "notes": faker.lorem.paragraphs(3),
      "username": faker.internet.userName(),
      "zipCode": faker.address.zipCode(),
    });
  });
  return users;
};
module.exports = UserService;