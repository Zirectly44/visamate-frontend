// /** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "styles/variables";`, // You can include global SCSS variables here if needed
  },
};

module.exports = nextConfig;
