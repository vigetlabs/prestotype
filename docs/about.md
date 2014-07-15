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

* [Bootstrap](http://getbootstrap.com/2.3.2/getting-started.html), a CSS and JS framework for building layouts and common features. Includes popovers, modals, carousels, and a deep CSS framework for laying out pages. Bootstrap's CSS is included as a LESS file, so you can easily customize parts of it (start with `less/vendor/bootstrap/variables.less`)
* [Animate.css](http://daneden.github.io/animate.css/), a small CSS library with a number of pre-made animations.
* [Underscore](http://underscorejs.org/), a low-level library for manipulating data (arrays, strings, objects)
* [jQuery](http://api.jquery.com/), a common library for manipulating elements on the page.
* [jQuery UI](http://api.jqueryui.com/), a widget and interaction library that includes datepickers, accordions, tabs, and much more. Themed to match Bootstrap (but you can download new themes or [design your own](http://jqueryui.com/themeroller/))
* [EJS](https://github.com/visionmedia/ejs), a JavaScript templating library. More on this in the next section.

<hr>

## Reusing code with partials

Prestotype has a basic "partials" functionality that you can see on the index page, and it looks like this:

```
<div class="partial" data-partial="partials/copyright" data-year="2014"></div>
```

Creating a div with a class of "partial" like this will cause a partial to be loaded from another file. Some fun facts about partials:

* Unlike server-side partials, they can't contain open tags - each tag in a partial must be closed.
* They only work inside the `<body>`.
* They're written using [EJS](https://github.com/visionmedia/ejs), a simple template language that uses JavaScript logic inside `<% %>` blocks.
* You can pass data to them with data-X parameters. For example, you could pass `data-title="About"` to a page title block, and inside the block, output it as `<%= pagetitle %>`
* You can nest them inside each other.

Here's an example of an EJS template with embedded blocks of JS:

```
<ul>
  <% ['Buster', 'George Oscar Bluth', 'Michael', 'Lindsay'].forEach(function(bluth){ %>
    <li>
      <% if (bluth == 'George Oscar Bluth') { %>
        <%= 'GOB' %>
      <% } else { %>
        <%= bluth %>
      <% } %>
    </li>
  <% }) %>
</ul>
```

<hr>

## JS

Include all code in `afterPartialsLoad` callbacks, like so:

```
afterPartialsLoad(function() {
  // code goes here
});
```

This is necessary because it ensures that your code executes _after_ all partials have loaded. You should only need one of these wrappers per file; just wrap all your code in it and you're set.

<hr>

## Sharing your work

There are a few easy ways to share work from Prestotype:

* Upload it a server
* Serve it from Dropbox. Simply move your prototype into the Public directory. Right-click on `index.html` and choose "Copy Public URL". Share that with whomever.
* If you're on a Viget staff network or VPNed in, you can share a link with othe people on the network by including your IP (ie: http://192.168.7.1/my-site). This is great for quickly sharing work with a co-worker, or testing on different devices.
* You _can_ share your site via ZIP file, but note that it won't work in some browsers unless the recipient serves it via a web server like Mamp or OS X Apache.
