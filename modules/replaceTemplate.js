const fs = require('fs');

module.exports = async (tempHtmlPath, card) => {
    const tempHtml = await fs.readFile(tempHtmlPath);

    const outputHtml = tempHtml.replace(/{% CARD_NAME %}/g, card.name);
    outputHtml.replace(/{% CARD_CONTENT %}/g, card.content);
    outputHtml.replace(/{% CARD_URL %}/g, card.url);

    return outputHtml;
};
