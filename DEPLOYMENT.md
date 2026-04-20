# GitHub Pages Deployment Guide

## Quick Deploy to GitHub Pages

Follow these steps to publish your Domino's Nutrition Calculator:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/dominosnutritioncalculatorus/calculator
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or `genspark_ai_developer` if you want to deploy from that branch)
   - Folder: `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-3 minutes
- You'll see a green checkmark when it's ready

### Step 3: Access Your Site

Your site will be available at:
```
https://dominosnutritioncalculatorus.github.io/calculator/
```

## Alternative: Deploy from Main Branch

If you want to deploy from the main branch:

1. First, merge the pull request: https://github.com/dominosnutritioncalculatorus/calculator/pull/1
2. Then follow the GitHub Pages setup steps above
3. Select `main` branch as the source

## Verification

After deployment, verify:
- ✅ Site loads correctly
- ✅ All menu items are selectable
- ✅ Nutritional calculations work
- ✅ Theme toggle functions
- ✅ Mobile responsive design works
- ✅ Footer attribution link is visible

## Custom Domain (Optional)

If you want to use a custom domain:

1. In **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Follow GitHub's instructions to configure DNS

## Troubleshooting

If the site doesn't load:
- Wait a few more minutes (initial deployment can take up to 5 minutes)
- Check the **Actions** tab for build status
- Ensure GitHub Pages is enabled in repository settings
- Clear your browser cache and try again

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Check repository Actions for deployment logs
- Ensure all files are committed and pushed

---

**Note**: Since the app uses only HTML, CSS, and vanilla JavaScript with no build process, deployment is instant once GitHub Pages is enabled!
