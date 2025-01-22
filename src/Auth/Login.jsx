import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { USDTContract } from "../lib/constant";
import Web3 from "web3";
import { authAPIConfig } from "../API/apiConfig";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()
    const [depositData, setDepositData] = useState({
        hashCode: "",
        walletAddress: "",
    });

    useEffect(() => {
        getMetaMaskWallet()
    }, [])

    const getMetaMaskWallet = async () => {
        try {
            if (!window.ethereum) {
                toast.error("Metamask not installed");
                return;
            }

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if (accounts !== 0) {
                const web3 = new Web3(window.ethereum);
                const usdtContract = new web3.eth.Contract(
                    USDTContract.USDT_ABI_TOKEN_BUSD,
                    USDTContract.USDT_WALLET_ADDRESS
                );

                const usdtBalance = await usdtContract.methods
                    ?.balanceOf(accounts[0])
                    ?.call();
                const cloneData = {
                    ...depositData,
                    walletAddress: accounts[0],
                    balance: usdtBalance.toString() / 1e18,
                };
                console.log(cloneData)
                setDepositData(cloneData);
                toast.success("Metamask connected");
            } else {
                toast.error(
                    "Could not find an authorized account");
            }
        } catch (error) {
            console.log("User denied account access or other error:", error);
            toast.error(
                "User denied account access or other error");
        }
    };
    const handleAutoLogin = () => {
        if (depositData.walletAddress) {
            axios.post(authAPIConfig.login, {
                "walletaddress": depositData.walletAddress
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('access_token', response.data.token)
                    sessionStorage.setItem('user', JSON.stringify(response.data.user))
                    navigate('/')
                } else {
                    toast.error('Wallet not exist');
                }
            }).catch((error) => {
                toast.error("Something went wrong");
            })
        } else {
            toast.error("Metamask not connected");
        }

    }

    return <div className="login-background h-screen">
        <div className="grid grid-cols-12 h-full">
            {/* 5 (hidden on mobile) */}
            <div className="hidden md:block md:col-span-4 h-full">
                {/* Content for the 5-column section */}
            </div>

            {/* 7 */}
            <div className="col-span-12 p-4 md:p-0 md:col-span-8 h-full">
                <div className="grid grid-cols-12 h-full">
                    <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center items-center">
                        <div className="w-full text-left">
                            <p className="text-white w-full text-left text-3xl font-bold">World Speaker</p>
                        </div>
                        <div className="w-full text-left">
                            <p className="text-white text-sm mt-1">login to explore the amazing features of world speak</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 h-full md:flex justify-center items-center">
                        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                            {/* Header */}
                            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Please sign-in to your account and <br /> start the adventure
                            </h5>

                            <button
                                onClick={handleAutoLogin}
                                className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                Auto login
                            </button>

                            {/* Form */}
                            <form className="mt-6">
                                {/* Username Field */}
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </div>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="Your full name"
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Your password"
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>


                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Login
                                </button>
                            </form>

                            {/* Footer */}
                            <p className="mt-10 text-sm text-center text-gray-600">
                                New on our World Speaks?{" "}
                                <a href="#" className="font-medium text-blue-500 hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Login