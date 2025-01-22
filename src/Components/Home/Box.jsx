import { Gauge } from "@mui/x-charts";
const Box = (props) => {
    const {data}=props
    const Box = [
        { id: 'smallbox', name: 'Small Box' },
        { id: 'currencybox', name: 'Currency Box' },
        { id: 'swissbox', name: 'Swiss Box' },
        { id: 'dreambox', name: 'Dream Box' },
    ]
    return <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {Box.map((item) => {
            const value=data[item.id]
            return <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="text-gray-500 font-medium">{item.name}</div>
                <div className="text-4xl font-bold text-gray-800">
                    {value} <span className="text-sm font-normal">USDT</span>
                </div>
                <div className="relative flex items-center justify-center my-4">
                    <Gauge innerRadius="70%" width={200} height={150} value={value} startAngle={-90} endAngle={90} />
                </div>
                <div className="text-gray-500 text-center text-sm">
                    <span className="text-xl font-bold text-gray-800">45%</span> Your sales performance is 45% better compared to last month
                </div>
                <button className="mt-4 w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
                    Details
                </button>
            </div>
        })}
        </div>
    </>
}
export default Box;