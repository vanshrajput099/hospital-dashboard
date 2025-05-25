import { activity_Data } from "../data/activityData";

const ActivityChart = () => {
    
    return (
        <div className="mt-5 sm:w-[90%] mx-auto space-y-2">
            <div className="flex flex-wrap justify-between">
                {
                    activity_Data.map((ele, idx) => {
                        const color = ["bg-gray-200", "bg-cyan-500", "bg-[#3734a7]"];
                        const randomIndex = Math.floor(Math.random() * color.length);
                        let h;
                        if (ele === 1) h = "100%";
                        else if (ele === 2) h = "50%";
                        else h = "25%";
                        return (
                            <div key={idx} className="h-[70px] flex items-center overflow-hidden rounded-xl">
                                <div style={{ height: h }} className={`${color[randomIndex]} w-1 h-full rounded-xl`}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex text-gray-400 justify-between">
                {
                    ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((ele, idx) => <p className="text-xs sm:text-sm" key={idx}>{ele}</p>)
                }
            </div>
        </div>
    );
};

export default ActivityChart;
