'use strict';

const testConfig = require('../../../config');
const mediationConfig = require('./mediationConfig');
const commonConfig = require('../common/commonConfig');

module.exports = async function () {
    const I = this;
    await I.waitInUrl('SuccessfulMediation1', testConfig.TestTimeToWaitForText);
    await I.waitForElement('#respondents', testConfig.TestTimeToWaitForText);

    await I.fillField('#respondents_0_mediationSettlementReachedAt-day', mediationConfig.page1_settlementReached_day);
    await I.fillField('#respondents_0_mediationSettlementReachedAt-month', mediationConfig.page1_settlementReached_month);
    await I.fillField('#respondents_0_mediationSettlementReachedAt-year', mediationConfig.page1_settlementReached_year);

    await I.waitForNavigationToComplete(commonConfig.continueButton);
};