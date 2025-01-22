import totalincome from "../../assets/totalincome.svg";
import ltIncome from "../../assets/ltincome.svg";
import allBox from "../../assets/allbox.svg";
import upgradeWallet from "../../assets/upgradewallet.svg";
import MovingIcon from "@mui/icons-material/Moving";

const Income = (props) => {
    const { data } = props;

    const income = [
        { id: "totalIncome", name: "Total Income", icon: totalincome },
        { id: "ltIncome", name: "LT Income", icon: ltIncome },
        { id: "allBoxes", name: "All Boxes", icon: allBox },
        { id: "upgradeWallet", name: "Upgrade Wallet", icon: upgradeWallet },
        { id: "totalProfit", name: "Total Profit", icon: upgradeWallet },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {income.map((item) => {
                    const price = data[item.id]; // Access the value using the item's id as a key
                    return (
                        <div
                            key={item.id}
                            className="max-w-[100%] bg-white shadow-lg rounded-xl p-4 flex"
                        >
                            <div className="flex-1">
                                <p className="text-gray-600 text-left text-lg font-medium">
                                    {item.name}
                                </p>
                                <p className="text-gray-800 my-4 text-left text-2xl font-bold">
                                    {price ?? "N/A"} {/* Show value or N/A if undefined */}
                                </p>
                                <p className="text-sm flex items-center gap-1 mt-4">
                                    <MovingIcon className="text-green-500" />
                                    <span className="text-green-500"> 8.5% </span>Up from yesterday
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl">
                                <img src={item.icon} alt={item.name} className="w-16 h-16" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Income;
