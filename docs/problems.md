# The problems with prototyping in HTML

Prestotype is a boilerplate that tries to solve some of the unique problems of prototyping designs in HTML/CSS/JS.

- [Limited concerns](#limited-concerns)
- [Your environment](#environment)
- [What libraries to use](#what-libraries-to-use)
- [Reusing code](#reusing-code)

<hr>

## Limited concerns

HTML/CSS/JS prototyping is a _specific type_ of web development that doesn't have much in common with what most developers do. When you're building a UI prototype in HTML, you're probably not concerned with:

* Performance (file size, concatenation, minification, # of library files)
* Browser compatibility
* Accessibility
* Code re-use and cleanliness
* No-JS/CSS users
* Semantics

Keep this in mind when working and selecting tools and tutorials - ones that focus too much on these issues might be a waste of your time. Instead, you want options that:

* Are easy to use
* Have drop-in features and widgets
* Are easily styleable
* Have strong documentation
* Don't have incompatibility issues with other tools
* Don't define too many styles or behaviors without asking

<hr>

## Environment

### Tools

Modern front-end development involves require a lot of build tools, and _ideally_, someone creating HTML prototypes would be able to install node, npm, and Ruby in their environment. Unfortunately, this ideal isn't always the case - configuring and managing these tools can be difficult. Some premade apps handle the problem for you, but either cost money or have limiting configurations.

### Servers

The ideal way to serve web pages is with a web server. A server gives you more power over partials, states, and other application logic, and it also lifts some of the restrictions that browsers place on local files. Servers aren't hard to set up on your computer, but they still require some configuration.

<hr>

## What libraries to use?

You have no performance concerns when prototyping, so don't worry about including too many files, or throwing in files you don't even use. There are only a few issues to consider:

* Avoid libraries that collide. This is especially common in CSS, like with Bootstrap and Foundation. The more third-party CSS libraries you include, the more collisions you're likely to run into.
* Avoid using libraries that want to generate entire documents (React, Angular, potentially Backbone). Prefer libraries that work best with _components_, not _pages_, as they're going to be easier to interact with and overwrite.

Remember: you don't want libraries that solve the problem of "modern application development at the enterprise scale", you want libraries that solve the problem of "how do I turn this button into a datepicker already."

<hr>

## Reusing code

If your prototype is pure HTML, it'll probably be hard to maintain once you have 10+ pages and need to duplicate content. In web development, the solution is to use "partials" (or "includes") and "layouts" to clean up repetitive code, so you can focus on the unique parts of each page.

Partial behavior can be accomplished in a few ways:

* Use a server-side framework or language (Sinatra, PHP, Node.js with templates) that includes partials and layouts
* Use a local tool that combines your templates into final HTML output (like Jekyll or Assemble)
* Use JavaScript to render them (which still requires a simple webserver in some browsers, as browsers disallow JS form loading files directly off your hard drive)

These all have their drawbacks for prototyping: They require configuration, extra tools, or specific language knowledge to accomplish.
