import AddEventButton from "./calendar/AddEventButton";
import { FC, useEffect, useState } from "react";

interface UI {
  date: Date;
}

const Calendar: FC<UI> = (props) => {
  const date = props.date;
  const [month, setMonth] = useState(date.getMonth());

  const changeMonth = (changeMonthBy: number) => {
    date.setMonth(month + changeMonthBy);
    setMonth(date.getMonth());
  };

  const renderCalendar = (): number[][] => {
    date.setDate(1);
    const days: number[][] = [];

    for (let i = 0; i < 6; i++) {
      const items: number[] = [];
      for (let j = 0; j < 7; j++) {
        if (date.getDay() === j && j < date.getDate()) {
          items.push(date.getDate());
          if (date.getMonth() == month) {
            date.setDate(date.getDate() + 1);
          } else {
            date.setMonth(month, 1);
          }
        }
      }
      days.push(items);
    }
    console.log(days);
    return days;
  };
  useEffect(() => {
    console.log(date);
  }, [month]);

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              <button type="button" onClick={() => changeMonth(-1)}>
                Prev
              </button>
            </th>
            <th>{date.getFullYear()}</th>
            <th colSpan={2}>{date.getMonth()}</th>
            <th colSpan={2}>
              {
                <button type="button" onClick={() => changeMonth(1)}>
                  Next
                </button>
              }
            </th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wen</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendar()?.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((value, index) => {
                  return <td key={index}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <AddEventButton />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Calendar;
