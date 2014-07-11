# About Prestotype

- [Environment](#environment)
- [LESS](#less)
- [Libraries included](#libraries-included)
- [Reusing code with partials](#reusing-code-with-partials)
- [JS](#js)
- [Sharing your work](#sharing-your-work)

<hr>

## Environment

Prestotype can operate without any backend language or tools (that's good!)

Unfortunately, Chrome doesn't allow JS requests to file:/// prototocols, which breaks several Prestotype features (that's bad!).

Safari and Firefox don't have these restrictions (that's good!).

But, Chrome has a great debugger and your clients might use it to view your work (....that's bad.)

Fortunately, Mac users have options:

* [Mamp](http://www.mamp.info/en/) is a simple, installable app that runs a server on your computer. Save documents in Mamp's `htdocs` to view them in your browser.
* [Anvil](http://anvilformac.com/) is a simple menubar app for serving local files as .dev sites
* [Setting up Apache on your Mac](http://ole.michelsen.dk/blog/setup-local-web-server-apache-php-macos-x-mavericks/) is easier than it sounds (ignore the PHP instructions), and allows you to serve sites from your /Sites directory and access them at http://localhost/my-site

<hr>

## LESS

`site.less` is a CSS file written in the [LESS language](http://lesscss.org/features/). You can write CSS in it just like you normally would, but you can also take advantage of LESS features like variables, selector nesting, nested media queries, and math operations. Take a look at the file for examples.

[LESS Hat](https://github.com/madebysource/lesshat/blob/master/README.md#list-of-mixins) is also included, and it adds a number of mixins that make writing modern CSS a little easier.

<hr>

## Libraries included

In short, all of them. You have no performance concerns when prototyping, so Prestotype includes everything it can think of, up front. This includes:

* [Bootstrap](http://getbootstrap.com/2.3.2/getting-started.html), a CSS and JS framework for build common layouts. Includes popovers, modals, carousels, and a deep CSS framework for laying out pages.
* [Animate.css](http://daneden.github.io/animate.css/), a small CSS library with a number of pre-made animations.
* [Underscore](http://underscorejs.org/), a low-level library for manipulating data (arrays, strings, objects)
* [jQuery](http://api.jquery.com/), a common library for manipulating elements on the page.
* [jQuery UI](http://api.jqueryui.com/), a widget and interaction library that includes datepickers, accordions, tabs, and much more. Themed to match Bootstrap (but you can download new themes or [design your own](http://jqueryui.com/themeroller/))
* [Hammer.js](https://github.com/EightMedia/hammer.js/wiki), a library for simplifying touch interactions
* [EJS](http://embeddedjs.com/), more on this later.

<hr>

## Reusing code with partials

Prestotype has a basic "partials" functionality that you can see on the index page, and it looks like this:

```
<div class="partial" data-partial="partials/copyright" data-year="2014"></div>
```

Creating a div with a class of "partial" like this will cause a partial to be loaded from another file. Some fun facts about partials:

* They're written using EJS, a simple template language that uses JavaScript inside `<% %>` blocks.
* You can pass data to them with data-X parameters. For example, you could pass `data-title="About"` to a page title block, and inside the block, output it as `<%= pagetitle %>
* You can nest them inside each other.
* If you nest a partial inside itself it will literally destroy the universe.

<hr>

## JS

To add a very simple behavior to the page, just add it inside the `$(document).ready` block in site.js.

HOWEVER, if you're using partials on your page (see above section), this won't work - the `$(document).ready` block will execute your code on the page _before_ the partials load, which is no good and will effectively do nothing.

Instead, you want you want to put your behaviors inside the `afterRender` function. This runs on the entire page at first load, and then, as each partial loads, it runs again in the specific context of that partial. This is why it's important to include `$context` in all your `$()` queries.

<hr>

## Sharing your work

There are a few easy ways to share work from Prestotype:

* Upload it clients.viget.com
* If you're on a Viget staff network or VPNed in, you can share a link with othe people on the network by including your IP (ie: http://192.168.7.1/my-site). This is great for quickly sharing work with a co-worker, or testing on different devices.
* You _can_ share your site via ZIP file, but note that it won't work in some browsers unless the recipient serves it via a web server like Mamp or OS X Apache.
