import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import axios from 'axios';
import Card from '../components/Card';

export default function Home() {
    const [collegeData, setCollegeData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://dashboard-i9ge.onrender.com");
            if (response.data.success) {
                setCollegeData(response.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(collegeData);
    // }, [collegeData])

    const filterByWorkMode = (workMode) => {
        setCollegeData(collegeData.filter(college => college.workMode.includes(workMode)));
    };

    const filterByDegree = (program) => {
        setCollegeData(collegeData.filter(college => college.programs.includes(program)));
    };
    return (
        <>
            <SideBar />

            <div className="p-4 sm:ml-64">
                <div>
                    <h1 className='font-bold text-2xl text-gray-800'>Colleges Posting for On-Campus</h1>
                    <span className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a provident magnam.</span>
                    <div className='flex flex-col md:flex-row mt-10'>

                        {/* filters */}
                        <div className='md:w-[20%] p-2 '>
                            <h2 className='text-md font-semibold'>Filters</h2>
                            <hr className='my-2' />
                            <div className="w-full flex items-center justify-between">
                                <h2 className='text-md font-semibold'>Work Mode</h2>
                                <span className='text-xs text-gray-600 cursor-pointer' onClick={() => fetchData()}>clear all</span>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <div className="flex gap-3 items-center" onClick={() => filterByWorkMode("Remote")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input id="Remote" name="Remote" type="checkbox" className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white" />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Remote" className="font-medium text-gray-900">
                                            Remote
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByWorkMode("Onsite")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Onsite"
                                            name="Onsite"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Onsite" className="font-medium text-gray-900">
                                            Onsite
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByWorkMode("Hybrid")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Hybrid"
                                            name="Hybrid"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Hybrid" className="font-medium text-gray-900">
                                            Hybrid
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <hr className='my-2' />

                            <div className="w-full flex items-center justify-between">
                                <h2 className='text-md font-semibold'>Degree</h2>
                                <span className='text-xs text-gray-600 cursor-pointer' onClick={() => fetchData()}>clear all</span>
                            </div>
                            <div className='space-y-1 mt-4'>
                                <div className="flex gap-3 items-center" onClick={() => filterByDegree("Polytechnic")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Polytechnic"
                                            name="Polytechnic"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Polytechnic" className="font-medium text-gray-900">
                                            Polytechnic
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByDegree("ITI")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="ITI"
                                            name="ITI"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="ITI" className="font-medium text-gray-900">
                                            ITI
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByDegree("Diploma")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Diploma"
                                            name="Diploma"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Diploma" className="font-medium text-gray-900">
                                            Diploma
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByDegree("Undergraduate")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Undergraduate"
                                            name="Undergraduate"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Undergraduate" className="font-medium text-gray-900">
                                            Undergraduate
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center" onClick={() => filterByDegree("Postgraduate")}>
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Postgraduate"
                                            name="Postgraduate"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Postgraduate" className="font-medium text-gray-900">
                                            Postgraduate
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <hr className='my-2' />
                            <h2 className='text-md font-semibold'>Courses</h2>
                            <div className='space-y-1 mt-4'>
                                <div className="flex gap-3 items-center">
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Engineering"
                                            name="Engineering"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                        <svg
                                            fill="none"
                                            viewBox="0 0 14 14"
                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                        >
                                            <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-checked:opacity-100"
                                            />
                                            <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Engineering" className="font-medium text-gray-900">
                                            Engineering
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="group grid size-4 grid-cols-1">
                                        <input
                                            id="Pharmacy"
                                            name="Pharmacy"
                                            type="checkbox"
                                            className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white"
                                        />
                                        <svg
                                            fill="none"
                                            viewBox="0 0 14 14"
                                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                        >
                                            <path
                                                d="M3 8L6 11L11 3.5"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-checked:opacity-100"
                                            />
                                            <path
                                                d="M3 7H11"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="opacity-0 group-has-indeterminate:opacity-100"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-sm/6">
                                        <label htmlFor="Pharmacy" className="font-medium text-gray-900">
                                            Pharmacy
                                        </label>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                        {/* data */}
                        <div className='md:w-[80%] mx-auto  rounded-lg p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-4 justify-center'>
                            {
                                collegeData.length > 0 ? collegeData.map((college, key) => (
                                    <Card key={key} college={college} />
                                )) : (
                                    <span className='flex text-red-400'>No entries present</span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
