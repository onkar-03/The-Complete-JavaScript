## What is Transpiling?

In JavaScript, transpiling commonly involves converting newer ECMAScript versions (like ES6, ES7) into older versions (like ES5) that are more widely supported by browsers and environments

## What is Babel?

- Babel is a popular tool used for transpiling JavaScript code
- It's particularly useful for converting modern JavaScript (ES6 and beyond) into compatible versions like ES5, which is widely supported across various browsers and environments
- Developers often use Babel as part of their build process to ensure that their JavaScript code remains accessible and functional for users using older browsers or environments that do not yet support the latest JavaScript features

### Babel Presets & Plugins

#### Plugins:

- Plugins are small packages of code that instruct Babel on how to transform specific pieces of syntax in your code
- Developers use plugins to add support for specific JavaScript syntax features that may not be natively supported by all browsers or environments
- For example, plugins can transform arrow functions, async/await syntax, class properties, and more

#### Presets:

- Presets are pre-configured sets of plugins bundled together
- They simplify the setup process by allowing developers to apply a collection of plugins with a single configuration entry
- Presets are commonly used to define the target environments and specify which JavaScript features to transpile
- For instance, the `@babel/preset-env` preset adjusts the transformation process based on the specified target environments (like latest browsers or specific versions)

## Parcel and Babel Transpilation

### Parcel and Babel:

- **Parcel** is a popular bundler that can automatically integrate with Babel for JavaScript transpilation
- When setting up a project with Parcel, developers often leverage Babel to ensure compatibility across different environments
- Parcel can be configured to use Babel as part of its build process, allowing developers to write modern JavaScript (ES6+) while ensuring backward compatibility with older browsers

### Installing Required Babel Presets

To ensure that Parcel and Babel work together effectively, you need to install the following Babel presets:

```bash
npm install --save-dev @babel/preset-env @parcel/babel-preset-env
```

- This command installs `@babel/preset-env` to handle JavaScript transpilation based on specified browser targets, and `@parcel/babel-preset-env` for seamless integration with Parcel's build process

- These presets enable you to write modern JavaScript code while ensuring compatibility with older browsers and environments

### `devDependencies` Configuration

When integrating Parcel with Babel for JavaScript transpilation, your `package.json` should include the following dependencies under `devDependencies`:

```json
"devDependencies": {
  "@babel/preset-env": "^7.x",
  "@parcel/babel-preset-env": "^2.x",
  "parcel": "^2.x"
}
```

- These dependencies are essential for configuring Babel to handle JavaScript transpilation according to specified browser targets (`@babel/preset-env`) and integrating Babel seamlessly with Parcel (`@parcel/babel-preset-env`)
- Parcel itself (parcel) is included to manage the bundling and build processes of your JavaScript applications

### The Need for `babel.config.json`:

- `babel.config.json` (or `.babelrc` for older versions of Babel) is a configuration file used to customize how Babel transpile JavaScript code

- It specifies which plugins and presets Babel should use during the transpilation process

- This configuration file is essential for defining the target environments and specifying which JavaScript features should be transpiled

### Using `@parcel/babel/preset-env`:

- `@parcel/babel/preset-env` is a popular preset used in Babel configurations
- It allows developers to specify a target environment or a list of browsers to support
- Babel uses `@babel/preset-env` to intelligently transpile only the necessary features based on the specified target environments, optimizing the output code size and performance

#### Example `babel.config.json`:

```json
{
  "presets": [
    [
      "@parcel/babel-preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", ">= 5%"]
        }
      }
    ]
  ]
}
```

- In this example, `@parcel/babel/preset-env` is configured to target the last 2 versions of major browsers and browsers with a usage share of at least 5%
- This setup ensures that the JavaScript code is transpiled to be compatible with a broad range of browsers while taking advantage of modern features where possible
- By using Parcel with Babel and configuring babel.config.json, developers can streamline the process of transpiling JavaScript code and ensure optimal compatibility across different environments

## Extending Babel with Custom Plugins

If a specific JavaScript syntax feature, such as class properties (although this plugin is included in `@babel/preset-env` from ES2022), is not included in `@babel/preset-env`, you can extend Babel's capabilities by adding custom plugins. Here’s how you can do it:

### Installing the Plugin

First, install the Babel plugin using npm:

```bash
npm install @babel/plugin-proposal-class-properties --save-dev
```

### Configuring Babel

Next, configure Babel to use the installed plugin. Update your `babel.config.json` or `.babelrc` file to include the plugin:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", ">= 5%"]
        }
      }
    ]
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

## Example: Transpiling Modern JavaScript Class to ES5 with Babel

- We discussed transpiling with Babel, using Babel plugins, and configuring Babel

- Now, let's look at a practical example. We'll create a JavaScript class using modern syntax and then transpile this code to ES5 using Babel:

### Original ES6+ Code

Here's a class with a private field:

```javascript
// --- Class Creation
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

// Object
const onkar = new Person('Onkar');
```

### Babel Configuration (`babel.config.json`)

To transpile the above code to ES5, we need to configure Babel. We'll include the `@babel/preset-env` preset and the necessary plugins.

### Transpiled ES5 Code

- After running the Babel transpiler, the ES6+ code is converted to ES5 for broader browser compatibility. In the `dist` folder, you will find the transpiled code.

- Searching for the `Person` keyword in the transpiled file will show something like this:

```javascript
var _greeting = /*#__PURE__*/ new WeakMap();

var Person = /*#__PURE__*/ _createClass(function Person(name) {
  _classCallCheck(this, Person);
  _classPrivateFieldInitSpec(this, _greeting, 'Hey');
  this.name = name;
  console.log(
    ''.concat(_classPrivateFieldGet(_greeting, this), ', ').concat(this.name)
  );
});

// Object
var onkar = new Person('Onkar');
```

### Explanation

1. **Original ES6+ Code**: This uses modern JavaScript features like private class fields
2. **Babel Configuration**: The `babel.config.json` includes presets and plugins necessary to handle these modern features
3. **Transpiled ES5 Code**: The output code is compatible with older browsers, ensuring broader support

By using Babel, we can write modern, clean, and concise JavaScript while maintaining compatibility with environments that only support older versions of JavaScript

## Example: Transpiling Modern JavaScript Nullish Coalescing to ES5 with Babel

- We discussed transpiling with Babel, using Babel plugins, and configuring Babel
- We'll now demonstrate transpiling the nullish coalescing operator (??) from modern JavaScript to ES5 using Babel

### Original ES6+ Code

```javascript
// --- Nullish Coalescing Operator Example
console.log('Onkar' ?? null);
```

### Transpiled ES5 Equivalent

After transpilation with Babel, the nullish coalescing operator (`??`) is converted to equivalent ES5 code:

```javascript
// Transpiled ES5 Equivalent
console.log('Onkar' !== undefined && 'Onkar' !== null ? 'Onkar' : null);
```

### Explanation

- **Original ES6+ Code**: Uses the nullish coalescing operator (`??`) to provide a default value if the left-hand operand is `null` or `undefined`.

- **Babel Configuration**: `babel.config.json` specifies `@babel/preset-env` to ensure compatibility with specified browser targets.

- **Transpiled ES5 Code**: The transpiled code ensures compatibility with older browsers that do not support the nullish coalescing operator directly. It uses a conditional expression (`? :`) to achieve the same result.

This transpilation process allows modern JavaScript code using features like the nullish coalescing operator to be converted into equivalent ES5 code, enabling broader browser compatibility without losing functionality.
