import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import Calendar from 'react-calendar';
import { getStreaks } from '@apis/diary';
import { Streak } from '@type/streak';

const CustomCalendar = () => {
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchStreaks(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }, [currentDate]);

  const fetchStreaks = async (year: number, month: number) => {
    const data = await getStreaks(year, month);
    if (data) {
      setStreaks(data);
    }
  };

  const getStreakColor = (count: number) => {
    if (count === 0) return 'bg-gray-lg';
    return 'bg-primary-orange';
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const streak = streaks.find(
        (s) => new Date(s.date).toDateString() === date.toDateString(),
      );
      const count = streak ? streak.count : 0;
      const colorClass = getStreakColor(count);

      return (
        <div
          className={`w-8 h-8 ${colorClass} mx-auto rounded-[5px] flex items-center justify-center hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-300`}
          style={count > 0 ? { opacity: Math.min(0.3 + count * 0.15, 1) } : {}}
        >
          {date.getDate()}
        </div>
      );
    }
    return null;
  };

  const onActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date | null;
  }) => {
    if (activeStartDate) {
      setCurrentDate(activeStartDate);
    }
  };

  return (
    <Calendar
      tileContent={tileContent}
      formatDay={() => ''}
      calendarType="gregory"
      view="month"
      prev2Label={null}
      next2Label={null}
      showNeighboringMonth={false}
      className="custom-calendar mb-[30px] ml-[45px]"
      tileDisabled={() => true}
      onActiveStartDateChange={onActiveStartDateChange}
    />
  );
};

export default CustomCalendar;
