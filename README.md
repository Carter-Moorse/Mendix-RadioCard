<img src="/assets/icon.svg" height="64px" />

# Radio Card - Mendix Pluggable Widget
Customisable radio card display.

<img src="/assets/example_boolean.png" />
<img src="/assets/example_enumeration.png" />

See [Demo](https://radiocarddemo-sandbox.mxapps.io/).

## Features
 - Supports enummeration/boolean attributes and associations
 - Allows simple text display or fully custom card content using drop-zones
 - Selectable object lists for enummeration/boolean attributes and associations
 - Optional custom display items with value expressions and dynamic CSS classes
 - Responsive sizing controls for desktop, tablet, and phone (auto‑fill, auto‑fit, manual)
 - Configurable card layout: radio position, card alignment, and card size
 - Styling options including hover highlight, selected highlight, and custom classes
 - Container options such as full‑width mode and custom container classes
 - Built‑in Mendix label, editability, visibility, name, and tab index support
 - On‑change actions for both attribute and reference selection


## Usage
> [!Warning]
> Requires Mendix Studio Pro 9.19 or later

 1. Add the widget to your project.
 2. Place the widget inside some context.

## Issues, suggestions and feature requests
Please report any issues to [Mendix-RadioCard/issues](https://github.com/Carter-Moorse/Mendix-RadioCard/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
