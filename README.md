Prestotype is a boilerplate that tries to solve some of the unique problems of prototyping by coding HTML/CSS/JS.

# The problems of prototyping in HTML

## Environment

### Configuration

Modern web tools require a lot of technologies, and ideally, someone intending to create HTML prototypes can install node, npm, and ruby on their machine. HOWEVER, Prestotype assumes you can't - you should be able to use this configuration without modifying your machine.

### Serving web pages

Creating a development environment is important when working with HTML, as there are particular restrictions regarding loading files directly with the file:// protocol. Fortunately, Mac users have two easy options:

* [Mamp](http://www.mamp.info/en/) is a simple, installable app that runs a server on your computer. Save document in Mamp's `htdocs` to view them in your browser.
* [Setting up Apache on your Mac](http://ole.michelsen.dk/blog/setup-local-web-server-apache-php-macos-x-mavericks/) is easier than it sounds (ignore the PHP instructions), and allows you to serve sites from your /Sites directory.

A future version of this project will include a light node server that improves on these other methods.

## What libraries to use?

In short, all of them. You have no performance concerns when prototyping, so Prestotype includes everything it can think of, up front. This includes:

* [Bootstrap](http://getbootstrap.com/2.3.2/getting-started.html), a CSS and JS framework for build common layouts. Includes popovers, modals, carousels, and a deep CSS framework for laying out pages.
* [Underscore](http://underscorejs.org/), a low-level library for manipulating data (arrays, strings, objects)
* [jQuery](http://api.jquery.com/), a common library for manipulating elements on the page.
* [jQuery UI](http://api.jqueryui.com/), a widget and interaction library that includes datepickers, accordions, tabs, and much more. Themed to match Bootstrap (but you can download new themes or [design your own](http://jqueryui.com/themeroller/))
* [Polymer](http://www.polymer-project.org/docs/elements/) (HIPSTER ALERT) A library for creating reusable web components. Prestotype includes all the 'core' and 'paper' Polymer components; you just need to import them into the head of the document, and you can write crazy stuff like `<core-icon icon="social:cake" size="10"></core-icon>`.
* [EJS](http://embeddedjs.com/), more on this later.

## Reusing code

If your prototype is pure HTML, it'll probably be a pain to maintain once you have 10+ pages. Prestotype has a basic "partials" functionality that you can see on the index page, and it looks something like this:

```
<div class="partial" data-partial="partials/footer" data-tall="true"></div>
```

Creating a div with a class of "partial" like this will cause a partial to be loaded from another file. Some fun facts about partials:

* They're written using EJS, a simple template language that uses JavaScript inside `<% %>` blocks.
* You can pass data to them with data-X parameters. For example, you could pass `data-pagetitle="About"` to a page title block, and inside the block, output it as `<%= pagetitle %>
* You can nest them inside each other.
* If you nest a partial inside itself it will literally destroy the universe.

## Sharing your work

There are a few easy ways to share work from Prestotype:

* Upload it clients.viget.com
* If you're on a Viget staff network or VPNed in, you can share a link with othe people on the network by including your IP (ie: http://192.168.7.1/my-site). This is great for quickly sharing work with a co-worker, or testing on different devices.
* You _can_ share your site via ZIP file, but note that the partials functionality will break in some browsers if loaded via the file:// protocol.
