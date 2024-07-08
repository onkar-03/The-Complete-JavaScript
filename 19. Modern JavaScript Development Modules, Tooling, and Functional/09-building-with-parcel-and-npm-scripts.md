<!-- Building with Parcel and NPM Scripts: -->

## Using Parcel as Our Module Bundler

We will use Parcel as our module bundler. Parcel is super fast and easy to use, and more importantly, it works out of the box without any configuration

Webpack is the most popular bundler, especially in the React world. However, Webpack is way too complex to use . Therefore, we will be using Parcel for its simplicity and efficiency

## Production vs Development

### Production

- **Definition:** The stage of making software available for actual use by end-users
- **Activities:** Deploying the application, optimizing performance, ensuring security, and monitoring for issues
- **Tools:** Deployment tools (e.g., CI/CD pipelines), server management services (e.g., AWS, Azure), and monitoring tools (e.g., logging services, performance monitoring)
- **Goal:** To provide a stable, performant, and secure environment for users to access and use the application as intended

### Development

- **Definition:** The stage of creating, testing, and refining software.
- **Activities:** Writing code, designing features, debugging, and integrating components.
- **Tools:** Code editors, version control systems (e.g., Git), development frameworks (e.g., React, Angular), and bundlers (e.g., Parcel, Webpack).
- **Goal:** To create a functional, well-tested version of the software that meets specified requirements

## Understanding Production and Development Dependencies

When you install packages like lodash, leaflet, or similar utility libraries, the decision to use `--save-dev` or not depends on how you plan to use them in your project

### Production Dependencies (`--save`)

- These are dependencies that your application relies on to function correctly in production

- This includes libraries like Leaflet, lodash, React, Express, or database drivers that are necessary for the core functionality of your application

### Development Dependencies (`--save-dev`)

- These are typically tools or libraries necessary for development and testing purposes but are not needed in production

- Examples include testing frameworks, task runners, or bundlers like Parcel itself. These dependencies are not bundled with your production code and are excluded when you build your application for deployment

### Default Behavior

- When you install any packages like leaflet or lodash using the normal commands (e.g., `npm install leaflet`), `--save` is used by default

- This means these packages are added to the list of production dependencies unless you explicitly specify `--save-dev`

_Understanding the difference between these two types of dependencies helps ensure that your production builds are optimized and that your development environment has all the tools it needs_

## Installing and Using Parcel

Parcel is a build tool available on NPM, and we'll use NPM to install it.

### Installing Parcel

To install Parcel as a development dependency, use the following command:

```bash
npm install parcel --save-dev
```

This installs Parcel as a devDependency, which is a tool we need to build our application but not a dependency included in our actual code

### Running Parcel

Parcel is a command line interface tool, but running `parcel` directly won't work because it's installed locally to the project. To use Parcel, we have two options: NPX or NPM scripts

#### Locally Installed vs. Global Installations

- **Locally Installed Packages:**

  - **Scope:** Installed only for the current project in the `node_modules` directory.
  - **Usage:** You cannot run commands directly (e.g., `parcel`) without using NPX or NPM scripts
  - **Example with NPX:**

    ```bash
    npx parcel index.html
    ```

    This command runs Parcel locally for the `index.html` file.

- **Global Installations:**
  - **Scope:** Installed globally on your system and accessible from any directory.
  - **Usage:** Commands can be run directly (e.g., `parcel index.html`) without NPX.
  - **Example:**
    `bash
parcel index.html
`
    This command works because Parcel is installed globally

Understanding these distinctions helps manage dependencies effectively and ensures consistent development environments

#### Using NPX to Start Parcel for Development

NPX is built into NPM and allows us to run locally installed packages. To run Parcel with NPX, use the following command:

```bash
npx parcel index.html
```

- Running `npx parcel index.html` will do the job for u guys now

- index.html is the Entry Point which we need to specify to the parcel

- Parcel scans this entry point file to find references to JavaScript and CSS files that need to be included in the final bundled output

#### Using NPM Script to Start Parcel for Development

To simplify running Parcel for development purposes, you can define an NPM script in your `package.json` file. This script will start Parcel with your `index.html` as the entry point

###### Step-by-Step Guide

**Define NPM Script:**

Open your `package.json` file and add a `"start"` script under `"scripts"`:

```json
"scripts": {
  "start": "parcel index.html"
}
```

- Now simply running `npm run start` will do the work for U !!!

## Parcel Development Server

When you start Parcel for development, it not only bundles your application but also starts a development server that serves your project on a specific URL

### Starting the Development Server

Parcel automatically starts the development server when you run it with your `index.html` as the entry point. For example, using an NPM script:

```bash
npm run start
```

### Accessing the Development Server

Once Parcel is running, it opens a new tab in your default web browser, typically at [http://localhost:1234](http://localhost:1234) (or [http://127.0.0.1:1234](http://127.0.0.1:1234)). Here's what happens:

- **Port Number:** Parcel uses port `1234` by default for serving your application. This is different from other tools like Live Server, which often use port `8080`
- **Localhost:** `localhost` and `127.0.0.1` are essentially the same; `localhost` is a more user-friendly alias for the IP address `127.0.0.1`

### Comparison with Live Server

- **Functionality:** Parcel's development server functions similarly to tools like Live Server
- **Port Difference:** The main distinction is the port number: Parcel uses `1234`, while Live Server typically uses `8080`
- **Ease of Use:** Parcel integrates bundling and serving into a single command (`parcel index.html` or `npm start`), providing a seamless development experience

## Understanding the Development Process with Parcel

- When you run Parcel to prepare your application for production, it creates a `dist` folder, which stands for distribution

- This folder contains the optimized and bundled version of your application that you can deploy to your final users

### Contents of the `dist` Folder

- **index.html:** Parcel generates a new `index.html` file in the `dist` folder. This file typically includes references to the bundled JavaScript and CSS files
- **Bundled JavaScript Files:** Parcel creates JavaScript files that are bundled versions of your application's code. These files consolidate all your JavaScript modules into a single, optimized script file (`script.<hash>.js`)

### Analysis of the Bundled JavaScript File

- **Bundle Content:** The bundled JavaScript file (`script.<hash>.js`) contains all the JavaScript code from your application, including modules and dependencies
- **Functionality:** It includes functions and utilities that were imported and used across your modules, such as `cloneDeep` or other libraries you may have used

### Real-World Application

- **Deployment:** The content of the `dist` folder is what you would deploy to your production environment. It represents the compiled and optimized version of your application ready for end-user consumption.
- **Unused Code:** Parcel optimizes your code during the bundling process, removing unused code and optimizing performance. This ensures that the final build is streamlined and efficient for production use

## Building with Parcel using npm

To build your application for production using Parcel, you can define a build script in your `package.json` file. This script executes Parcel's build command, preparing your application for deployment

### Setting Up the Build Script

1. **Define the Build Script:**

   Open your `package.json` file and add a `"build"` script under `"scripts"`:

   ```json
   "scripts": {
     "build": "parcel build index.html"
   }
   ```

   This script tells npm to run `parcel build index.html` when you execute `npm run build`

### What Does the Build Script Do?

- **Parcel Build Command:** When you run `npm run build`, Parcel starts the build process
- **Building for Production:** Parcel optimizes your application for production by bundling all your JavaScript, CSS, and other assets into a minimized format
- **Output:** Parcel creates a `dist` folder containing the production-ready version of your application
- **HTML Entry Point:** `index.html` serves as the entry point for Parcel during the build process. Parcel scans this file to determine the dependencies and generate the necessary bundles

### Why Use a Build Script?

- **Automation:** Automates the process of building your application for deployment
- **Consistency:** Ensures that every build follows the same process, minimizing errors and inconsistencies
- **Optimization:** Parcel optimizes your code during the build, removing unused code and optimizing performance for production use
