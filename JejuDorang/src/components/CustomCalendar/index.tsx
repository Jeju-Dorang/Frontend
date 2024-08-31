import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './index.css';

const CustomCalendar = () => {
  return (
    <Calendar
      tileContent={({ date, view }) =>
        view === 'month' ? (
          <div className="w-8 h-8 bg-gray-lg mx-auto rounded-[5px] flex items-center justify-center hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300">
            {date.getDate()}
          </div>
        ) : null
      }
      formatDay={() => ''}
      calendarType="gregory"
      view="month"
      prev2Label={null}
      next2Label={null}
      showNeighboringMonth={false}
      className="custom-calendar mb-[30px] ml-[45px]"
      tileDisabled={() => true}
    />
  );
};

export default CustomCalendar;
