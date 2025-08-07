const fs = require('fs');
const path = require('path');

// Read the current programRegistry.js file
const programRegistryPath = 'src/scripts/utils/programRegistry.js';
let content = fs.readFileSync(programRegistryPath, 'utf8');

// List of all marketing project apps that need toolbar configuration
const marketingApps = [
    'persona-development-customer-journey-mapping',
    'insight-synthesis-actionable-recommendations',
    'launch-planning',
    'campaign-execution',
    'kpi-tracking',
    'cross-functional-alignment',
    'competitor-benchmarking',
    'market-sizing',
    'pricing-strategy',
    'opportunity-mapping',
    'value-proposition',
    'messaging-frameworks-placeholder',
    'brand-storytelling',
    'message-testing',
    'one-pagers-placeholder',
    'battlecards-placeholder',
    'email-templates-placeholder',
    'sales-decks-placeholder',
    'pain-point-identification-needs-analysis',
    'qualitative-quantitative-research'
];

// Toolbar configuration WITHOUT the save button for marketing apps
const toolbarConfig = `,'toolbarConfig':{'buttons':[{'key':'print','enabled':!0x1,'icon':_0x3834b3(0x1da),'text':_0x3834b3(0x203),'desktopOnly':!0x0,'tooltip':'Print\\x20(Disabled)'},{'type':'separator','desktopOnly':!0x0},{'key':'email','enabled':!0x0,'icon':_0x3834b3(0x1ca),'text':'Contact\\x20Me','action':'openContact'},{'type':_0x3834b3(0x218),'desktopOnly':!0x0},{'key':'up','enabled':!0x1,'icon':'./assets/gui/toolbar/up.webp','text':null,'desktopOnly':!0x0,'tooltip':'Up\\x20(Disabled)'}]}`;

// Add toolbar configuration to each marketing app
marketingApps.forEach(appName => {
    // Find the app configuration in the content
    const appPattern = new RegExp(`'${appName}':createProgram\\('${appName}'.*?\\}\\)`, 's');
    const match = content.match(appPattern);
    
    if (match) {
        const appConfig = match[0];
        
        // Check if toolbarConfig already exists
        if (!appConfig.includes('toolbarConfig')) {
            // Add toolbarConfig before the closing parenthesis
            const updatedConfig = appConfig.replace(/}\)$/, `${toolbarConfig}})`);
            content = content.replace(appPattern, updatedConfig);
            console.log(`Added toolbar configuration to ${appName}`);
        } else {
            // Replace existing toolbarConfig with the new one (without save button)
            const updatedConfig = appConfig.replace(/,'toolbarConfig':\{'buttons':\[.*?\]\}/s, toolbarConfig);
            content = content.replace(appPattern, updatedConfig);
            console.log(`Updated toolbar configuration for ${appName}`);
        }
    } else {
        console.log(`Could not find configuration for ${appName}`);
    }
});

// Write the updated content back to the file
fs.writeFileSync(programRegistryPath, content, 'utf8');
console.log('Updated programRegistry.js with toolbar configurations (without save button)');
