/*jshint node:true */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: true,
      all: ["*.js", "test/**/*.js"]
    },
    qunit: {
      files: ["test/**/*.html"]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");

  // Default task.
  grunt.registerTask("default", ["jshint", "qunit"]);
  // CI task.
  grunt.registerTask("travis", ["jshint", "qunit"]);
};
