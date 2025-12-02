# AWS CodePipeline Demo - Sample Application

This is a sample static website for demonstrating AWS CodePipeline CI/CD capabilities.

## Files in This Directory

- **index.html** - Main HTML file for the website
- **styles.css** - CSS styling for the website
- **script.js** - JavaScript for interactivity
- **buildspec.yml** - AWS CodeBuild build specification file
- **README.md** - This file

## How to Use These Files

### For Your GitHub Repository

1. Create a new repository on GitHub named `aws-pipeline-demo`
2. Clone the repository to your local machine
3. Copy all files from this `sample-app` folder to your repository
4. Commit and push to GitHub:

```bash
git add .
git commit -m "Initial commit: Add website files"
git push origin main
```

### File Descriptions

#### index.html
The main HTML page that will be displayed on your website. It includes:
- Responsive header with gradient background
- Feature cards explaining the pipeline
- Visual pipeline flow diagram
- Benefits of CI/CD
- Technology stack information
- Call-to-action section

#### styles.css
Complete styling for the website including:
- Modern gradient designs
- Responsive grid layouts
- Hover effects and animations
- Mobile-friendly responsive design
- Print styles

#### script.js
JavaScript functionality including:
- Auto-updating timestamp
- Smooth scrolling
- Scroll animations
- Console logging for developers
- Interactive hover effects
- Performance monitoring

#### buildspec.yml
AWS CodeBuild configuration file that:
- Validates HTML files exist
- Prepares files for deployment
- Creates build artifacts
- Logs build process steps

## Testing Locally

To test the website locally before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Deployment

Once you've pushed these files to GitHub and set up your AWS CodePipeline:

1. Any changes pushed to the repository will automatically trigger the pipeline
2. The pipeline will:
   - Pull the latest code from GitHub (Source stage)
   - Run CodeBuild using buildspec.yml (Build stage)
   - Deploy to S3 bucket (Deploy stage)
3. Your website will be live in 2-3 minutes!

## Making Changes

To test the automatic deployment:

1. Edit `index.html` (e.g., change the heading text)
2. Save the file
3. Commit and push:

```bash
git add index.html
git commit -m "Update heading text"
git push origin main
```

4. Watch the pipeline automatically trigger in AWS CodePipeline console
5. Once complete, refresh your S3 website URL to see changes

## Customization

Feel free to customize:
- **Colors**: Update the gradient colors in `styles.css`
- **Content**: Modify text in `index.html`
- **Functionality**: Add more JavaScript in `script.js`
- **Build Process**: Enhance `buildspec.yml` with additional steps

## Troubleshooting

If the website doesn't display correctly:

1. **Check S3 bucket policy**: Ensure public read access is enabled
2. **Verify static website hosting**: Must be enabled in S3 bucket properties
3. **Check buildspec.yml**: Ensure it's in the root of your repository
4. **View build logs**: Check CodeBuild logs in AWS Console for errors

## Next Steps

After the basic pipeline works:

1. Add more HTML pages
2. Implement proper testing in buildspec.yml
3. Add manual approval stage before deployment
4. Set up CloudFront CDN for faster delivery
5. Add custom domain with Route 53
6. Implement HTTPS with ACM certificate

## Resources

- [AWS CodePipeline Documentation](https://docs.aws.amazon.com/codepipeline/)
- [AWS CodeBuild Documentation](https://docs.aws.amazon.com/codebuild/)
- [S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## License

This is a demo project for educational purposes. Feel free to use and modify as needed.
