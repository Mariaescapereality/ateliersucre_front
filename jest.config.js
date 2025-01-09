module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.tsx$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'vue', 'ts', 'tsx'],
  transformIgnorePatterns: ['/node_modules/(?!@babel|@vue)'],
};

