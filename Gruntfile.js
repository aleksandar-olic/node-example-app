module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['css'],
        options: {
          livereload: 35729
        }
      },
      coffee: {
        files: 'scripts/*.coffee',
        tasks: ['coffee']
      },
      concat: {
        files: ['scripts/hello.js','scripts/main.js'],
        tasks: ['concat']
      },
      uglify: {
        files: 'scripts/built.js',
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      all: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    concat: {
      options: {
        separator: '\n/*next file*/\n\n'
      },
      dist: {
        src: ['scripts/hello.js', 'scripts/main.js'],
        dest: 'scripts/built.js'
      }
    },

    uglify: {
      build: {
        files: {
          'scripts/built.min.js': ['scripts/built.js']
        }
      }
    },

    coffee: {
      compile: {
       files: {
         'scripts/hello.js': 'scripts/hello.coffee'
       }
     }
   },

   cssmin: {
    build: {
      src: 'styles/main.css',
      dest: 'styles/main.min.css'
    }
  },

  sass: {
    dev: {
      files: {
         // destination     // source file
        'styles/main.css': 'styles/main.scss'
              }
            }
          }
        });

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('js', ['coffee', 'concat', 'uglify']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

};