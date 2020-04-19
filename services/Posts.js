const jsonDrawContent = require('../utils/jsonDrawContent');
const _ = require('lodash');

const PostService = (faker) => {
  const posts = [];
  _.times(10, () => {
    posts.push({
      "categoryId": faker.random.number(9999),
      "content": jsonDrawContent,
      "coverImageSrc": faker.image.imageUrl(1200, 500),
      "createDate": faker.date.between('2015-01-01', '2015-01-05'),
      "id": faker.random.uuid(),
      "slug": faker.lorem.slug(4),
      "title": faker.random.words(4),
      "updateDate": faker.date.between('2015-01-01', '2015-01-05'),
      "userId": faker.random.number(9999),
    });
  })
  return posts;
};

module.exports = PostService;