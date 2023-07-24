# eslint-plugin-is-story-prefix

A Eslint plugin to check if the story files has the prefix

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-story-prefix-check`:

```sh
npm install eslint-plugin-story-prefix-check --save-dev
```

## Usage

Add `story-prefix-check` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "story-prefix-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "story-prefix-check/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


