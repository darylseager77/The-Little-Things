# Appreciate U - Interactive Prototype

A fully functional, clickable prototype for the Appreciate U workplace appreciation platform.

## What's Included

This prototype includes 10 interactive screens:
1. **Welcome** - Landing page with call to action
2. **Quiz Questions** (3 examples) - Appreciation style assessment
3. **Results** - Personalized appreciation profile with visual breakdown
4. **Dashboard** - Employee view with quick check-in
5. **Check-in Flow** (2 steps) - Quick mood and needs assessment
6. **Send Recognition** - Manager sends appreciation to team members
7. **Team View** - Manager dashboard showing team pulse and needs

## Files

- `index.html` - All screen layouts and content
- `styles.css` - Complete styling (mobile-first, responsive)
- `script.js` - Navigation and interactions
- `README.md` - This file

## How to Deploy to Netlify (2 Minutes!)

### Method 1: Drag & Drop (Easiest)

1. **Zip the folder**
   - Select all 3 files (index.html, styles.css, script.js)
   - Right-click → "Compress" (Mac) or use WinZip/7-Zip (Windows)
   - You'll get a file like `appreciate-u-prototype.zip`

2. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with email (free)
   - You'll see your dashboard

3. **Deploy**
   - Look for "Want to deploy a new site without connecting to Git?"
   - Drag your zip file (or the whole folder) onto the drop zone
   - Wait 10 seconds
   - Your site is live! 🎉

4. **Get your URL**
   - Netlify gives you a random URL like: `random-name-123.netlify.app`
   - Click "Domain settings" to change it to: `appreciate-u.netlify.app`
   - Share this URL to test with users!

### Method 2: GitHub (For Updates)

If you want to easily update the prototype later:

1. **Push to GitHub**
   - Already in a git repo? Great!
   - Commit these files:
     ```bash
     git add appreciate-u-prototype/
     git commit -m "Add Appreciate U prototype"
     git push
     ```

2. **Connect to Netlify**
   - In Netlify, click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Set "Publish directory" to: `appreciate-u-prototype`
   - Click "Deploy site"

3. **Auto-deploy**
   - Every time you push changes to GitHub
   - Netlify automatically updates your site
   - No manual uploads needed!

## How to Customize

### Change Colors

In `styles.css`, find these main colors:

```css
/* Primary color (buttons, accents) */
background: #4f46e5;  /* Change this to your brand color */

/* Category colors */
.bar-time { background: #3b82f6; }      /* Blue */
.bar-recognition { background: #f59e0b; } /* Yellow */
.bar-support { background: #10b981; }    /* Green */
.bar-rewards { background: #8b5cf6; }    /* Purple */
.bar-inclusion { background: #f97316; }  /* Orange */
```

### Change Text

All text is in `index.html`. Just find and replace:

- "Appreciate U" → Your brand name
- "Sam" → Different name
- Any question text

### Add More Quiz Questions

1. Copy the `quiz-1` screen in `index.html`
2. Change the ID to `quiz-4`, `quiz-5`, etc.
3. Update the question text and options
4. Update the progress bar width (16%, 20%, etc.)
5. Update the button to go to next question

## Testing the Prototype

### Share with Users

Send them the Netlify URL with this message:

```
Hi! I'm building a tool to help leaders understand how
their team wants to be appreciated.

Here's an interactive prototype (takes 2 min to click through):
[Your Netlify URL]

Please click through the full experience, then let me know:
1. Does this make sense?
2. Would you use something like this?
3. What's confusing or missing?

Thanks!
```

### Collect Feedback

Create a quick Google Form:
1. What was your first impression?
2. How likely would you use this? (1-10 scale)
3. What was confusing?
4. What would make this more valuable?
5. Your email (optional for follow-up)

Share the form link after they view the prototype.

## Screen Flow

```
Welcome
   ↓ [Get Started]
Quiz-1
   ↓ [Next]
Quiz-2
   ↓ [Next]
Quiz-3
   ↓ [See Results]
Results
   ↓ [See Dashboard]
Dashboard
   ↓ [Emoji] → Check-in-1 → Check-in-2 → [Submit] → Dashboard
   ↓ [View Profile] → Results
   ↓ [Navigation] → Team View (Manager Dashboard)

Team View
   ↓ [Reach Out] → Recognition
   ↓ [Profile] → Results

Recognition
   ↓ [Send Thanks] → Dashboard
```

## Features

✅ Fully responsive (works on mobile and desktop)
✅ Smooth animations and transitions
✅ Interactive form elements (radio buttons, checkboxes)
✅ Visual progress tracking
✅ Color-coded categories
✅ Clean, modern design
✅ Fast loading (no external dependencies)

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

### After Testing (10+ Users)

1. **Analyze feedback**
   - What % said they'd use it?
   - What was confusing?
   - What features are missing?

2. **Iterate**
   - Fix confusing parts
   - Add requested features
   - Test again with 5 more people

3. **Validate**
   - If 70%+ say "I'd definitely use this"
   - You have validation!
   - Ready to build the real thing

### Ready to Build Real App?

You'll need:
- Developer (hire or co-founder)
- Backend (database, authentication)
- Integration (Slack, Teams)
- OR use no-code: Bubble, Softr, etc.

## Customization Ideas

### Add Your Branding

1. Replace "👥" emoji with your logo
   - Create a simple logo in Canva
   - Export as PNG
   - Add to HTML: `<img src="logo.png" alt="Appreciate U">`

2. Update colors to match your brand
   - Change primary color in CSS
   - Update gradient colors

3. Add custom illustrations
   - Use your character designs from the cards
   - Replace emoji with actual images

### Add Analytics

Track how people use the prototype:

```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

Then you can see:
- How many people visit
- How long they spend
- Where they drop off

## Troubleshooting

**Screens not switching?**
- Check browser console for errors (F12)
- Make sure all 3 files are uploaded
- Clear browser cache and refresh

**Styling looks broken?**
- Make sure `styles.css` is in the same folder as `index.html`
- Check for typos in file names

**Netlify deploy failed?**
- Make sure you uploaded all 3 files
- Check that files are not corrupted
- Try drag & drop method instead

## Need Help?

- **Netlify docs**: docs.netlify.com
- **HTML/CSS help**: developer.mozilla.org
- **Design inspiration**: dribbble.com/tags/dashboard

## Updates

Want to update the prototype?

**If using drag & drop:**
1. Make changes locally
2. Zip the folder again
3. Go to Netlify → Site settings → Deploys
4. Drag new zip file
5. Site updates automatically

**If using GitHub:**
1. Make changes locally
2. `git add .`
3. `git commit -m "Update prototype"`
4. `git push`
5. Netlify auto-deploys!

---

## You're All Set! 🚀

1. **Upload to Netlify** (2 min)
2. **Get your URL** (30 sec)
3. **Share with 10+ people** (this week)
4. **Collect feedback** (Google Form)
5. **Iterate and improve** (next week)

Good luck with your testing! This prototype will help you validate your concept before spending months building.

---

**Questions?** Let me know and I'll help troubleshoot!
