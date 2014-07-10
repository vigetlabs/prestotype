# About Prestotype

- [LESS](#less)
- [JS](#js)
- [Libraries Included](#libraries-included)
- [Reusing code with partials](#reusing-code-with-partials)
- [Sharing your work](#sharing-your-work)

<hr>

## LESS

<hr>

## JS

<hr>

## Libraries Included

In short, all of them. You have no performance concerns when prototyping, so Prestotype includes everything it can think of, up front. This includes:

* [Bootstrap](http://getbootstrap.com/2.3.2/getting-started.html), a CSS and JS framework for build common layouts. Includes popovers, modals, carousels, and a deep CSS framework for laying out pages.
* [Underscore](http://underscorejs.org/), a low-level library for manipulating data (arrays, strings, objects)
* [jQuery](http://api.jquery.com/), a common library for manipulating elements on the page.
* [jQuery UI](http://api.jqueryui.com/), a widget and interaction library that includes datepickers, accordions, tabs, and much more. Themed to match Bootstrap (but you can download new themes or [design your own](http://jqueryui.com/themeroller/))
* [Polymer](http://www.polymer-project.org/docs/elements/) (HIPSTER ALERT) A library for creating reusable web components. Prestotype includes all the 'core' and 'paper' Polymer components; you just need to import them into the head of the document, and you can write crazy stuff like `<core-icon icon="social:cake" size="10"></core-icon>`.
* [EJS](http://embeddedjs.com/), more on this later.

<hr>

## Reusing code with partials

Prestotype has a basic "partials" functionality that you can see on the index page, and it looks something like this:

```
<div class="partial" data-partial="partials/footer" data-tall="true"></div>
```

Creating a div with a class of "partial" like this will cause a partial to be loaded from another file. Some fun facts about partials:

* They're written using EJS, a simple template language that uses JavaScript inside `<% %>` blocks.
* You can pass data to them with data-X parameters. For example, you could pass `data-pagetitle="About"` to a page title block, and inside the block, output it as `<%= pagetitle %>
* You can nest them inside each other.
* If you nest a partial inside itself it will literally destroy the universe.


<hr>

## Sharing your work

There are a few easy ways to share work from Prestotype:

* Upload it clients.viget.com
* If you're on a Viget staff network or VPNed in, you can share a link with othe people on the network by including your IP (ie: http://192.168.7.1/my-site). This is great for quickly sharing work with a co-worker, or testing on different devices.
* You _can_ share your site via ZIP file, but note that the partials functionality will break in some browsers if loaded via the file:// protocol.
