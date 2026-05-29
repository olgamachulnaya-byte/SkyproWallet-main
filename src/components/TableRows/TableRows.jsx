import * as S from "./TableRows.styled";

export const TableFirstRow = () => (
  <S.RowHeader>
    <S.Cell>Описание</S.Cell>
    <S.Cell>Категория</S.Cell>
    <S.Cell>Дата</S.Cell>
    <S.Cell>Сумма</S.Cell>
  </S.RowHeader>
);

export const TableRow = ({ description, category, date, amount, isSelected = false }) => {
  return (
    <S.Row $isSelected={isSelected}>
      <S.Cell>{description}</S.Cell>
      <S.Cell>{category}</S.Cell>
      <S.Cell>{date}</S.Cell>
      <S.Cell>{amount}</S.Cell>
      <S.Icons>
        <S.IconButton
          type="button"
          $isSelected={isSelected}
          disabled
          aria-label="Удаление будет подключено позже"
        >
          <img src="/first-box/mini-bucket.svg" alt="" />
        </S.IconButton>
      </S.Icons>
    </S.Row>
  );
};
