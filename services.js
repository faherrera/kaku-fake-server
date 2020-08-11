const faker = require('faker/locale/es');

// Services
const PostService = require('./services/Posts');
const MessagesService = require('./services/Messages');
const GalleryService = require('./services/Gallery');
const UserService = require('./services/Users');
const ConfigurationService = require('./services/Configurations');

//Declare Services
const configurations = ConfigurationService();
const posts = PostService(faker);
const users = UserService(faker);
const messages = MessagesService(faker);
const gallery = GalleryService(faker);

const generatedData = () => ({
    configurations,
    messages,
    posts,
    users,
    gallery,
  });

module.exports = generatedData