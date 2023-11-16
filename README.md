# eslint-plugin-enforce-multiline-objects

destructure objects on multiple lines

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-enforce-multiline-objects`:

```sh
npm install eslint-plugin-enforce-multiline-objects --save-dev
```

## Usage

Add `enforce-multiline-objects` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "enforce-multiline-objects"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "enforce-multiline-objects/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->

## Contributing

Feel free to contribute!

To test if your added context works, you can create some test cases in this website:

- <https://astexplorer.net/>
- options should be set to:
  - `javascript`
  - `@babel-eslint`
  - `eslint v8`
- in the bottom left, you can then add this, together with the additional context of your changes and the eslint rule itself:

```javascript
export default function (context) {
  return {
    VariableDeclarator: function (node) {
      // ...
    }
  };
}
```
