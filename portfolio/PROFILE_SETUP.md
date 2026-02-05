# How to Add Your Profile Picture

Your portfolio is ready for a profile picture! Here's how to add yours:

## Steps:

1. **Prepare Your Image**
   - Choose a professional headshot or professional photo
   - Recommended size: 400x400px or larger (square format works best)
   - Supported formats: JPG, PNG, WebP

2. **Add the Image**
   - Place your image file named `profile.jpg` (or `.png`) in the `public/` folder
   - The path should be: `portfolio/public/profile.jpg`

3. **If Using a Different Filename**
   - Open [src/components/Hero.jsx](src/components/Hero.jsx)
   - Change `src="/profile.jpg"` to your image filename
   - Example: `src="/my-photo.png"`

4. **Testing**
   - The development server will automatically pick up the new image
   - If it doesn't appear, try refreshing your browser (Ctrl+F5 or Cmd+Shift+R)

## Image Styling Features:

✨ **Your profile picture will have:**
- Perfect circular shape with smooth border
- Subtle glow effect in the background
- Smooth floating animation
- Beautiful hover effect on desktop
- Responsive sizing (adapts to mobile)
- Professional shadow and border styling

## Example Image Size Recommendations:
- Desktop: 320x320px (displayed size)
- Provide: 400x400px or 500x500px (for retina displays)

That's it! Your profile picture will automatically display with all the styling applied.
