# Partition
CSS and javascript files for easy nested positioning

## How to use:
Link the stylesheet and script.
```html
<link rel="stylesheet" href="partition.css" type="text/css" />
<script src="partition.js" type="text/javascript" />
```
Build a structure for your page made of nested divs.

There are two main classes: 'box' and 'pane'. A box is a container for one or more panes. It can be vertical or horizontal. A pane is a container for an element (which can be a box) that sits inside a box.

### Rules:
- Root div must have class 'box'.
- Every element inside a box should be a div with class 'pane'.
- A pane can contain exactly 1 div with class 'box' OR any other html.
- For best results, use 1 html element per pane.
- A box can be given class 'vertical' or 'horizontal'.
- Panes can be positioned using 'top', 'bottom', 'right' and 'left'.
- Any number of panes can be put in a box.
- Safe to modify background, border and padding of divs, but nothing related to sizing or positioning.

### Classes:
#### Managed by CSS:
|Name:      | Description:|
|-----------|-------------|
|box        |A box. Apply to div, must contain one or more panes.  |
|pane       |The only element that can be placed inside a box. Can contain a box or any other html.  |
|ghost      |Invisible. Apply this to a pane to make it transparent to clicks and background elements. Will still take up space.  |
|vertical   |Apply to a box. Makes contained panes arrange themselves vertically.  |
|horizontal |Apply to a box. Makes contained panes arrange themselves horizontally.  |

#### Managed by javascript:
|Name:      | Description:|
|-----------|-------------|
|expand     | Apply to a pane. Automatically sets width or height to fill remaining space not taken up by other divs in parent box.  |
