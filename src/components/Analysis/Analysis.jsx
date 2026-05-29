import Diagram from "../Diagram/Diagram";
import * as S from "./Analysis.styled";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const mockDiagramData = {
  food: 4580,
  transport: 1244,
  housing: 30000,
  joy: 2200,
  education: 7000,
  others: 1200,
};

const calendarDays = [
  "", "", "", "", "", 1, 2,
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
  31,
];

function Analysis() {
  return (
    <S.Analysis>
      <S.AnalysisHeader>Анализ расходов</S.AnalysisHeader>
      <S.AnalysisExspenseContainer>
        <S.AnalysisCalendarContainer>
          <S.CalendarHeaderContainer>
            <S.CalendarHeader>
              <S.CalendarHeaderTitle>Период</S.CalendarHeaderTitle>
            </S.CalendarHeader>
            <S.CalendarWeekDays>
              {daysOfWeek.map((day) => (
                <S.CalendarWeekDayBlock key={day}>
                  <S.CalendarWeekDay>{day.toLowerCase()}</S.CalendarWeekDay>
                </S.CalendarWeekDayBlock>
              ))}
            </S.CalendarWeekDays>
          </S.CalendarHeaderContainer>

          <S.CalendarBody>
            <div style={{ paddingRight: 32 }}>
              <p
                style={{
                  margin: "0 0 16px",
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "100%",
                }}
              >
                Март 2026
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 40px)",
                  gap: "6px 5px",
                }}
              >
                {calendarDays.map((day, index) => (
                  <span
                    key={`${day}-${index}`}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: day ? "#F4F5F6" : "transparent",
                      color: day === 12 || day === 13 ? "#7334EA" : "#000000",
                      fontSize: 12,
                      fontWeight: day === 12 || day === 13 ? 600 : 400,
                    }}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </S.CalendarBody>
        </S.AnalysisCalendarContainer>

        <S.AnalysisTableContainer>
          <Diagram diagramData={mockDiagramData} period="март 2026" />
        </S.AnalysisTableContainer>
      </S.AnalysisExspenseContainer>
    </S.Analysis>
  );
}

export default Analysis;
