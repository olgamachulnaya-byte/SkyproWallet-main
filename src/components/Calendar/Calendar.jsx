import { useEffect, useState } from "react";
import { ru } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";
import * as S from "./Calendar.styled";

export default function Calendar({ onRangeChange, initialRange, calendarYear }) {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  useEffect(() => {
    if (initialRange?.from && initialRange?.to && !range.from && !range.to) {
      setRange(initialRange);
    }
  }, [initialRange, range.from, range.to]);

  const handleSelect = (selectedRange) => {
    if (!selectedRange?.from) return;

    if (!selectedRange.to) {
      setRange({ from: selectedRange.from, to: selectedRange.from });
    } else {
      setRange(selectedRange);
    }
  };

  useEffect(() => {
    if (range.from && range.to) {
      onRangeChange?.({ start: range.from, end: range.to });
    }
  }, [range, onRangeChange]);

  const year = calendarYear || new Date().getFullYear();

  return (
    <S.CalendarContainer>
      <S.Calendar
        mode="range"
        selected={range}
        onSelect={handleSelect}
        numberOfMonths={12}
        locale={ru}
        defaultMonth={new Date(year, 0)}
        month={new Date(year, 0)}
        pagedNavigation={false}
        disabled={{
          before: new Date(year, 0, 1),
          after: new Date(year, 11, 31),
        }}
        formatters={{
          formatMonthCaption: (date) =>
            date
              .toLocaleDateString("ru-RU", {
                month: "long",
                year: "numeric",
              })
              .replace(/^./, (char) => char.toUpperCase()),
        }}
        classNames={{
          day_selected: "my-selected",
          day_range_middle: "my-range-middle",
          day_today: "my-today",
        }}
        modifiersClassNames={{
          selected: "my-selected",
          range_middle: "my-range-middle",
          range_start: "my-selected",
          range_end: "my-selected",
          today: "my-today",
        }}
      />
    </S.CalendarContainer>
  );
}
