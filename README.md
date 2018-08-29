# Partition
A css file for easy nested positioning

## How to use:
Link the stylesheet.
```html
<link rel="stylesheet" href="partition.css" type="text/css" />
```
Build a structure for your page made of nested divs. Two main classes: 'box' and 'pane'. A box is a container for one or more panes. It can be vertical or horizontal. A pane is a container for an element (which can be a box) that sits inside a box.

### Rules:
- Root div must have class 'box'.
- Every element inside a box should be a div with class 'pane'.
- A pane can contain exactly 1 div with class 'box' OR any other html.
- For best results, use 1 html element per pane.
- A box can be given class 'vertical' or 'horizontal'.
- Panes can be positioned using 'top', 'bottom', 'right' and 'left'.
- Any number of panes can be put in a box.
- Safe to modify background, border and padding of divs, but nothing related to sizing or positioning.
