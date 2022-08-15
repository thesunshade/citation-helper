# Live Site

https://sutta.readingfaithfully.org/

# About Citation Helper

This tool is designed to allow you to enter citations for suttas in the first four nikayas and the first 10 books of the Kuddhaka Nikaya. All standard abreviations can be used.

# Developers

## Add a new site

- [ ] Create a new object with included suttas for the site under `/webSites`
- [ ] If site has unique urls, create a version of `createAncientBuddhistTextsLink.js` for that site
- [ ] Add new `<LinkButton/>` component in `App.js`
- [ ] Create icon with the site code as name, e.g. `ATI.png` and put it in the `/image` folder
- [ ] Add css style for class of site code
- [ ] Add site to `makePrettyName.js`
- [ ] Add site to array `checkList` so it appears in options list
