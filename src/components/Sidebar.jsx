import { AppWindow, Calendar1, GitGraph, HistoryIcon, LayoutDashboard, MessageCircleIcon, PhoneCallIcon, Settings2Icon } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='hidden lg:block bg-[#f6faff] lg:w-[20%] xl:w-[15%] sticky left-0 min-h-screen'>
            <div className='w-[90%] mx-auto flex flex-col items-center text-xl text-[#c9cbd0] h-screen py-10'>
                <h1 className='font-bold lg:text-xl xl:text-2xl'><span className='text-[#44d6e8]'>Health</span><span className='text-[#282154]'>care.</span></h1>
                <div className='space-y-5 flex flex-col justify-between h-full py-5 mt-10'>
                    <div className='space-y-5'>
                        <h1 className='text-xs'>General</h1>
                        <div className='space-y-7 font-medium text-sm'>
                            <div className='flex gap-3 text-[#2f286e]'>
                                <LayoutDashboard className='' />
                                <h1 className=''>Dashboard</h1>
                            </div>
                            <div className='flex gap-3'>
                                <HistoryIcon />
                                <h1>History</h1>
                            </div>
                            <div className='flex gap-3'>
                                <Calendar1 />
                                <h1>Calendar</h1>
                            </div>
                            <div className='flex gap-3'>
                                <AppWindow />
                                <h1>Appointments</h1>
                            </div>
                            <div className='flex gap-3'>
                                <GitGraph />
                                <h1>Statics</h1>
                            </div>
                        </div>
                        <div className='space-y-5 mt-10'>
                            <h1 className='text-xs'>Tools</h1>
                            <div className='space-y-7 text-sm'>
                                <div className='flex gap-3'>
                                    <MessageCircleIcon />
                                    <h1>Chat</h1>
                                </div>
                                <div className='flex gap-3'>
                                    <PhoneCallIcon />
                                    <h1>Support</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 text-sm'>
                        <Settings2Icon />
                        <h1>Setting</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar