# More options

## Alternatives

- [Mixture](http://mixture.io/), an app that handles a lot of front-end concerns and templating
- [Foundation](http://foundation.zurb.com/), like Bootstrap but heavier and more opinionated. Unlike Bootstrap, Foundation has a number of cool [drop-in blocks](http://patterntap.com/code?page=1)
- [Fire.app](http://fireapp.kkbox.com/), another app that handles templating, precompiling, etc.

## Upgrade options

If you want to use a tool like this for HTML prototyping more regularly, I suggest looking into some of the following options:

### PHP

PHP is incredibly easy to jump right into and sprinkle partials, variables, and reusable functionality into. It's also fairly ubiquitous and easy to serve (use [Mamp](http://www.mamp.info/en/) on your own machine, and a PHP-enabled server to share). The most appealing thing about PHP is that you can just rename a file from `.html` to `.php` and start working, making it a fast and easy way to enhance your prototypes.

### Rendered output

Instead of serving your design with a PHP-enabled server, you can go the other route and use something like [Assemble](http://assemble.io/) or [Jekyll](http://jekyllrb.com/) to compile your templates into a flat set of site files. This approach is a big step up from the basic Prestotype setup, because it allows you to reuse partials and layouts while still compiling them as portable, easy-to-email HTML files.

### LiveReload or Browsersync

[LiveReload](http://livereload.com/) ($10 app, or free as a Grunt or Gulp plugin) reloads the page when you update specific files, making the prototype flow much faster.

[BrowserSync](http://www.browsersync.io/) takes this ability up a notch by reloading multiple browsers at once, as well as syncing actions (scrolling, filling out forms, etc) between them.

### Gulp

The more FED tools you use, the more convenient it is to have something like [Gulp](http://gulpjs.com/) managing them all. If you're thinking about using Assemble to compile your templates into flat files, Gulp combines very will with it, and it'll also manage your Sass compilation.

### Sass + Compass

[Compass](http://compass-style.org/) is a Ruby tool that manages and extends Sass, a compile-to CSS language much like Less. While Less is more convenient, Sass is arguably better supported and has more tools (including the excellent [Breakpoint](http://breakpoint-sass.com/)). Unlike Less, Sass requires compiling on the back-end, using the command line or a specific application.
