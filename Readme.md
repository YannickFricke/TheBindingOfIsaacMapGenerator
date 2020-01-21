# The binding of Isaac map generator

## About the project

"The binding of Isaac map generator" is a handy tool for creating your own maps for the game [The binding of Isaac](https://store.steampowered.com/app/113200/The_Binding_of_Isaac/).

You can find a hosted version [here](https://the-binding-of-isaac-map-generator.netlify.com/).

### Used technologies

* [TypeScript](https://www.npmjs.com/package/typescript)
* [React.JS](https://www.npmjs.com/package/react)
* [styled-components](https://www.npmjs.com/package/styled-components)
* [parcel (as bundler)](https://www.npmjs.com/package/parcel)

## Dependencies
* [Node.JS](https://nodejs.org/en/) (tested with version 12)
* [Yarn](https://www.npmjs.com/package/yarn) (the package manager)

If you have Node.JS installed you can install yarn with the following command: `npm i -g yarn`.

Hint: Make sure that `npm` is inside the PATH environment variable.

You can check that with `npm --version` (it will print the current installed version of npm).

## Running the development server

You only need to run the dev script with the following command: `yarn run dev`

Then the project will be build and you get a development server on [http://localhost:1234](http://localhost:1234).

## Building the project

For generating a production optimized and deployable version of the map generator you need to run the `build` script with the following
command: `yarn run build`.

If you would like to host the files at a specific subdirectory on your webserver you need to pass an argument to the
build command like this: `yarn run build --public-url /my/sub/directory`.

The generated files can be found inside the `./dist` directory.
