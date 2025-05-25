import { DotIcon, LineChartIcon } from 'lucide-react'

const Calendar = ({ data, index }) => {
    return (
        <div key={index} className={`${index === 1 && "bg-[#edf4ff]"} ${index === 6 && "text-gray-400"} text-center py-5 px-3 space-y-2 rounded-sm`}>
            <h1 className='text-sm lg:text-base'>{data.day}</h1>
            <h1 className='text-xl lg:text-2xl font-medium'>{data.date}</h1>
            <div className='mt-2 text-sm space-y-2'>
                {
                    data.time.map((ele, idx) => {
                        return (
                            <div key={idx} className={`${index === 1 && idx === 1 && "bg-[#3734a7] text-white"} h-[30px] rounded-lg flex flex-col justify-center ${data.dot ? data.dot === idx + 1 && "bg-[#abb0d1]  text-white" : null}`}>
                                <h1 className='text-xs'>
                                    {ele.time ? ele.time : "-"}
                                </h1>
                                {data.dot ? data.dot === idx + 1 && <DotIcon className='-mt-2 mx-auto h-5' /> : null}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Calendar