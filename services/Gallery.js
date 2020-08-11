const _ = require("lodash");

const GalleryService = (faker) => {
  const gallery = [];
  _.times(10, () => {
    gallery.push({
      "id": faker.random.uuid(),
      "title": faker.random.words(4),
      "imageUrl": faker.image.imageUrl(),
      "createdAt": faker.date.between('2020-01-01', '2020-12-31'),
      "viewed": false, 
    });
  });
  return gallery;
};

module.exports = GalleryService;
