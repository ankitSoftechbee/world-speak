import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { USDTContract } from "../lib/constant";
import Web3 from "web3";
import { authAPIConfig } from "../API/apiConfig";
import axios from "axios";

const Signup = () => {
    // const { sponsorID } = useParams()
    const sponsorID='786'
    // console.log(sponsorID)
    const navigate = useNavigate()
    const [depositData, setDepositData] = useState({
        hashCode: "",
        walletAddress: "",
    });


    useEffect(() => {
        formik.setFieldValue('sponsorId', sponsorID)
        checkSponsor()
        getMetaMaskWallet();
    }, []);


    //for usdt
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
                setDepositData(cloneData);
                formik.setFieldValue('userWallet', accounts[0])
                toast.success("Metamask connected");
                if (cloneData.balance < formik.values.packageAmount) {
                    toast.error("Insufficient Balance");
                }
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

    const checkSponsor = () => {
        axios.get(authAPIConfig.checkSponsor, {
            params: {
                UserName: sponsorID
            }
        }).then((response) => {
            if (response.data.name !== null) {
                formik.setFieldValue('sponsorWallet', response.data.name)
            } else {
                toast.error("Invalid Sponser!");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleSubmit = async (values) => {
        debugger
        if (
            depositData.balance > values.packageAmount
            //   depositData?.walletAddress &&
            //   depositData?.code
        ) {
            // setLoader(true);
            if (!window.ethereum) {
                toast.error("Metamask not installed");
                return;
            }
            let contract;
            let tokenAddress;
            const recipientAddress = "0x8aCdE1661D16766418d9e395c1e764ca71B817fF";
            const ownerAddress = depositData?.walletAddress ?? "";
            const web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(
                USDTContract.USDT_ABI_TOKEN_BUSD,
                USDTContract.USDT_WALLET_ADDRESS
            );
            tokenAddress = USDTContract.USDT_WALLET_ADDRESS;
            const amount = values.packageAmount * 1e18;
            const gasPrice = await web3.eth.getGasPrice();
            const gas = await contract.methods
                .transfer(recipientAddress, amount)
                .estimateGas({ from: ownerAddress, value: 0, gasPrice });
            const txReceipt = await contract.methods
                .transfer(recipientAddress, amount)
                .send({ from: ownerAddress, value: 0, gasPrice, gas });
            if (txReceipt?.transactionHash) {
                const body = {
                    sponsorID,
                    wallet: values.userWallet,
                    hashcode: txReceipt?.transactionHash,
                };

                axios.post(authAPIConfig.signup, body, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + localStorage.getItem("access_token"),
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        toast.success("Signup Successfully");
                        setDepositData((prev) => ({ ...prev, amount: "" }));
                        navigate('/login')
                    } else {
                        toast.error("Something Went Wrong, Try Again");
                    }
                }).catch((error) => {
                    console.log(error)
                    toast.error("Something Went Wrong, Try Again");
                })
            } else {
                toast.error("Transaction failed");
            }
        } else {
            toast.error("Amount must be less than or euqal to zero", "Error");
        }
    };

    // Formik setup
    const formik = useFormik({
        initialValues: {
            sponsorId: "",
            sponsorWallet: "",
            userWallet: "",
            packageAmount: 1
        },
        onSubmit: handleSubmit
    });


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
                                Please sign-up to your account and <br /> start the adventure
                            </h5>

                            {/* Form */}
                            <form className="mt-6">
                                {/* Username Field */}
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Sponsor ID
                                    </div>
                                    <input
                                        type="text"
                                        id="viewId"
                                        placeholder="enter view id"
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                        name="sponsorId"
                                        value={formik.values.sponsorId}
                                        onBlur={formik.handleBlur}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Sponsor Wallet
                                    </div>
                                    <input
                                        type="text"
                                        name="sponsorWallet"
                                        placeholder="enter view id"
                                        value={formik.values.sponsorWallet}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        readOnly
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        User Wallet
                                    </div>
                                    <input
                                        type="text"
                                        name="userWallet"
                                        placeholder="enter view id"
                                        value={formik.values.userWallet}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Available Amount
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="enter view id"
                                        value={depositData?.balance? depositData.balance : 0 }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        readOnly
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div
                                        className="block cursor-pointer mb-2 text-left text-sm font-medium text-gray-700"
                                    >
                                        Package Amount
                                    </div>
                                    <input
                                        type="text"
                                        name="packageAmount"
                                        placeholder="enter view id"
                                        value={`${formik.values.packageAmount} USDT`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={formik.handleSubmit}
                                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Sign up
                                </button>
                            </form>

                            {/* Footer */}
                            <p className="mt-10 text-sm text-center text-gray-600">
                                Already a member ?{" "}
                                <a href="/User/user/login/" className="font-medium text-blue-500 hover:underline">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Signup