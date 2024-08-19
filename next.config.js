const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
      },
      server: {
        // Will be available on both localhost and external addresses
        host: '192.168.0.102',
      },
}