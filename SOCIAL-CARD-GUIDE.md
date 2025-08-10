# Social Media Card Generation

## Quick Fix Applied

I've updated the metadata to:

1. Remove the incorrect width/height dimensions that were causing stretching
2. Point to a new social card image: `social-card.webp`
3. Added proper image type declaration

## How to Create Your Social Card Image

### Option 1: Use the Generator (Recommended)

1. Open `social-card-generator.html` in your browser
2. Take a screenshot at exactly 1200x630 pixels
3. Save as `social-card.webp` in the `public/assets/` folder

### Option 2: Use Design Tools

Create a 1200x630px image with:

- **Background**: Dark gradient (#0f172a to #1e293b)
- **Your Name**: Large, prominent text
- **Title**: "Backend Developer"
- **Skills**: "Node.js • TypeScript • REST API • Docker"
- **Your Logo/Avatar**: Circular, right side
- **Website URL**: Small text at bottom

### Option 3: Fallback Solution

If you can't create a custom image right now, I can revert to using your profile image with `summary` card type instead of `summary_large_image`, which handles square images better.

## Testing Your Fix

After adding the new image:

```bash
# Test with Facebook Debugger
https://developers.facebook.com/tools/debug/

# Test with Twitter Card Validator
https://cards-dev.twitter.com/validator

# Enter: https://felipesantarosa.com/
```

## Current Status

- ✅ Removed incorrect dimensions causing stretching
- ✅ Updated image path to `social-card.webp`
- ✅ Created HTML generator for proper social card
- ⏳ Need to create and add the actual `social-card.webp` file

Would you like me to help you create the image file or revert to a square card format?
