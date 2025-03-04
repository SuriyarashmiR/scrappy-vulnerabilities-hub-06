// updateData.js
const fs = require('fs');
const path = require('path');

const updateVulnerabilities = () => {
    const filePath = path.join(__dirname, 'vulnerabilities.json');
    let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Shuffle rankings and update severity
    data = data.map(item => ({
        ...item,
        severity: Math.random() > 0.5 ? 'high' : 'low',
        ranking: Math.floor(Math.random() * data.length) + 1
    })).sort((a, b) => a.ranking - b.ranking);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Vulnerabilities data updated:', new Date().toISOString());
};

setInterval(updateVulnerabilities, 10 * 60 * 1000); // Update every 10 minutes