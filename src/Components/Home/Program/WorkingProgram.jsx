import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WorkingProgram = (props) => {
  const data = props?.data?.workingProgram || 0; // Number of boxes with random colors
  const totalBoxes = 13; // Total number of boxes
  const navigate = useNavigate();

  const values = [
    2.5, 5, 10, 20, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800,
  ]; // Static values for the boxes

  // Function to get a random color
  const getRandomColor = () => {
    const colors = ["bg-red-600", "bg-green-400", "bg-blue-500", "bg-pink-500"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Generate the boxes
  const boxes = values.map((value, index) => ({
    value,
    bgColor: index < data ? getRandomColor() : "bg-gray-300",
  }));

  return (
    <div className="w-auto p-6 min-h-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <Typography variant="h5" component="div">
          LTI Slots
        </Typography>
        <div className="flex justify-center items-center space-x-2">
          <button
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/program/working-program-view")}
          >
            View more
          </button>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-center mt-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`rounded-3xl flex w-[150px] h-[50px] ${box.bgColor}`}
          >
            <div className="w-[100px] flex flex-col">
              <div
                className="h-[25px]"
                style={{ borderBottom: "3px solid white" }}
              ></div>
            </div>
            <div className="bg-gray-50 w-[150px] h-[50px] rounded-3xl flex justify-center items-center">
              <p className="text-center">{box.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProgram;
