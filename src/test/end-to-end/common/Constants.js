const ccdUserType = {
    JUDGE: 'Judge',
    LA: 'Legal Advisor',
    CASEWORKER: 'Caseworker'
};

const caseEventId = {
    INITIATE_PAYMENT_CASE: 'InitiateClaimPaymentCitizen',
    STAY_CLAIM: 'StayClaim',
    LIFT_STAY: 'LiftStay',
    ASSIGN_FOR_DIRECTIONS: 'AssigningForDirections',
    ASSIGN_FOR_JUDGE_DIRECTIONS: 'AssigningForJudgeDirections',
    CLAIMANT_REJECTS: 'ClaimantRejects',
    GENERATE_ORDER: 'GenerateOrder'
};

const caseEventName = {
    LIFT_STAY: 'Lift Stay',
    PROVIDE_DIRECTIONS: 'Provide Directions',
    GENERATE_ORDER: 'Generate Order'
};

module.exports = {
    ccdUserType,
    caseEventId,
    caseEventName
};
