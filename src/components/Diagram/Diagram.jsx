import { useEffect, useMemo, useState } from "react";
import * as S from "./Diagram.styled";
import { truncateString } from "../../utils/utils";

const categories = [
  { name: "Еда", latinName: "food", color: "#D9B6FF" },
  { name: "Транспорт", latinName: "transport", color: "#FFB53D" },
  { name: "Жилье", latinName: "housing", color: "#6EE4FE" },
  { name: "Развлечения", latinName: "joy", color: "#B0AEFF" },
  { name: "Образование", latinName: "education", color: "#BCEC30" },
  { name: "Другое", latinName: "others", color: "#FFB9B8" },
];

const formatCurrency = (value) => `${Number(value || 0).toLocaleString("ru-RU")} ₽`;

export default function Diagram({ diagramData, period }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 474);

  const expenses = useMemo(
    () =>
      categories.map((item) => ({
        ...item,
        value: Number(diagramData?.[item.latinName] || 0),
      })),
    [diagramData]
  );

  const max = Math.max(...expenses.map((item) => item.value), 0);
  const totalSum = expenses.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 474);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Wrapper>
      <S.Total>
        <S.TotalAmount>{formatCurrency(totalSum)}</S.TotalAmount>
        <S.Subtext>
          Расходы за <S.SubtextSpan>{period}</S.SubtextSpan>
        </S.Subtext>
      </S.Total>

      <S.Chart>
        {expenses.map(({ name, value, color }) => (
          <S.BarBlock key={name}>
            <S.ValueText>{formatCurrency(value)}</S.ValueText>
            <S.Bar
              $height={max > 0 ? (value / max) * 100 : 0}
              style={{ backgroundColor: color }}
            />
            <S.Label>{isMobile ? truncateString(name) : name}</S.Label>
          </S.BarBlock>
        ))}
      </S.Chart>
    </S.Wrapper>
  );
}
