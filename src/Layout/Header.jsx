import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import WalletIcon from "@mui/icons-material/Wallet";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../assets/logo.png";

const Header = () => {
    const navigate=useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [isIncomeOpen, setIsIncomeOpen] = useState(false);
    const [isAffiliatesOpen, setIsAffiliatesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSummaryDropdown = () => {
        setIsSummaryOpen(!isSummaryOpen);
        setIsIncomeOpen(false);
        setIsAffiliatesOpen(false); // Close other dropdowns
    };

    const toggleIncomeDropdown = () => {
        setIsIncomeOpen(!isIncomeOpen);
        setIsSummaryOpen(false);
        setIsAffiliatesOpen(false); // Close other dropdowns
    };

    const toggleAffiliatesDropdown = () => {
        setIsAffiliatesOpen(!isAffiliatesOpen);
        setIsIncomeOpen(false);
        setIsSummaryOpen(false); // Close other dropdowns
    };

    const closeDropdowns = () => {
        setIsSummaryOpen(false);
        setIsIncomeOpen(false);
        setIsAffiliatesOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        navigate('/user/login')

    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="w-full bg-gradient-to-r from-[#005A7D] to-[#0D0023] border-gray-200 dark:bg-gray-900 z-50">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 relative">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-12" alt="worldspeak" />
                    </Link>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Navigation Menu */}
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"
                            } absolute top-full left-0 w-full header-mobile-view md:relative md:top-0 md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="flex items-center gap-2">
                                <DashboardIcon className="text-white" />
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="flex items-center gap-2 relative">
                                <SubjectIcon className="text-white" />
                                <Link
                                    onClick={toggleSummaryDropdown}
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 focus:outline-none"
                                >
                                    Summary
                                    <ArrowDropDownIcon sx={{ color: "white", cursor: "pointer" }} />
                                </Link>
                                {isSummaryOpen && (
                                    <ul className="absolute top-full left-0 z-30 bg-gray-800 text-white rounded shadow-lg py-2 mt-2 w-48">
                                        <li>
                                            <Link
                                                to="/user/summary/income-summary"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Income Summary
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/user/summary/withdrawl-summary"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Withdrawal Summary
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center gap-2 relative">
                                <WalletIcon className="text-white" />
                                <Link
                                    onClick={toggleIncomeDropdown}
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 focus:outline-none"
                                >
                                    Income
                                    <ArrowDropDownIcon sx={{ color: "white", cursor: "pointer" }} />
                                </Link>
                                {isIncomeOpen && (
                                    <ul className="absolute top-full left-0 z-30 bg-gray-800 text-white rounded shadow-lg py-2 mt-2 w-48">
                                        <li>
                                            <Link
                                                to="/income/Small-box"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Small Box
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/income/Currency-box"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Currency Box
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/income/Swiss-box"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Swiss Box
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/income/Dream-box"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Dream Box
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center gap-2 relative">
                                <SettingsIcon className="text-white" />
                                <Link
                                    onClick={toggleAffiliatesDropdown}
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 focus:outline-none"
                                >
                                    Affiliates
                                    <ArrowDropDownIcon sx={{ color: "white", cursor: "pointer" }} />
                                </Link>
                                {isAffiliatesOpen && (
                                    <ul className="absolute top-full left-0 z-30 bg-gray-800 text-white rounded shadow-lg py-2 mt-2 w-48">
                                        <li>
                                            <Link
                                                to="/affiliates/Direct-affiliates"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Direct Affiliates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/affiliates/Team-affiliates"
                                                className="block px-4 py-2 hover:bg-gray-700"
                                                onClick={closeDropdowns}
                                            >
                                                Team Affiliates
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            {/* <li className="flex items-center gap-2">
                                <PersonIcon className="text-white" />
                                <Link
                                    to="#"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Profile
                                </Link>
                            </li> */}
                            <li className="flex items-center gap-2">
                                <AccountCircleIcon className="text-white" />
                                <Link
                                    to="#"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Sign Up
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <VpnKeyIcon className="text-white" />
                                <Link
                                    to="#"
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Sign In
                                </Link>
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>
                                <LogoutIcon className="text-white" />
                                <Link
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    log out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
