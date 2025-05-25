const OrganDetails = ({ data }) => {

    let colorIndex = 0;
    const color = ["bg-green-500", "bg-yellow-500", "bg-red-500"];

    if (data.percentage < 75) {
        colorIndex = 0;
    } else if (data.percentage < 85) {
        colorIndex = 1;
    } else {
        colorIndex = 2;
    }

    return (
        <div className="w-[90%] mx-auto bg-[#f6faff] px-5 py-7 space-y-4 rounded-xl">
            <div className="flex items-center gap-3">
                <img className="w-7 h-7" src={data.img} alt="" />
                <h1 className="text-xl font-bold text-[#3734a7]">{data.name}</h1>
            </div>
            <p className="text-xs text-gray-500">Date: 25 Oct 2021</p>
            <div className="w-full rounded-xl overflow-hidden bg-white">
                <div style={{ width: data.percentage + "%" }} className={` ${color[colorIndex]} py-1`}></div>
            </div>
        </div>
    )
}

export default OrganDetails