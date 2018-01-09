const gulp = require("gulp");
const nodemon = require('gulp-nodemon');
const spawn = require('child_process').spawn;
const run = require('gulp-run');


const stylusCompiler = {
    watch: () => {
        require("./build/compile-stylus").createCompiler("frontend").watch();
    },
    compile() {
        return Promise.all([
            require("./build/compile-stylus").createCompiler("frontend").compile(),
        ]);
    }
};

const startServer = () => {
    nodemon({
        script: './server/dev/dev-server.js',
        ext: 'js',
        "ignore": [
            ".idea/",
            ".git/",
            "gulpfile.js",
            "src/",
            "dist/",
            "node_modules/"
        ],
        env: {'NODE_ENV': 'development'}
    });
};


gulp.task("dev", () => {
    startServer();
    stylusCompiler.watch();
    if (!/^win/.test(process.platform)) { // linux
        spawn("webpack", ["--watch"], {stdio: "inherit"});
    } else {
        spawn('cmd', ['/s', "/c", "webpack", "--watch"], {stdio: "inherit"});
    }
});

gulp.task("package-assets", function() {
    gulp.src(["./src/frontend/assets/**/*.*", "!./src/**/*.styl"])
        .pipe(gulp.dest("./dist/assets/frontend"));
});

gulp.task("build-prod", () => {
    stylusCompiler.compile().then(() => {
        console.log("Running Webpack");
        run("webpack --config webpack.config.prod").exec(() => {
            console.log("webpack done");
        });
    })
});

