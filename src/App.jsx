import Sidebar from './components/Sidebar';
import ScheduleSection from './components/ScheduleSection';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />

      {/* Second Div */}
      <div className='flex flex-col w-full xl:w-[85%] xl:flex-row'>

        {/* Mid Section */}
        <Dashboard />

        {/* Third Div */}
        <div className='w-full xl:w-[55%] h-full p-3 rounded-sm'>
          <ScheduleSection />
        </div>

      </div>
    </div >
  )
}

export default App