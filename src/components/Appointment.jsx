const Appointment = ({ data, index }) => {
    return (
        <div className={`p-5 rounded-3xl flex flex-col justify-between min-w-[200px] space-y-2 ${index === 0 ? "bg-[#3734a7] text-white" : "bg-[#dde2f9]"}`}>
            <div className='flex justify-between gap-10'>
                <h2 className={`font-medium ${index === 0 ? "text-white" : "text-[#3734a7]"} `}>{data.name}</h2>
                <h1>{data.img}</h1>
            </div>
            <div className="text-sm">
                <h1>9:00 - 11:00</h1>
                <h1>{data.dr}</h1>
            </div>
        </div>
    )
}

export default Appointment