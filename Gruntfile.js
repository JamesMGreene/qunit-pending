/*jshint node:true */
module.exports = function(grunt) {

  var isVerbose = grunt.option("verbose") === true;

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    run: {
      qunit_core_npm_install: {
        options: {
          cwd: "node_modules/qunitjs/"
        },
        exec: "npm install --loglevel=" + (isVerbose ? "warn" : "error")
      }
    },
    run_grunt: {
      qunit_core_build: {
        options: {
          minimumFiles: 1,
          maximumFiles: 1,
          task: ["build"],
          cwd: "node_modules/qunitjs/",
          log: isVerbose,
          process: function(result) {
            if (result.fail) {
              grunt.fail.warn("Failed to build custom QUnit commit. Is qunitjs@1.16.0 available yet?");
            }
            else {
              grunt.log.ok("Successfully built custom QUnit commit.");
            }
          }
        },
        src: ["node_modules/qunitjs/Gruntfile.js"]
      },
    },
    copy: {
      qunit_core_prepublish: {
        cwd: "node_modules/qunitjs/dist/",
        expand: true,
        src: ["**"],
        dest: "node_modules/qunitjs/qunit/"
      }
    },
    jshint: {
      options: true,
      all: ["*.js", "test/**/*.js"]
    },
    qunit: {
      files: ["test/**/*.html"]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-run");
  grunt.loadNpmTasks("grunt-run-grunt");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");

  // Build a custom QUnit commit
  grunt.registerTask("qunit_build", ["run", "run_grunt", "copy"]);

  // Default task.
  grunt.registerTask("default", ["qunit_build", "jshint", "qunit"]);
  // CI task.
  grunt.registerTask("travis", ["qunit_build", "jshint", "qunit"]);
};
