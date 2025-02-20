const fs = require('fs'); // Use CommonJS require

fs.writeFileSync('./allure-results/environment.properties', 'BROWSER=chromium\nENV=staging');
console.log('Environment file generated successfully!');
