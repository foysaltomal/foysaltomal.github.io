# Foysal Tomal — A Life in Moments

A personal photo journal built with **Next.js** and published as a static website on GitHub Pages.

🌐 **Website:** https://foysaltomal.github.io

## Add a photo

1. Open the `public/photos/` folder in this repository.
2. Upload your image file there (JPG, JPEG, PNG, WebP, GIF, AVIF, or BMP) and commit it to the `main` branch.
3. GitHub Actions builds and publishes the site automatically. Allow a minute or two for deployment.
4. The photo appears in the gallery even if you have not written a caption yet. Its title is based on its filename.

## Add the story under a photo

Edit `public/photos/captions.json`. Use the exact filename as the key:

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

Categories: `Daily Life`, `Special Moments`, `Creative Works`. Each photo's story is shown below its image. Make sure the JSON remains valid, and commit the change to `main` to publish it.

More examples and instructions are in `public/photos/README.md`.

## Automatic deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`, discovers image files, prepares gallery data, builds Next.js static export output in `out/`, and deploys it to GitHub Pages.

If the first deployment does not start, open the repository **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Then open the **Actions** tab and check the deployment run.

## Built with

Next.js, React, TypeScript, CSS, and GitHub Actions.

## Privacy note

Images committed to this public repository are public and can be viewed or downloaded by anyone. Do not upload private photos or sensitive information unless you intend them to be public.