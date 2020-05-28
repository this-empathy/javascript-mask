# Javascript Mask
A package to validate strings and input data with vanilla js.

## Getting Started

### Install

Install via npm:

```javascript
 npm install @this-empathy/javascript-mask
```
Install via yarn:

```javascript
 yarn add @this-empathy/javascript-mask
```

### How to use
#### Import
```javascript
import Mask from '@this-empathy/javascript-mask'
```

#### Mask Options

##### Date

```javascript
Mask.date(value, locale)

| Params | required | Default value |
|--------|----------|---------------|
| value  | true     | ""            |
| locale | false    | pt-BR         |

```


##### Locale 
Locale that should be used by the mask. Can be any [IETF language tag.](https://en.wikipedia.org/wiki/IETF_language_tag)
