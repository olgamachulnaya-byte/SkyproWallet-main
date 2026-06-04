import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { textSizes } from "../../const";

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 27px;
  scrollbar-width: thin;
  scrollbar-color: #C7C7C7 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #C7C7C7;
  }
`;

export const Calendar = styled(DayPicker)`
  --rdp-day-height: 40px;
  --rdp-day-width: 40px;
  --rdp-day_button-height: 40px;
  --rdp-day_button-width: 40px;
  --rdp-cell-width: 40px;
  --rdp-accent-color: #F1EBFD;
  --rdp-range_start-color: #7334EA;
  --rdp-range_middle-background-color: #F1EBFD;
  --rdp-weekday-padding: 0;
  --rdp-months-gap: 0;
  --rdp-day_button-border: none;
  margin: 0;

  .rdp-months {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .rdp-month {
    width: 100%;
  }

  .rdp-month_caption {
    height: auto;
    padding: 0 0 16px;
  }

  .rdp-caption_label {
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
  }

  .rdp-weekdays,
  .rdp-nav {
    display: none;
  }

  .rdp-month_grid {
    border-collapse: separate;
    border-spacing: 5px 6px;
    margin-left: -5px;
  }

  .rdp-day,
  .rdp-day_button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .rdp-day_button {
    border: none;
    background: #F4F5F6;
    color: #000000;
    font-size: ${textSizes.small.fontSize};
    font-weight: ${textSizes.small.fontWeight};
    line-height: 100%;
  }

  .my-selected .rdp-day_button,
  .my-range-middle .rdp-day_button {
    background: #F1EBFD;
    color: #7334EA;
  }

  .my-today .rdp-day_button {
    color: #7334EA;
    font-weight: ${textSizes.medium.fontWeight};
  }

  .rdp-day_disabled .rdp-day_button {
    opacity: 0.35;
  }
`;
