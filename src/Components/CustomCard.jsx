import { PieChart, Pie, Cell, Tooltip, LabelList } from "recharts";

const CustomCard = () => {
    const chartData = [
        { label: "Category 1", value: 30, color: "#FF7F7F" },
        { label: "Category 2", value: 20, color: "#FFA07A" },
        { label: "Category 3", value: 20, color: "#4682B4" },
        { label: "Category 4", value: 15, color: "#3CB371" },
        { label: "Category 5", value: 15, color: "#FFB6C1" },
    ];

    const COLORS = chartData.map((item) => item.color);
    const total = 3.5;
    const currency = "USDT";
    return <div className="flex flex-col bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 w-72">
        {/* Total Value */}
        <div className="text-2xl text-left font-bold text-gray-900">{total}</div>
        <div className="text-sm text-left font-medium text-gray-500">{currency}</div>

        <div className="flex flex-col justify-center">
            <PieChart width={240} height={200}>
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                    {/* Add Labels */}
                    <LabelList
                        dataKey="value"
                        position="inside"
                        formatter={(value) => `${value}%`} // Format value to percentage
                        fill="#FFF" // Text color inside the chart
                        fontSize={12}
                    />
                </Pie>
                <Tooltip />
            </PieChart>

            {/* Footer */}
            <button className="mt-4 py-1 px-4 bg-blue-100 text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-200">
                1 View
            </button>
        </div>
    </div>
}

export default CustomCard