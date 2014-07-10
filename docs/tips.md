# General Prototyping Tips

## Editing

The best free text editor available at the moment is probably [Atom](https://atom.io/), but there are a lot of options. Recommended Atom addons:

- [Autoprefixer](https://atom.io/packages/autoprefixer)
- [Color Picker](https://atom.io/packages/color-picker)
- [Autocomplete +](https://atom.io/packages/autocomplete-plus)

## Where to learn

### Tutorials

- [Learn HTML & CSS from scratch](http://learn.shayhowe.com/html-css/)
- [Learn CSS Layout specifically](http://learnlayout.com/)
- [jQuery University](http://learn.jquery.com/)

### Reference

The best resource for learning about individual features of CSS, JS, and HTML is [MDN](https://developer.mozilla.org/en-US/). When Googling, prepend mdn to your query to get good results (example: [mdn position fixed](https://www.google.com/?q=mdn%20position%20fixed#q=mdn+position+fixed)).

For learning about any of the included libraries, look at their doc sites for best results.

Another excellent tool for quick reference is [Dash](http://kapeli.com/dash), which can be integrated into your text editor to help you quickly look up specific aspects of code.

## Generating code

- [CSSanimate](http://www.cssanimate.com/) helps you generate complex animations for elements
- [Ceaser](http://matthewlein.com/ceaser/) builds specific CSS timing functions (used in transitions)
- [CSS3Please](http://css3please.com/) is a cheat sheet for modern CSS properties
- [CSSMatic](http://www.cssmatic.com/) has tools for generating gradients, noise, and shadow styles
- [CSSArrowPlease](http://cssarrowplease.com/) for generating pure CSS triangles

## Debugging

Chrome and Firefox both have excellent debugging suites built into the browser. In Chrome, they're under *View > Developer*, and Firefox puts them under *Tools > Web Developer*.

When writing JS, inspect values using `console.log()`, and examine the results in the console. Examples:

```
var $form = $content.find('form');
console.log($form.length) // returns 0, meaning a form wasn't found

var bar = 'hello world';
var foo = barr;
console.log(foo) // returns undefined, meaning you set a non-existant value
```

[Pesticide](http://pesticide.io/) is a simple tool for debugging CSS layout issues.
