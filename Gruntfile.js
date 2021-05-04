module.exports = function (grunt) {

  grunt.initConfig({
    cowsay: {
      moo: {
        options: {
          message: 'Never install NPM packages globally!'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-cowsay');
  grunt.registerTask('moo', 'Make cow say moo!', ['cowsay:moo']);

};
