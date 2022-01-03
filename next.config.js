const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['disease.sh'],
  },
  future: { webpack5: true },

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       require('./scripts/generate-sitemap');
//     }

//     return config;
//   },
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
//   },
//   images: {
//     domains: ['disease.sh'],
//   },
// };
