const faker = require('faker/locale/es');

// Services
const PostService = require('./services/Posts');
const UserService = require('./services/Users');
const ConfigurationService = require('./services/Configurations');

//Declare Services
const configurations = ConfigurationService();
const posts = PostService(faker);
const users = UserService(faker);

const generatedData = () => ({
    configurations,
    posts,
    users,
  });

module.exports = generatedData