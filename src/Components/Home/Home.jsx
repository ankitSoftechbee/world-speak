import Income from "./Income";
import DashboardBoard from "./dashboardCard";
import Box from "./Box";
import Program from "./Program/Program";
import React, { useEffect, useState } from "react";
import CustomCard from "../CustomCard";
import requestApi from "../../services/service";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const Home = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getDashboard()
    }, [])

    const getDashboard = async () => {
        try {
            setLoading(true)
            const response = await requestApi.dashboard()
            if (response.status === 200) {
                setData(response.data)
            } else {
                toast.error('Something went wrong')
            }
            setLoading(false)

        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <Loader className="animate-spin text-emerald-500" size={50} />
        </div>
    }


    return (
        <div className="p-2">
            <Income data={data} />
            <DashboardBoard data={data} />
            <Box data={data} />
            <Program data={data} />
            {/* <CustomCard data={data} /> */}
        </div>
    );
};

export default Home;
