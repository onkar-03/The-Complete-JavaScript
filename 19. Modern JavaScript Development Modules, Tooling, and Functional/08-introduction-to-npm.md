<!-- Introduction to NPM: -->

## What is NPM?

**_NPM (Node Package Manager)_** is a critical tool in modern web development, serving both as software on your computer and a repository for packages. It addresses several challenges that arise when managing dependencies in projects

## Why do we need NPM?

1. **Dependency Management:**

   - Before NPM, developers often included external libraries directly into HTML using `<script>` tags
   - This approach led to global variables being exposed, as seen in the example of including `leaflet.js` in the Mapty project
   - While this might work for small projects, it becomes unwieldy in larger projects

2. **Scalability Issues:**

   - In large projects with multiple team members, managing dependencies manually becomes impractical
   - Including JavaScript libraries directly in HTML results in a cluttered codebase and makes it difficult to track and update dependencies

3. **Dependency Chains:**

   - Many libraries depend on other libraries, forming dependency chains
   - Manually managing these chains is complex and error-prone, especially when updates or changes are required

4. **Updates and Maintenance:**

   - Without a package manager like NPM, updating libraries involves manual downloads, replacements, and potential conflicts
   - This process is not only cumbersome but also increases the risk of introducing errors into the project

5. **Version Control:**
   - NPM provides version control for packages, allowing developers to specify exact versions or ranges of versions required for their project
   - This ensures consistency and avoids issues that can arise from using incompatible or outdated library versions

In summary, NPM simplifies the process of managing dependencies by providing a centralized repository, version control, and automated installation processes

## Initializing a Node Package

### Steps:

#### 1. Open your terminal

Open your terminal (Command Prompt, Git Bash, or any other terminal application) and navigate to the directory where you want to initialize your Node package

```sh
cd path/to/your/project
```

#### 2. Run npm init

Use the following command to initialize a new Node package in your project directory. This will prompt you to enter information about your project

```sh
npm init
```

#### 3. Fill out the prompts

You will be prompted to enter the following information:

- **package name**: The name of your package
- **version**: The initial version (default is `1.0.0`)
- **description**: A short description of your package
- **entry point**: The entry point file (default is `index.js`)
- **test command**: The command to run tests
- **git repository**: The URL of your Git repository
- **keywords**: Keywords describing your package
- **author**: Your name
- **license**: The license (default is `ISC`)

The default values for each prompts is given inside the parenthesis '()'

If you are new or just need to create a package quickly, you can press `Enter` to accept the defaults for all prompts

After completing the prompts, `npm` generates a `package.json` file

This `package.json` file is essential for managing your project dependencies and configurations using NPM

## Installing the Leaflet Library using npm

To install the Leaflet library using npm, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the command:

   ```bash
   npm install leaflet
   ```

   or

   ```bash
   npm i leaflet
   ```

This command uses npm (Node Package Manager) to install the Leaflet library into your project

After running the command, two things will happen:

1. **Dependencies in `package.json`**:

- A new entry for Leaflet will be added to the dependencies section of your `package.json` file, indicating the version of Leaflet that was installed

  ```json
  "dependencies": {
    "leaflet": "^1.9.4"
  }
  ```

2. **Node Modules Folder Description**:

- A `node_modules` folder will be created (if it doesn't already exist), containing the Leaflet library along with its dependencies.
- The more Modules we install they all ge stored in the node_modules FOlder

### Using Leaflet with a Module Bundler

Leaflet is a JavaScript library for interactive maps that uses the CommonJS module system. This means you typically cannot directly import it into your HTML file without using a module bundler like Webpack or Parcel. Here's why:

1. **CommonJS Modules:** Leaflet's codebase is structured as CommonJS modules (`require` and `module.exports`), which are not directly compatible with browsers that expect ES6 modules (`import` and `export`)

2. **Browser Compatibility:** Browsers natively support ES6 modules, not CommonJS modules. Module bundlers like Webpack or Parcel convert CommonJS modules into a format that browsers can understand

Therefore, since we're not currently using the Leaflet library, we won't need to employ a module bundler or similar tools

## Installing the Lodash ES Module

To install the Lodash library (specifically the ES module version), follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the command:

   ```bash
   npm install lodash-es
   ```

This command installs the ES module version of Lodash, which is compatible with modern JavaScript module systems.

## Copying Nested Objects in JavaScript

Copying nested objects in JavaScript can be tricky because directly assigning or using methods like `Object.assign()` or spread (`...`) operators may not deeply clone nested structures. This means that inner objects and arrays could still reference the original data. For example:

```javascript
let original = {
  a: 1,
  b: {
    c: 2,
  },
};

let copy = { ...original };

copy.b.c = 3;

console.log(original); // { a: 1, b: { c: 3 } }
console.log(copy); // { a: 1, b: { c: 3 } }
```

Here, changing copy.b.c also affects original.b.c, indicating shallow copying.

## Deep Cloning Nested Objects with Lodash

Lodash provides a utility function `cloneDeep()` specifically designed to create a deep copy of nested objects and arrays. This method recursively traverses the object and creates a complete duplicate, ensuring that all nested structures are independent

### Using `cloneDeep` from Lodash

To use the `cloneDeep` function from Lodash in your JavaScript file, import it as follows:

- Remember that the `cloneDeep` is exported as default hence we can give it any name we want while importing, but here we use the same name as cloneDeep only !!

```javascript
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// Example usage:
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Creating a Deep Clone of the Original
const stateClone = cloneDeep(state);
console.log(stateClone);

// Creating a Deep Clone of the Clone
const stateDeepClone = cloneDeep(stateClone);

// Change the original state
state.user.loggedIn = false;

// Viewing Results
console.log(state.user.loggedIn); //false

// The value for the Cloned ones don't change
console.log(stateClone.user.loggedIn); // true
console.log(stateDeepClone.user.loggedIn); // true
```

### Benefits of Copying Nested Objects with Lodash

- **Deep Cloning:** `cloneDeep()` duplicates nested objects completely, preventing shared references that could lead to unintended data mutations.
- **Reliability:** By using lodash's deep cloning function, developers can confidently manipulate nested data structures without worrying about unintentional side effects from shared references.

### Conclusion

Lodash simplifies the task of copying nested objects in JavaScript by providing `cloneDeep()`, which guarantees that all levels of nesting are cloned deeply and independently. This enhances predictability and reliability in JavaScript applications, making it an essential tool for managing complex data structures.

## Managing Dependencies in Real Projects

When working on real projects, it's crucial not to include the `node_modules` folder in your version control system, such as Git. This folder contains all installed packages and their dependencies, which can be extensive and constantly changing. Instead, include the `package.json` and `package-lock.json` files in your repository.

The `package.json` file lists all the dependencies required for your project, along with their versions. The `package-lock.json` file, introduced in npm 5, provides a detailed description of the exact tree that was generated during the install process. Together, these files allow anyone else working on the project to recreate the `node_modules` folder accurately.

To set up the project on a new system or for another developer, simply run the following command:

```bash
npm i
```

This command reads the package.json and package-lock.json files and installs all necessary dependencies into the node_modules folder, ensuring consistency across environments.
