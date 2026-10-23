# Photo upload folder

Upload image files directly into this folder: `public/photos/`.

Supported formats: JPG/JPEG, PNG, WebP, GIF, AVIF, and BMP. After the upload is committed to the `main` branch, GitHub Actions rebuilds and publishes the website automatically.

## Add a story/caption under each photo

Open `public/photos/captions.json` and add an entry using the **exact image filename** as the key. Example:

```json
{
  "sunset-by-the-river.jpg": {
    "title": "A peaceful evening",
    "caption": "We sat beside the river and watched the sky turn gold. One of those little moments I want to remember.",
    "date": "2026-10-23",
    "location": "Dhaka, Bangladesh",
    "category": "Special Moments"
  }
}
```

Available categories: `Daily Life`, `Special Moments`, `Creative Works`. If a photo has no entry, it still appears automatically; its title is generated from the filename and its category defaults to Special Moments.

Tip: use simple filenames without Bengali characters or spaces when possible, e.g. `family-picnic-2026.jpg`. Keep each photo reasonably sized for fast loading.
