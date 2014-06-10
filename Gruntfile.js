module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch: {
		sass: {
			files: ['<%= pkg.directories.sass %>/**/*.scss'],
			tasks: ['sass:dev', 'autoprefixer:dev']
		},
		html: {
			files: ['index.html']
		},
		options: {
			livereload: true
		}
	},
	sass: {
		dev: {
			options: {
				style: 'nested',
				trace: true,
			},
			files: {
				'<%= pkg.directories.css %>/style.css': '<%= pkg.directories.sass %>/style.scss'
			}
		},
		dist: {
			options: {
				style: 'compressed'
			},
			files: {
				'<%= pkg.directories.css %>/style.css': '<%= pkg.directories.sass %>/style.scss'
			}
		}
	},
	copy: {
		files: {
			expand: true,
			cwd: '<%= pkg.directories.js_dev %>',
			src: ['**'],
			dest: '<%= pkg.directories.js %>'
		}
	},
	uglify: {
		options: {
			mangle: false
		},
		my_target: {
			files: {
				'<%= pkg.directories.js %>/script.js': ['<%= pkg.directories.js %>/script.js']
			}
		}
	},
	autoprefixer: {
		dev: {
			options: {
				browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
			},
			src: '<%= pkg.directories.css %>/style.css',
			dest: '<%= pkg.directories.css %>/style.css'
		}
	},
	imagemin: {
		files: {
			expand: true,
			cwd: '<%= pkg.directories.img %>',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= pkg.directories.img_min %>'
		}
	}
});

grunt.loadNpmTasks ('grunt-contrib-uglify');
grunt.loadNpmTasks ('grunt-autoprefixer');
grunt.loadNpmTasks ('grunt-contrib-sass');
grunt.loadNpmTasks ('grunt-contrib-watch');
grunt.loadNpmTasks ('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-imagemin');

// Default task(s).
// grunt.registerTask('imgmin', ['imagemin']);
grunt.registerTask('default', ['autoprefixer:dev','sass:dev', 'copy', 'imagemin', 'watch']);
grunt.registerTask('dist', ['autoprefixer:dev','sass:dist', 'copy', 'imagemin', 'uglify']);

};