import * as S from "./TableRows.styled";

export const TableFirstRow = () => (
  <S.RowHeader>
    <S.Cell>Описание</S.Cell>
    <S.Cell>Категория</S.Cell>
    <S.Cell>Дата</S.Cell>
    <S.Cell>Сумма</S.Cell>
  </S.RowHeader>
);

export const TableRow = ({
  description,
  category,
  date,
  amount,
  onEdit,
  onDelete,
  isSelected = false,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onEdit?.();
    }
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete?.();
  };

  return (
    <S.Row
      $isSelected={isSelected}
      onClick={onEdit}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Редактировать расход ${description}`}
    >
      <S.Cell>{description}</S.Cell>
      <S.Cell>{category}</S.Cell>
      <S.Cell>{date}</S.Cell>
      <S.Cell>{amount}</S.Cell>
      <S.Icons>
        <S.IconButton
          type="button"
          $isSelected={isSelected}
          onClick={handleDelete}
          aria-label="Удалить расход"
        >
          <img src="/first-box/mini-bucket.svg" alt="" />
        </S.IconButton>
      </S.Icons>
    </S.Row>
  );
};
