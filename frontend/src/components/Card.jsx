import React from 'react'

export default function Card({ college }) {
    return (
        <>
            <div className="max-w-sm p-6 h-fit bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">{
                    college.programs?.map((program, ind) => (
                        <span key={ind}>{`${program}, `}</span>
                    ))
                }</h5>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 text-center">{college.collegeName}</p>
                <div className='mx-auto w-fit text-center'>
                    <p className=" text-sm text-gray-700 dark:text-gray-400 font-semibold">Work Mode</p>
                    {
                        college.workMode.map((work, key) => (
                            <span className='rounded-lg text-sm text-gray-700 dark:text-gray-200 bg-gray-200 m-1 p-1' key={key}>{work}</span>
                        ))
                    }
                </div>


                <button className="mt-4 flex border border-gray-400 w-full justify-center items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-green-600 hover:text-white">
                    Contact
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </>
    )
}
