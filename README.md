# Movie Info Search Chrome Extension

A simple Chrome extension that lets you quickly search for movie information (IMDb summary, rating, and parental review) via Brave Search.

## Features

- Clean popup interface
- Type a movie title and click "Search on Brave"
- Press **Enter** to search (no need to click the button)
- Input field is automatically focused when the popup opens
- Opens results in a new tab

## Search Query Format

The extension builds this URL:

```
https://search.brave.com/ask?q=[Movie Title]+imdb+summary%2C+rating%2C+and+parental+review+in+a+table
```

Example: Searching for **"Inception"** produces:
```
https://search.brave.com/ask?q=Inception+imdb+summary%2C+rating%2C+and+parental+review+in+a+table
```

## Installation

1. Download or clone this repository into a folder.
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **"Load unpacked"** and select the folder containing the extension files.
5. The extension icon should appear next to your address bar.

## Files

- `manifest.json` – Extension configuration (Manifest V3)
- `popup.html` – The popup UI
- `popup.js` – Handles search logic, Enter key, and auto-focus

## Permissions

- `tabs` – Required to open new tabs

## Development / Customization

- To modify the search suffix, edit the `performSearch()` function in `popup.js`
- Add an icon by placing `icon-16.png`, `icon-48.png`, and `icon-128.png` in the folder and updating `manifest.json`
- Reload the extension in `chrome://extensions/` after making changes

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️  using Grok for quick movie lookups.
