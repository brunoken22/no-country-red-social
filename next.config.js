/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

module.exports = withSvgr({
    images: {
        domains: ['res.cloudinary.com'],
      },
})


