import { formatNumber } from "../utils/format";

const Timeline = ({ selectedCalendar, timelineData }) => {
    // Filter the events based on the selected calendar
    const events = timelineData[selectedCalendar]; // This will get events for the selected calendar
  
    // Function to format Traditional Year as BCE/CE
    const formatTraditionalYear = (year: number): string => {
      return year > 0 ? `${formatNumber(year)} CE` : `${formatNumber(Math.abs(year))} BCE`;
    };
  
    return (
      <main className="Content bg-deepspaceblue text-supernovawhite p-6 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          {/* Header Row */}
          <div className="bg-deepspaceblue grid grid-cols-3 border-b-2 border-gray-500 pb-2 font-bold text-lg">
            <div className="text-left">Event Name</div>
            <div className="text-left">Traditional Year</div>
            <div className="text-left">Years Ago</div>
          </div>
  
          {/* Data Rows */}
          {events.map((event, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 items-center px-3 py-3 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
            >
              <div className="text-left">{event.event}</div>
              <div className="text-left">{event.traditionalYear || "N/A"}</div>
              <div className="text-left">{formatNumber(event.yearsAgo)} years ago</div>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default Timeline;