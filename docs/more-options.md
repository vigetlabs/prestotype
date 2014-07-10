# More options

## Alternatives

- [Mixture](http://mixture.io/), an app that handles a lot of front-end concerns and templating
- [Foundation](http://foundation.zurb.com/), like Bootstrap but heavier and more opinionated. Unlike Bootstrap, Foundation has a number of cool [drop-in blocks](http://patterntap.com/code?page=1)
- [Fire.app](http://fireapp.kkbox.com/), another app that handles templating, precompiling, etc.

## Upgrades

If you want to use a tool like this for HTML prototyping more regularly, I suggest looking into some of the following options:

- Running [Sass + Compass](http://compass-style.org/) from the command line with `compass watch`. The Sass/Compass combo is more powerful than LESS, but requires configuration and some command line knowledge.
- Using [Assemble](http://assemble.io/) or [Jekyll](http://jekyllrb.com/) to compile your templates into a flat set of site files. This approach is a big step up from the basic Prestotype setup, because it allows you to reuse partials and layout but compile them to flat HTML files.
- Combining Sass, JS, and Assemble template compilation with a tool like [Gulp](http://gulpjs.com/).
- Running an Express.js or PHP server to serve your pages. This will allow you to write more partial logic on the back-end and have better control over dynamic states in the app. Both options require a lot more knowledge, and a specific hosting environment to share.
