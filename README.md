Login Demo
===========

This repository contains a small, accessible login demo implemented in `index1.html`.

How to run locally
------------------

Open `index1.html` in your browser. For a minimal static server (recommended), run:

```bash
# Python 3: start a simple HTTP server on port 8000
python3 -m http.server 8000
```

Tip: Alternatively, run a minimal server with `python -m http.server` (Python 3).

Then visit http://localhost:8000/index1.html

Notes
-----
- The form is configured with `action="/login"` (placeholder). The client-side script                           
performs demo validation only and does not transmit credentials unless you set a real endpoint.
- Accessibility improvements: ARIA attributes, screen-reader-only utility, input focus styles.

License
-------
MIT

See `CHANGES.md` for a short list of recent updates and accessibility improvements.

Note: The demo HTML was recently cleaned up for validity and accessibility; check `CHANGES.md` for details.
The page now includes a small "DEMO" badge and a demo version meta tag for tracking.
Last updated: 17 March 2026