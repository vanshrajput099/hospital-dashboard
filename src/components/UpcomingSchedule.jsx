const UpcomingSchedule = ({ data }) => {
    return (
        <div className="p-5 rounded-3xl bg-[#dde2f9] min-w-[220px]">
            <div className='flex justify-between gap-10'>
                <h2 className="font-bold">{data.name}</h2>
                <h1>{data.img}</h1>
            </div>
            <h1 className="text-sm mt-1 font-medium">{data.time}</h1>
        </div>
    )
}

export default UpcomingSchedule