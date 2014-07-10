# The problems of prototyping in HTML

Prestotype is a boilerplate that tries to solve some of the unique problems of prototyping by coding HTML/CSS/JS.

- [Narrowing concerns](#narrowing-concerns)
- [Your environment](#environment)
- [What libraries to use](#what-libraries-to-use)
- [Reusing code](#reusing-code)

<hr>

## Narrowing concerns

HTML/CSS/JS prototyping is a specific type of web development that doesn't have much in common with what most developers do. Therefore, the tools you find for working on the web may have quirks or extra configuration that doesn't concern you. When you're building a UI prototype in HTML, you're probably not concerned with:

* Performance (file size, concatenation, minification, # of library files)
* Browser compatibility
* Accessibility
* Code re-use (to an extent)
* Users without JS

Keep this in mind when working and selecting tools and tutoraials - ones that focus on these issues might be a waste of your time. Instead, you want options that:

* Have a lot of 'drop-in' features
* Have strong documentation
* Don't have incompatibility issues with other tools
* Don't define too many styles or behaviors without being asked

<hr>

## Environment

### Configuration

Modern web tools require a lot of technologies, and ideally, someone intending to create HTML prototypes can install node, npm, and ruby on their machine. HOWEVER, Prestotype assumes you can't - you should be able to use this configuration without modifying your machine.

### Serving web pages

Creating a development environment is important when working with HTML, as there are particular restrictions regarding loading files directly with the file:// protocol. Fortunately, Mac users have two easy options:

* [Mamp](http://www.mamp.info/en/) is a simple, installable app that runs a server on your computer. Save document in Mamp's `htdocs` to view them in your browser.
* [Setting up Apache on your Mac](http://ole.michelsen.dk/blog/setup-local-web-server-apache-php-macos-x-mavericks/) is easier than it sounds (ignore the PHP instructions), and allows you to serve sites from your /Sites directory.

<hr>

## What libraries to use?

ALL. OF. THEM. You have no performance concerns when prototyping, so don't worry about including too many files, or files you don't even use. There are only a few issues to consider:

* Avoid libraries that collide. This is especially common in CSS, like with Bootstrap and Foundation. The more third-party CSS libraries you include, the more collisions you're likely to run into.
* Avoid using libraries that want to generate the entire document (React, Angular, potentially Backbone). Prefer libraries that work best with _components_, not _pages_, as they're going to be easier to interact with and overwrite.

<hr>

## Reusing code

If your prototype is pure HTML, it'll probably be a pain to maintain once you have 10+ pages and need to duplicate content. In web development, the solution is to use "partials" or "includes" and "layouts" to clean up repetitive code, so you can focus on the unique parts of each page.

Partial behavior can be accomplished in a few ways:

* Use a server-side framework or language (Sinatra, PHP, Node.js with templates) that allows them
* Use a local tool that combines your templates into final HTML output (like Jekyll or Assemble)
* Use JavaScript to render them (which still requires a simple webserver in some browsers, as browsers sometimes disallow JS form loading files directly off your drive)

These all have their drawbacks for prototyping: They require configuration, extra tools, or specific language knowledge to accomplish.
