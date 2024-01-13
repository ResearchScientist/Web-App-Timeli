# Developer Log

> Personal entries detailing some of my thoughts and reasons for making certain development choices.

# Clock Ticks

Decided on a CSS only solution instead of a JS in order to keep the JS mostly for the database, text display, and clock logic.

# Text Display

In order to keep the text centered and able to accomodate some growth downwards while keeping the time in its position, I gave both sections a height.

# Sun Moon Rotation

Placed the sun or moon within a div. The div was used as a rotational lever in which one end held the svg and the other end served as its point of rotaion.

This allowed for a targetable div that JS could use to rotate as a minute hand. As this is a clock it seemed a more appropriate solution than relying on an SVG path.

# Seasonal Changes

In keeping with a minimalist style, I kept animations to a minimum. But I still wanted some aesthetic variation. Since the dial represents the sun and moon as they orbit around the planet it felt appropriate to incorporate the change of seasons as the planet orbits the sun.

I chose a matte colour palette for each season to give a soothing and warm feel. I also used basic shapes to make flat illustrations. By keeping stimuli to a minimum and avoiding the use of vibrant colours the user's cognitive load would be kept low and result in a more calming interaction with the interface.
