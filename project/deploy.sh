# Run tests
npm test

# Remove existent build
rm -rf dist

# Build project
npm run build

# Deploy
surge dist smartbank-dashboard.surge.sh

