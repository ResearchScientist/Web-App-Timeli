# Developer Log

> Personal entries detailing some of my thoughts and reasons for making certain development choices.

# Clock Ticks

Decided on a CSS only solution instead of a JS in order to keep the JS mostly for the database, text display, and clock logic.

# Text Display

In order to keep the text centered and able to accomodate some growth downwards while keeping the time in in its position, I gave both sections a height.

# Sun Moon Rotation

Placed the sun or moon within a div. The div was used as a rotational lever in which one end held the svg and the other end served as its point of rotaion.

This allowed for a targetable div that JS could use to rotate as a minute hand. As this is a clock it seemed a more appropriate solution than relying on an SVG path.
