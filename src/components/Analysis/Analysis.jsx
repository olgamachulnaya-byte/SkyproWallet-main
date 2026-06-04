import { useState, useEffect, useCallback, useContext, useMemo } from "react";
import Diagram from "../Diagram/Diagram";
import Calendar from "../Calendar/Calendar";
import CalendarMonth from "../CalendarMonth/CalendarMonth";
import * as S from "./Analysis.styled";
import { sortByCategorie } from "../../utils/utils";
import { ExpenseContext } from "../../context/ExpenseContext";

function Analysis() {
  const { expenses } = useContext(ExpenseContext);

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [filter, setMode] = useState(true);
  const [period, setPeriod] = useState("все время");
  const [diagramData, setDiagramData] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [showCalendarMobile, setShowCalendarMobile] = useState(false);
  const [isDefaultRangeApplied, setIsDefaultRangeApplied] = useState(false);

  const expenseDates = useMemo(
    () => expenses.map((item) => new Date(item.date)).filter((date) => !Number.isNaN(date.getTime())),
    [expenses]
  );

  const calendarYear = expenseDates.length
    ? Math.min(...expenseDates.map((date) => date.getFullYear()))
    : new Date().getFullYear();

  const initialRange = useMemo(() => {
    if (!expenseDates.length) return undefined;

    const end = new Date(Math.max(...expenseDates.map((date) => date.getTime())));
    const start = new Date(end);
    start.setDate(end.getDate() - 6);

    return { from: start, to: end };
  }, [expenseDates]);

  const formatPeriod = (start, end) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const startStr = start.toLocaleDateString("ru-RU", options);
    const endStr = end.toLocaleDateString("ru-RU", options);

    if (start.toDateString() === end.toDateString()) {
      return startStr;
    }

    return `${startStr} — ${endStr}`;
  };

  const handleRangeChange = useCallback(
    (range) => {
      if (!range?.start || !range?.end) return;

      const startDate = new Date(range.start);
      const endDate = new Date(range.end);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);

      const filtered = expenses.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });

      setPeriod(formatPeriod(startDate, endDate));
      setDiagramData(sortByCategorie(filtered));
      setIsDefaultRangeApplied(true);
    },
    [expenses]
  );

  useEffect(() => {
    if (expenses?.length > 0 && !isDefaultRangeApplied && initialRange) {
      handleRangeChange({ start: initialRange.from, end: initialRange.to });
    }
  }, [expenses, handleRangeChange, initialRange, isDefaultRangeApplied]);

  useEffect(() => {
    if (!expenses?.length) {
      setDiagramData(sortByCategorie([]));
    }
  }, [expenses]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 474);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Analysis>
      <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>
      <S.AnalysisExspenseContainer>
        {(!isMobile || showCalendarMobile) && (
          <S.AnalysisCalendarContainer>
            <S.CalendarHeaderContainer>
              <S.CalendarHeader>
                <S.CalendarHeaderTitle>Период</S.CalendarHeaderTitle>
                <S.CalendarFilterLinks>
                  <S.CalendarNavLink
                    type="button"
                    $active={filter}
                    onClick={() => setMode(true)}
                  >
                    День
                  </S.CalendarNavLink>
                  <S.CalendarNavLink
                    type="button"
                    $active={!filter}
                    onClick={() => setMode(false)}
                  >
                    Месяц
                  </S.CalendarNavLink>
                </S.CalendarFilterLinks>
              </S.CalendarHeader>
              {filter && (
                <S.CalendarWeekDays>
                  {daysOfWeek.map((day) => (
                    <S.CalendarWeekDayBlock key={day}>
                      <S.CalendarWeekDay>{day.toLowerCase()}</S.CalendarWeekDay>
                    </S.CalendarWeekDayBlock>
                  ))}
                </S.CalendarWeekDays>
              )}
            </S.CalendarHeaderContainer>

            <S.CalendarBody>
              {filter ? (
                <Calendar
                  onRangeChange={handleRangeChange}
                  initialRange={initialRange}
                  calendarYear={calendarYear}
                />
              ) : (
                <CalendarMonth onRangeChange={handleRangeChange} calendarYear={calendarYear} />
              )}
            </S.CalendarBody>
          </S.AnalysisCalendarContainer>
        )}

        {(!isMobile || !showCalendarMobile) && (
          <S.AnalysisTableContainer>
            <Diagram diagramData={diagramData} period={period} />
          </S.AnalysisTableContainer>
        )}
      </S.AnalysisExspenseContainer>

      {isMobile && (
        <S.PeriodButtonBlock>
          <S.PeriodButton type="button" onClick={() => setShowCalendarMobile((prev) => !prev)}>
            {showCalendarMobile ? "Выбрать период" : "Выбрать другой период"}
          </S.PeriodButton>
        </S.PeriodButtonBlock>
      )}
    </S.Analysis>
  );
}

export default Analysis;
