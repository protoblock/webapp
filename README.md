# webapp

### Getting Started

```shell
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Build

```shell
$ gulp build                    # or, `gulp build --release`
```

By default, it builds in debug mode. If you need to build in release mode, add
`--release` flag.  This will minimize your JavaScript; you will also see some warnings from
[uglify](https://github.com/mishoo/UglifyJS) where it removes unused code from your release.

### How to Run

```shell
$ gulp                          # or, `gulp --release`
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.

### Updating API URL

To update the API URL for a deployment, edit the getApiUrl() function in src/api/apiUtils.js

### Attribution

This project was built on top of the [Kriasoft React Starter Kit](https://raw.githubusercontent.com/kriasoft/react-starter-kit)
The MIT License © Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
