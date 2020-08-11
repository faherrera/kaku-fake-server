const _ = require("lodash");

const MessagesService = (faker) => {
  const messages = [];
  _.times(10, () => {
    messages.push({
      "id": faker.random.uuid(),
      "subject": faker.lorem.text(),
      "email": faker.internet.email(),
      "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
      "createdAt": faker.date.between('2020-01-01', '2020-12-31'),
      "viewed": false, 
    });
  });
  return messages;
};

module.exports = MessagesService;
