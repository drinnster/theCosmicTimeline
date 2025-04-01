import { InfoIcon, SettingsIcon } from "../assets/icons";
import timelineData from "../data/timelineData.json"; // Importing JSON

const Header = ({ selectedCalendar, handleCalendarChange }) => {
  return (
    <header className="bg-deepspaceblue flex items-center justify-between w-full h-[100px] px-6 bg-transparent">
      {/* Left: Logo Placeholder */}
      <div className="text-xl font-bold">🚀 Cosmic Timeline</div>
      {/* Calendar Dropdown */}
      <div className="mb-4">
          <select
            id="calendarSelect"
            value={selectedCalendar}
            onChange={handleCalendarChange}
            className="p-2 px-3 py-3 bg-gray-800 text-white rounded-md pr-8 appearance-none"
          >
            {/* Generate calendar options dynamically */}
            {Object.keys(timelineData).map((calendar) => (
              <option key={calendar} value={calendar}>
                {calendar}
              </option>
            ))}
          </select>
        </div>
      {/* Right: Info and Settings */}
      <div className="flex items-center gap-4">
        {/* About Button */}
        <button className="rounded-full bg-galacticteal px-6 py-2 flex items-center gap-2">
          <InfoIcon />
        </button>
        <button className="rounded-full bg-galacticteal px-6 py-2 flex items-center">
          <SettingsIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;