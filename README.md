# Starter Project for Phaser 3 with Visual Studio Code, TypeScript, and NodeJS

The following is a starter project to get started with a new game in Phaser 3 and Visual Studio Code, using TypeScript and NodeJS.

> If using GitHub, you can use the **Use this template** button to create a new Phaser 3 project from this starter template.

## What This Project Provides

- src
	- assets
		- This directory can be used to store any assets (images, audio, etcetera) that your game will use.
	- plugins
		- This directory is intended to store any plugins that are used by your game.
	- ts
		- This directory is intended to store your TypeScript files, and includes a .gitignore so that any JavaScript files that are built aren't committed.
		- A possible directory structure, as well as a few starter scenes, have been added for ease, but can be removed without issue.
	- app.css can include any styling necessary for your application.
	- favicon.ico
		- HTML5 Logo by [World Wide Web Consortium/W3C](http://www.w3.org/) and included here based upon the [logo FAQ](http://www.w3.org/html/logo/faq.html) allowing it (and it seems like the best logo to start with).
	- index.html
		- The `title` and `h1` elements should be updated to match the needs of your game.
		- Includes a reference to the minified Phaser library.
		- Also includes a reference to a JavaScript file, which the Visual Studio project is setup to output TypeScript files to, and which should be updated to match your needs.
- gulpfile.js includes gulp tasks used to build the site.
- package.json contains the Node packages used by this project.
- README.md is this file, and should be replaced with whatever content is needed for your game.
- tsconfig.json
	- This file determines how TypeScript will compile the project.
	- By default all TypeScript files will be compiled into a single app.js file in the root of the project.
- webpack.config.js
	- This file contains the default webpack configuration.
- .editorconfig
	- "EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs." See https://editorconfig.org/
- .eslintignore
	- This file sets which directories/files should not be parsed by eslint.
- .eslintrc.js
	- This file contains the starting eslint configurations. Base support for TypeScript is included.
	- See ESLint [Rules](https://eslint.org/docs/rules/) for more information.
- .gitlab-ci.yml
	- Adds support to build and host your site on [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).
- .vscode/tasks.json
	- Used by Visual Studio Code when running the build task.

## How to Build the Site
To build this project you'll need [Node.js](https://nodejs.org) installed.

Next run `npm install` in the root directory to install the various dependencies.

Run `npm run build` after modifying code to populate the **public** directory with the final site contents. You can instead run `npm run build-dev` to build the JavaScript in development mode, or `npm run start:dev` to run an automatically updating instance.

If you'd like to run a simple web server, install http-server via `npm install http-server -g`, which can then be run from the public directory by running `http-server`.

If you'd like to lint your TypeScript/JavaScript, run `npm run lint`.

## Upgrading Phaser
To upgrade Phaser 3 run `npm upgrade phaser`.
