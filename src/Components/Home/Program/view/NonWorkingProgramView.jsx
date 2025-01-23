import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { TablePagination } from '@mui/material';
import { Loader } from 'lucide-react';
import { useParams } from 'react-router-dom';
import requestApi from '../../../../services/service';


const NonWorkingProgramView = () => {
    const routParams = useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [totalRecords, setTotalRecords] = useState(0);
    const [incomeType, setIncomeType] = useState('')
    const [filter, setFilter] = React.useState({
        FromDate: "NULL",
        ToDate: "NULL",
        Keyword: routParams?.incomeName?.split('-')[0] || '',
        PageNumber: 1,
        PageSize: 10,
    });

    useEffect(() => {
        if (routParams) {
            // setIncomeType(routParams.incomeName.split('-')[0])
            fetchData()
        }

    }, [filter, routParams])

    const fetchData = async () => {
        setLoading(true)
        const body={
            FromDate: filter.FromDate,
            ToDate: filter.ToDate,
            Keyword: routParams?.incomeName?.split('-')[0] || '',
            PageNumber: filter.PageNumber,
            PageSize: filter.PageSize,
        }
        const response = await requestApi.directTeam(body)
        if (response?.status === 200 && response?.data?.data?.length > 0) {
            setData(response.data.data)
            setTotalRecords(response.data.totalRecord)
        } else {
            setData([])
            setTotalRecords(0)
        }
        setLoading(false)
    }

    const handleFromDateSelect = (event) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            FromDate: event.target.value || "NULL",
            PageNumber: 1, // Reset to first page when filter changes
        }));
    };

    const handleToDateSelect = (event) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            ToDate: event.target.value || "NULL",
            PageNumber: 1, // Reset to first page when filter changes
        }));
    };

    const handlePageChange = (event, newPage) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            PageNumber: newPage + 1,
        }));
    };

    const handleRowsPerPageChange = (event) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            PageSize: parseInt(event.target.value, 10),
            PageNumber: 1,
        }));
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <Loader className="animate-spin text-emerald-500" size={50} />
        </div>
    }

    return (
        <div className='p-2'>
            <div className='flex gap-3 mt-4 mb-10'>
                <div>
                    <label
                        htmlFor="fromDate"
                        className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        From date
                    </label>
                    <input
                        type="date"
                        id="fromDate"
                        onChange={handleFromDateSelect}
                        className="min-w-[280px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="toDate"
                        className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        To date
                    </label>
                    <input
                        type="date"
                        id="toDate"
                        onChange={handleToDateSelect}
                        className="min-w-[280px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="bg-gray-100">
                        <TableRow>
                            <TableCell ><div className='text-lg font-bold'>Date</div></TableCell>
                            <TableCell align="right"><div className='text-lg font-bold'>Username</div></TableCell>
                            <TableCell align="right"><div className='text-lg font-bold'>Wallet</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((item, index) => (
                            <TableRow
                                //   key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left'>
                                    {/* {item?.dateofjoin?.split('T')[0] || ''} */}
                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {totalRecords > 0 && (
                <TablePagination
                    component="div"
                    count={totalRecords}
                    page={filter.PageNumber - 1}
                    onPageChange={handlePageChange}
                    rowsPerPage={filter.PageSize}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            )}
        </div>
    );
}
export default NonWorkingProgramView