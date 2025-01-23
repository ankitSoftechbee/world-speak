const key = import.meta.env.VITE_API_URL;

export const authAPIConfig = {
    login: key + '/api/Authentication/token',
    checkSponsor: key + '/api/Authentication/ChecKId',
    signup:key+'/api/Authentication/SignUp'
}
export const dashboardAPIConfig = {
    dashboard: key + '/Dashboard'
}
export const summaryAPIConfig = {
    incomeSummary: key + '/IncomeSummary',
    withdrawlSummary: key + '/WithdrawReport'
}
export const affilatesAPIConfig = {
    directTeam: key + '/DirectTeam',
    myTeam: key + '/MyTeam'
}
export const incomeReport = {
    incomeReport: key + '/IncomeReport'
}
