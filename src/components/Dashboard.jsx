import ActivityChart from './ActivityChart'
import OrganDetails from './OrganDetails'
import { Bell, SearchIcon } from 'lucide-react'
import muscle from "../assets/muscle.png"
import { body_data } from '../data/bodyData'
import scan from "../assets/scan.png"

const Dashboard = () => {
    return (
        <div className='w-full xl:w-[45%] bg-white'>
            <div className='w-[95%] xl:w-[85%] mx-auto py-10 space-y-5'>
                <div className='flex justify-between items-center'>
                    <div className='w-[80%] lg:w-[90%] relative flex items-center'>
                        <SearchIcon className='absolute ml-2 text-gray-500' />
                        <input type="text" className='border w-full py-2 px-11 border-gray-100 rounded-sm' placeholder='Search' />
                    </div>
                    <div className='border p-2 border-gray-100'>
                        <Bell className='text-[#3734a7]' />
                    </div>
                </div>
                <div className='flex justify-between text-[#3734a7]'>
                    <h1 className='text-xl lg:text-2xl font-bold '>Dashboard</h1>
                    <select className='text-sm' name="" id="">
                        <option value="">This Week</option>
                    </select>
                </div>

                {/* Body Div */}
                <div className='flex flex-col gap-3 lg:gap-0 sm:flex-row lg:justify-between'>
                    <div className='w-[95%] mx-auto lg:w-[50%] lg:mx-0  h-[500px] bg-[#f6faff] rounded-xl relative'>

                        <div className='flex justify-end absolute top-3 right-3'>
                            <SearchIcon />
                        </div>

                        <div className="h-full flex justify-center items-center">

                            <div className='relative flex justify-center'>

                                <img src={muscle} className='h-[450px] w-[200px] object-cover' alt="" />

                                <div className="absolute -right-[3%] top-[22%] flex flex-col items-center sm:flex-row sm:-right-[55%] sm:gap-2">
                                    <img src={scan} className="w-10 h-10" />
                                    <h1 className="bg-[#3734a5] px-5 py-3 rounded-xl text-white text-sm">❤️ Healthy Heart</h1>
                                </div>

                                <div className="absolute bottom-[17%] left-[0%] flex flex-col items-center md:flex-row-reverse md:-left-[45%] md:bottom-[25%] md:gap-2">
                                    <img src={scan} className="w-10 h-10" />
                                    <h1 className="bg-[#01e2ec] px-3 py-2 rounded-xl text-[#3433a9] text-sm">🦵 Healthy Leg</h1>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='w-full lg:w-[40%] space-y-5'>
                        {
                            body_data.map((ele, idx) => {
                                return (
                                    <OrganDetails data={ele} key={idx} />
                                )
                            })
                        }
                        <div className='flex w-full justify-end text-[#3734a7]'>
                            <select className="text-sm" name="" id="">
                                <option value="">Details</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#f6faff] w-[95%] lg:w-[85%] mx-auto p-5'>
                <div className='flex flex-wrap gap-x-5 justify-between items-center'>
                    <h1 className='text-[#3734a7] text-2xl font-medium'>Activity</h1>
                    <h1 className='text-gray-400 text-sm'>3 Appointments this week</h1>
                </div>
                <ActivityChart />
            </div>
        </div>
    )
}

export default Dashboard