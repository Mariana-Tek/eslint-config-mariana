# eslint config mariana

> a set of overrides and additions to`eslint-config-airbnb-base` and `eslint-config-airbnb`.

## installation

- `npm install git+https://git@github.com/Mariana-Tek/eslint-config-mariana.git`

## Usage

We currently have two sets of eslint rules to choose from, Ember and React. To use them, you just need to extend the one that makes sense for your project:

### Node

```json
"extends": [
    "eslint-config-mariana/node"
],
```

### React

```json
"extends": [
    "eslint-config-mariana/react"
],
```
