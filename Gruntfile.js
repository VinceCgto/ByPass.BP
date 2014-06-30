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
		js: {
			files: ['<%= pkg.directories.js_dev %>/**/*'],
			tasks: ['copy']
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
	},
	open : {
	    dev : {
	    	path: 'http://localhost:9090'
	    },
	    dist : {
			path: 'http://caregnato.be/dev/bypass'
	    }
	}
});

grunt.loadNpmTasks ('grunt-contrib-uglify');
grunt.loadNpmTasks ('grunt-autoprefixer');
grunt.loadNpmTasks ('grunt-contrib-sass');
grunt.loadNpmTasks ('grunt-contrib-watch');
grunt.loadNpmTasks ('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-open');

// Default task(s).
grunt.registerTask('default', ['sass:dev', 'autoprefixer:dev', 'copy', 'imagemin', 'open:dev', 'watch']);
grunt.registerTask('dist', ['sass:dist', 'autoprefixer:dev', 'copy', 'imagemin', 'uglify', 'open:dist']);

};