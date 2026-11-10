VISUAL VIBES PHOTOGRAPHY WEBSITE

START HERE
1. Open this folder in Visual Studio Code (VS Code).
2. Open index.html and double-click it, or right-click and choose Open with Google Chrome, to preview the website.
3. The website is already configured with the current studio contact details:
   - WhatsApp: +256 775615613
   - Email: visualvibesphotographyug@gmail.com
4. The current page includes a photo gallery and booking form. Some photos are already embedded in the page.

ADD PHOTOS TO THE PORTFOLIO
The page uses a black-and-gold design with category choices in a side menu. Selecting a category opens its photos without scrolling past the homepage. Select a photo to view it larger. The page includes optimized photos in the Kukyala & Introduction, Wedding and Graduation collections.

To add another photo, put it in the matching images subfolder and add an entry to the PHOTOS list in index.html, for example:
{ src: "images/wedding/wedding-01.jpg", category: "Wedding", caption: "Wedding celebration" }
Use the exact category wording already used by the page so the filters and collection cards stay connected. The site owner must publish the updated files for photos to appear on the website.

CLIENT PHOTO UPLOAD LINK (GOOGLE DRIVE)
In the SITE settings in index.html, set uploadUrl to the URL of the shared Google Drive folder:
uploadUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
The Upload photos button stays hidden until a URL is configured. Share the folder only with the intended client accounts; do not make an editor link public. Photos added to Drive do not appear on the website automatically: the site owner still needs to add the photos to the site and publish the update.

PUBLISH WITH GITHUB PAGES
1. Sign in to https://github.com/ and create a new repository named visual-vibes-photography.
2. Set it to Public, then create the repository.
3. In the repository choose Add file > Upload files. Upload the CONTENTS of this folder (index.html, README.txt and images folder), not the outer folder itself.
4. Commit the files.
5. Open Settings > Pages. Under Build and deployment choose Deploy from a branch. Select main and /(root), then Save.
6. Wait for GitHub Pages to publish. The live link will look like https://YOUR-USERNAME.github.io/visual-vibes-photography/

IMPORTANT
- Test the website on a phone and computer.
- GitHub Pages publishes a static website. It does not provide a secure admin dashboard or store booking submissions. A real admin system requires a backend and secure authentication; do not put passwords or private keys in this folder.
- If you want to change the contact details later, update the WhatsApp and email links in index.html and portfolio-navigation.js before publishing.
