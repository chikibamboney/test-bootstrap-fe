'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        watch: {
            files: "css/*.less",
            tasks: ["less"]
        },
        less: {
            development: {
                options: {
                    paths: ["css/"],
                    compress: true
                },
                files: {
                    "css/main.css": "css/main.less"
                }
            }
        }
    });
    grunt.registerTask('default', ['less']);
};
