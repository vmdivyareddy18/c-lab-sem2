Login Demo
===========

This repository contains a small, accessible login demo implemented in `index1.html`.

How to run locally
------------------

Open `index1.html` in your browser. For a minimal static server (recommended), run:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit http://localhost:8000/index1.html

Notes
-----
- The form is configured with `action="/login"` (placeholder). The client-side script performs demo validation only and does not transmit credentials unless you set a real endpoint.
- Accessibility improvements: ARIA attributes, screen-reader-only utility, input focus styles.

License
-------
MIT

See `CHANGES.md` for a short list of recent updates and accessibility improvements.
