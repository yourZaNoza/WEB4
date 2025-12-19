// src/utils/dateUtils.js

// Преобразует UTC-время из БД в строку для <input type="datetime-local">
export const utcToInputValue = (utcString) => {
  if (!utcString) return "";
  const date = new Date(utcString);
  const offset = date.getTimezoneOffset() * 60000;
  const localTime = new Date(date.getTime() + offset);
  return localTime.toISOString().slice(0, 16);
};

// Преобразует значение из input в UTC для отправки на сервер
export const inputToUtc = (inputValue) => {
  if (!inputValue) return null;
  const date = new Date(inputValue + ":00");
  return date.toISOString();
};
