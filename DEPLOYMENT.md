# Black Pearls Next.js App - cPanel Deployment Guide

## Prerequisites

- Node.js 18+ installed on your local machine
- Access to cPanel hosting account
- FTP/SFTP client (FileZilla, WinSCP, etc.)

## Build Process

### 1. Install Dependencies

```bash
yarn install
```

### 2. Build for Production

```bash
yarn deploy
```

This command will:

- Build the static export of your Next.js app
- Copy the `.htaccess` file to the dist folder
- Create a `dist` folder with all deployable files

### 3. Verify Build Output

After running the deploy command, you should see a `dist` folder containing:

- `index.html` (redirects to /en/)
- `en/` folder with English content
- `ar/` folder with Arabic content
- `_next/` folder with static assets
- `.htaccess` file for Apache configuration
- All your public assets (images, etc.)

## cPanel Deployment Steps

### 1. Access cPanel File Manager

1. Log into your cPanel account
2. Navigate to "File Manager"
3. Go to your domain's public_html folder (or subdomain folder)

### 2. Upload Files

1. **Clear existing files** (if any) from public_html
2. Upload the **entire contents** of the `dist` folder to public_html
3. Make sure the `.htaccess` file is uploaded (it might be hidden)

### 3. Set Permissions

Set the following permissions:

- Folders: 755
- Files: 644
- `.htaccess`: 644

### 4. Verify Upload

Your public_html structure should look like:

```
public_html/
├── .htaccess
├── index.html
├── en/
│   ├── index.html
│   └── [other pages]
├── ar/
│   ├── index.html
│   └── [other pages]
├── _next/
│   └── [static assets]
└── [public assets]
```

## Local Development

### Testing Locally

```bash
yarn dev
```

Then visit `http://localhost:3000` - it should automatically redirect to `http://localhost:3000/en`

## Testing Your Deployment

### 1. Test Root URL

Visit your domain (e.g., `https://yourdomain.com`) - it should automatically redirect to `/en/`

### 2. Test Language Switching

- Visit `/en/` for English
- Visit `/ar/` for Arabic
- Test language switcher functionality

### 3. Test Static Assets

- Verify images load correctly
- Check CSS and JavaScript files
- Test responsive design

## Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**

   - Ensure `.htaccess` file is uploaded
   - Check file permissions (644 for .htaccess)

2. **Images Not Loading**

   - Verify images are in the correct public folder
   - Check image paths in your components

3. **Language Routing Issues**

   - Ensure both `en` and `ar` folders are uploaded
   - Check `.htaccess` rewrite rules

4. **CSS/JS Not Loading**
   - Verify `_next` folder is uploaded completely
   - Check file permissions

### Debug Steps:

1. Check browser console for errors
2. Verify file paths in Network tab
3. Test with different browsers
4. Check cPanel error logs

## File Structure After Deployment

```
public_html/
├── .htaccess                 # Apache configuration
├── index.html               # Root redirect
├── en/                      # English content
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── contact/
│   └── ...
├── ar/                      # Arabic content
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── contact/
│   └── ...
├── _next/                   # Next.js static assets
│   ├── static/
│   └── ...
├── images/                  # Public images
│   ├── hero-background.jpg
│   ├── clients/
│   ├── partners/
│   └── services-images/
├── manifest.json
├── robots.txt
├── sitemap.xml
└── [other public files]
```

## Performance Optimization

### 1. Enable Compression

The `.htaccess` file includes compression rules for better performance.

### 2. Set Cache Headers

Static assets are configured with 1-year cache headers.

### 3. Security Headers

Security headers are included in `.htaccess` for better protection.

## Maintenance

### Updating Your Site:

1. Make changes to your code
2. Run `npm run deploy`
3. Upload new `dist` contents to cPanel
4. Clear browser cache if needed

### Backup:

Always backup your current site before deploying updates.

## Support

If you encounter issues:

1. Check this deployment guide
2. Verify all files are uploaded correctly
3. Check cPanel error logs
4. Test with a simple HTML file first

---

**Note**: This deployment creates a static site. Server-side features like API routes won't work. For dynamic features, consider upgrading to a VPS or dedicated server with Node.js support.
