export const getSelectedBackground = (isSelected) =>
  isSelected ? "#F1EBFD" : "#F4F5F6";

export const getSelectedColor = (isSelected) =>
  isSelected ? "#7334EA" : "#000000";

export const getImageFilter = (isSelected) =>
  isSelected
    ? "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(3021%) hue-rotate(252deg) brightness(95%) contrast(95%)"
    : "brightness(0) saturate(100%)";
