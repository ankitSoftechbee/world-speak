import axios from "axios";
import { affilatesAPIConfig, dashboardAPIConfig, summaryAPIConfig } from "../API/apiConfig";
async function postData(url, body) {
    try {
        let _r = await axios.post(url, body, {
            headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("access_token")),
            },
        });

        return _r;
    } catch (res) {
        return res;
    }
}
async function postDataWithFormData(url, body) {
    try {
        let _r = await axios.post(url, body, {
            headers: {
                "Content-Type": 'multipart/form-data',
                Authorization: "Bearer ".concat(localStorage.getItem("access_token")),
            },
        });

        return _r;
    } catch (res) {
        return res;
    }
}

async function postDataNoHeader(url, body) {
    try {
        let _r = await axios.post(url, body);
        return _r.data;
    } catch (res) {
        return res;
    }
}
async function getDataWithoutHeader(url) {
    try {
        let _r = await axios.get(url);
        return _r.data;
    } catch (res) {
        // console.log(res);
        return res;
    }
}

async function getData(url) {
    try {
        let _r = await axios.get(url, {
            headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("access_token")),
            },
        });
        return _r;
    } catch (res) {
        return res;
    }
}

async function getDataWithParams(url, body) {
    try {
        let _r = await axios.get(url, {
            params: body,
            headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("access_token")),
            },
        });
        return _r;
    } catch (res) {
        return res;
    }
}

const requestApi = {
    dashboard: async () => {
        const url = dashboardAPIConfig.dashboard;
        let r = await getData(url);
        return r;
    },
    incomeSummary: async (body) => {
        const url = summaryAPIConfig.incomeSummary;
        let r = await getDataWithParams(url, body);
        return r;
    },
    withdrawlSummary: async (body) => {
        const url = summaryAPIConfig.withdrawlSummary;
        let r = await getDataWithParams(url, body);
        return r;
    },
    directTeam: async (body) => {
        const url = affilatesAPIConfig.directTeam;
        let r = await getDataWithParams(url, body);
        return r;
    },
    myTeam: async (body) => {
        const url = affilatesAPIConfig.myTeam;
        let r = await getDataWithParams(url, body);
        return r;
    },
}

export default requestApi;