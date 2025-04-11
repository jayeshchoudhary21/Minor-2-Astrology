import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4 mt-5">
      <Button onClick={prevMonth} variant="outline" size="icon">
        <ChevronLeft className="h-10 w-10" />
      </Button>
      <h2 className="text-[20px] font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
      <Button onClick={nextMonth} variant="outline" size="icon">
        <ChevronRight className="h-10 w-10" />
      </Button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="mt-5 text-[18px] font-medium text-center text-gray-600">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const rows = [];
    let days = [];
    let day = startDate;
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            className={`text-center text-[18px] p-2 cursor-pointer rounded-xl transition-colors duration-200 ${
              !isSameMonth(day, monthStart) ? "text-gray-400" : ""
            } ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}
            key={day.toISOString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-7 mt-5" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="space-y-10">{rows}</div>;
  };
  
  // Don't forget this!
  
  

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <Card className="w-[40vw] h-[35vw] mx-auto mt-10 p-4 shadow-xl rounded-2xl">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </Card>
  );
};

export default Calendar;
