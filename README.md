# Lazy CSS Helpers

A set of 238 CSS and SCSS (SASS) helpers for the truly lazy.    The helpers consist mainly of utilities to assist you in spacing and padding block or inline elements.
These classes were primarily intended for usage in wireframing and prototyping to quickly sort out ideal spacing and alignment.  They are not necessarily intended for production use where you are better off specifying padding, margin, etc in actual element classes.


## Installation

Install by using one of the popular package managers:

- Bower : `bower install lazy-css`
- NPM: `npm install lazy-css`
- Yarn: `npm install lazy-css`

You can of course clone directly from github.

Once downloaded, you can include the compiled css as a standard link tag:

`<link rel="stylesheet" href="lazy-helpers.min.css">`

via CDN:

`<link rel="stylesheet" href="https://unpkg.com/lazy-css@0.9.0/css/lazy-helpers.css">`

Or you can import it into a existing scss/sass file:

`@import 'lazy-helpers';`



## Reference

Most helper classes can be divided into their category, direction and size.   Most helpers classes also have `!important` suffixed to most properties

#### Categories

- margin: Adds margin to your element
- no-margin: removes margin from your element
- padding: Adds padding to your element
- no-padding: removes padding from your element
- Spacer: Adds margin to your element, but also includes `display: block;`

#### Directions

- No direction, ex: `margin: 0`;
- top, ex: `margin-top: 0`;
- bottom, ex: `margin-bottom: 0`;
- left, ex: `margin-left: 0`;
- right, ex: `margin-right: 0`;
- h (horizontal), ex: `margin-left: 0; margin-right: 0;`
- v (horizontal), ex: `margin-top: 0; margin-bottom: 0;`

#### Sizes

Listed by their scss variable

- $xs: 5px;
- $xs-xs: 10px;
- $sm: 15px;
- $sm-xs: 20px;
- $sm-xs-xs: 25px;
- $md: 30px;
- $md-xs: 35px;
- $md-xs-xs: 40px;
- $md-sm: 45px;
- $lg: 60px;
- $lg-sm: 75px;
- $lg-md: 90px;
- $xl: 120px;
- $jumbo: 150px;

### Usage

Classes are named with the following pattern `helper-<category>-<direction>-<size>`.   For instance, if you wanted to add a small amount of margin to the right of an element, you would use `helper-margin-right-sm`.  If you want no margin on the left, you would use `helper-no-margin-left`

- `helper-margin-*-*`
- `helper-no-margin-*`
- `helper-padding-*-*`
- `helper-no-padding-*-*`
- `helper-spacer-*-*`  (h and v are only directions supported)


## Build from Source

- Git clone the GitHub repo
- run `npm install`
- run `node create-helpers.js`


Pull requests Welcome!