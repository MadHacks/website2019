# website2019
Website for MadHacks 2019

## TODO

### Window manager framework
* ~~Fix bug where you can move windows off the screen (Moss)~~
* ~~Add desktop icons behaviour (Moss)~~
* ~~Add title bar (Stamper)~~
* ~~Fix currently-dragging window z-index issue (Moss)~~
* ~~Fix weird bug where window title gets dragged off screen, but everything else stays put (Moss)~~
* Decide whether we want the weird floating title bug, or the ability to drag over the nav bar?
* Assign starting positions and active/hidden status to each window
* ~~"About" is acting weird -- why? (Moss)~~
* Clicking close button doesn't always work -- why? (Moss)

### Content
* Add rest of the windows, barebones content (Stamper)

### Style
* ~~Theme the css according to the style guide (Stamper)~~
* ~~Find body font (Stamper)~~
* Find appropriate desktop icons (Stamper)
* Padding on frames, esp. Map (Stamper)
* Maps -- remove text (Stamper)

## Using SASS
Installation:
```
npm install -g sass
```

Usage:
```
sass style.scss style.css
```

Watch directory for updates (and autocompile):
```
sass --watch style.scss:style.css
```