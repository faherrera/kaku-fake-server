const faker = require('faker/locale/es');
const _ = require('lodash');
const jsonDrawContent = require('./utils/jsonDrawContent');
faker.locale = "es"; // make sure

const usersData = () => {
    const users = [];
    _.times(10, () => {
      users.push({
        "id": faker.random.number(999999),
        "username": faker.internet.userName(),
        "email": faker.internet.email(),
        "address": faker.address.streetAddress(),
        "city": faker.address.city(),
        "country": faker.address.country(),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "notes": faker.lorem.paragraphs(3),
        "zipCode": faker.address.zipCode(),
        "avatarImageSrc": faker.image.avatar(),
      });
    });
    return users;
};

const postsData = () => {
    const posts = [];
    _.times(10, () => {
      posts.push({
        "id": faker.random.uuid(),
        "title": faker.random.words(4),
        "content": jsonDrawContent,
        "coverImageSrc": faker.image.imageUrl(1200,500),
        "slug": faker.lorem.slug(4),
        "createDate": faker.date.between('2015-01-01', '2015-01-05'),
        "updateDate": faker.date.between('2015-01-01', '2015-01-05'),
        "categoryId": faker.random.number(9999),
        "userId": faker.random.number(9999),
      });
    })
    return posts;
};

const users = usersData();
const posts = postsData();
const generatedData = () => ({
    users,
    posts,
  });

module.exports = generatedData