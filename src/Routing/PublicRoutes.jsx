
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../Auth/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';
import IncomeSummary from '../Components/Summary/IncomeSummary';
import Withdrawlummary from '../Components/Summary/WithdrawlSummary';
import Income from '../Components/Income/Income';
import Affiliates from '../Components/Affilates/DirectTeam';
import DirectTeam from '../Components/Affilates/DirectTeam';
import MyTeam from '../Components/Affilates/MyTeam';
import WorkingProgramView from '../Components/Home/Program/view/WorkingProgramView';
import NonWorkingProgramView from '../Components/Home/Program/view/NonWorkingProgramView';
import Signup from '../Auth/Signup';
import PageNotFound from '../lib/404';

const Routing = () => {
    return (
        <Router>
            <Routes>
                {/* Render Home at "/" */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoutes>
                            <React.Suspense fallback={<>...</>}>
                                <Layout />
                            </React.Suspense>
                        </ProtectedRoutes>
                    }
                >
                    <Route index element={<Home />} />
                    <Route exact path="/user/summary/income-summary" element={<IncomeSummary />} />
                    <Route exact path="/user/summary/withdrawl-summary" element={<Withdrawlummary />} />
                    <Route exact path="/income/:incomeName/*" element={<Income />} />
                    <Route exact path="/affiliates/Direct-affiliates" element={<DirectTeam />} />
                    <Route exact path="/affiliates/Team-affiliates" element={<MyTeam />} />
                    <Route exact path="/program/working-program-view" element={<WorkingProgramView />} />
                    <Route exact path="/program/non-working-program-view" element={<NonWorkingProgramView />} />
                </Route>

                {/* Public Route */}
                <Route exact path="/user/login" element={<Login />} />
                <Route exact path="/user/signup" element={<Signup />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Router>

    );
};

export default Routing;
