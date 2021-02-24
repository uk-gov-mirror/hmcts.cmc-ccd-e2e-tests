'use strict';

const testConfig = require('../../../config');
const commonConfig = require('../common/commonConfig');

module.exports = async function (claimNumber) {
    const I = this;
    const linkXPath = `//a[contains(text(), '${claimNumber}-Legal-Adviser-Directions-Order.pdf')]`;
    await I.waitForClickable(linkXPath, testConfig.TestTimeToWaitForText);
    //await I.click(claimNumber + '-Legal-Adviser-Directions-Order.pdf');
    await I.waitForNavigationToComplete(commonConfig.continueButton);
};