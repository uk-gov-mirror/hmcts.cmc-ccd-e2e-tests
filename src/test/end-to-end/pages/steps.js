'use strict';

const requireDirectory = require('require-directory');
const steps = requireDirectory(module);

module.exports = function () {
    return actor({
        authenticateWithIdam: steps.IDAM.signIn,
        chooseNextStep: steps.nextStep.nextStep,
        enterEventSummary: steps.eventSummary.eventSummary,
        enterGenerateOrderPage1: steps.generateOrder.page1,
        enterGenerateOrderPage2: steps.generateOrder.page2,
        enterReviewOrderPage1: steps.reviewOrder.page1,
        enterActionReviewCommentsPage1: steps.actionReviewComments.page1,
        enterActionReviewCommentsPage2: steps.actionReviewComments.page2,
        enterApproveDirectionOrderPage1: steps.approveDirectionOrder.page1,
        enterApproveDirectionOrderPage2: steps.approveDirectionOrder.page2,
        enterDrawDirectionsOrderPage1: steps.drawDirectionsOrder.page1,
        enterJudgeDrawDirectionsOrderPage1: steps.judgeDrawDirectionOrder.page1,
        enterJudgeDrawDirectionsOrderPage2: steps.judgeDrawDirectionOrder.page2,
        enterJudgeDrawDirectionsOrderPage3: steps.judgeDrawDirectionOrder.page3,
        enterJudgeDrawDirectionsOrderPage4: steps.judgeDrawDirectionOrder.page4,
        enterMediationSuccessPage1: steps.mediationSuccessful.page1,
        enterMediationSuccessPage2: steps.mediationSuccessful.page2,
        enterMediationFailurePage1: steps.mediationUnsuccessful.page1,
        enterPaperRespReviewPage1: steps.paperRespReviewed.page1,
        enterPaperRespReviewPage2: steps.paperRespReviewed.page2,
        enterReviewOcon9xPage1: steps.reviewOcon9xResp.page1,
        enterPaperRespAdmissionPage1: steps.paperRespAdmission.page1,
        enterPaperRespDefencePage1: steps.paperRespDefence.page1,
        enterPaymentDetails: steps.payment.paymentDetails,
        confirmPayment: steps.payment.paymentConfirm,
        extractClaimRef: steps.payment.ClaimantClaimConfirmedPage,
        createClaim: steps.claimant.createClaim,
        createClaimDefendantAsOrg: steps.claimant.createClaimDefendantAsOrg,
        linkDefendant: steps.defendant.linkDefendant,
        confirmDefendantDetails: steps.defendant.confirmYourDetails,
        defendantExtraTimeNeeded: steps.defendant.moreTimeNeeded,
        chooseDefendantResponse: steps.defendant.chooseResponse,
        decideHowToPay: steps.defendant.decideHowToPay,
        shareDefendantFinancialDetails: steps.defendant.shareYourFinancialDetails,
        submitDefendantResponse: steps.defendant.submitResponse,
        viewDefendantResponse: steps.claimant.viewDefendantResponse,
        acceptOrRejectResponse: steps.claimant.acceptOrRejectResponse,
        checkAndSumbitResponse: steps.claimant.checkAndSumbitResponse,
        requestCCJ: steps.claimant.requestCCJ
    });
};
