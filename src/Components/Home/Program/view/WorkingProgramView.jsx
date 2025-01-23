const WorkingProgramView = () => {

    const getRandomColor = () => {
        const colors = ["bg-red-600", "bg-green-400", "bg-pink-500"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const arr=[1,3,4,5]

    return <>
        <div className="max-w-[720px] p-6 bg-blue-500 rounded-xl shadow-lg text-white">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg text-start font-semibold">Level 1</h2>
                <p className="text-2xl text-start font-bold">User Id 89856</p>
                <p className="text-sm text-start">Upline Id 33</p>
            </div>

            <div className="flex gap-2 flex-wrap">
            {arr.map(()=> <div className="w-fit flex justify-center flex-col gap-4">
                <div className={`rounded-3xl flex w-[150px] h-[50px] ${getRandomColor()}`}>
                    {/* Left Section with Border */}
                    <div className="w-[100px] flex flex-col">
                        <div
                            className="h-[25px]"
                            style={{ borderBottom: "3px solid white" }}
                        ></div>
                    </div>
                    {/* Right Section with Text */}
                    <div className="bg-gray-50 w-[150px] h-[50px] rounded-3xl flex justify-center items-center">
                        <p className="text-center text-black">90.84</p>
                    </div>
                </div>
                <div>
                <p className=" text-white font-medium">20-01-2025</p>
                <p className=" text-white font-medium mt-1">10:00 AM</p>
                </div>
               

            </div>)}
            </div>

         
        </div>
    </>
}
export default WorkingProgramView;