import UpcomingSchedule from './UpcomingSchedule'
import Appointment from './Appointment'
import { ArrowBigLeft, ArrowBigRight, DotIcon, Plus, User } from 'lucide-react'
import { calendar_data } from '../data/calendarData'
import Calendar from './Calendar'
import { appointment_DataToday, appointment_Upcoming } from '../data/appointmentData'

const ScheduleSection = () => {
    return (
        <div className='bg-[#f6faff] h-full w-full'>
            <div className='w-[90%] mx-auto h-full py-5'>
                <div className='flex justify-end gap-2'>
                    <div className='bg-cyan-400 rounded-lg p-2 text-white'>
                        <User />
                    </div>
                    <div className='bg-blue-800 rounded-lg p-2 text-white'>
                        <Plus />
                    </div>
                </div>
                <div className='flex justify-between mt-5'>
                    <h1 className='font-medium text-[#3734a7]'>October 2021</h1>
                    <div className='flex items-center gap-2'>
                        <ArrowBigLeft />
                        <ArrowBigRight />
                    </div>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-7 mt-5'>
                    {
                        calendar_data.map((ele, idx) => {
                            return (
                                <Calendar index={idx} key={idx} data={ele} />
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-1 md:flex md:flex-wrap gap-5 mt-7'>
                    {
                        appointment_DataToday.map((ele, idx) => {
                            return <Appointment key={idx} data={ele} index={idx} />
                        })
                    }
                </div>

                <div className='mt-10 space-y-5 text-[#3734a7]'>

                    <div className='space-y-4'>
                        <h1 className='text-xl lg:text-2xl font-medium'>The Upcoming Schedule</h1>
                        {
                            appointment_Upcoming.map((ele, idx) => {
                                return (
                                    <div key={idx} className='space-y-4'>
                                        <h1 className='text-gray-400'>On {ele.day}</h1>
                                        <div className='grid grid-cols-1 md:flex md:flex-wrap gap-5'>
                                            {
                                                ele.appointments.map((ele, idx) => {
                                                    return <UpcomingSchedule data={ele} key={idx} />
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection