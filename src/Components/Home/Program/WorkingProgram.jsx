import { Typography } from "@mui/material";


const WorkingProgram = (props) => {
    const { data } = props
    const totalBoxes = 14; // Total number of boxes
    const greenBoxes = data.workingProgram || 0; // Number of green boxes from the data
    const boxes = Array.from({ length: totalBoxes }); // Create an array with 14 items
    return <div className="w-auto p-6 min-h-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
            <Typography variant="h5" component="div">
                Working Program
            </Typography>
            <div className="flex justify-center items-center space-x-2">
                <button className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600">
                    View more
                </button>
            </div>
        </div>
        <div className="flex gap-8 flex-wrap justify-center mt-4">
            {boxes.map((_, index) => (
                <div
                    key={index}
                    className={`h-[30px] w-[30px] rounded ${index < greenBoxes ? "bg-green-400" : "bg-gray-600"
                        }`}
                />
            ))}
        </div>
    </div>
}
export default WorkingProgram