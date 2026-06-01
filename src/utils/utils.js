export function checkLs() {
  try {
    const data = window.localStorage.getItem("userInfo");
    if (!data) return null;

    const parsed = JSON.parse(data);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof parsed.name === "string" &&
      typeof parsed.token === "string"
    ) {
      return parsed;
    }

    console.warn("Некорректная структура данных в localStorage");
    return null;
  } catch (error) {
    console.error("Ошибка при парсинге localStorage userInfo:", error);
    return null;
  }
}

export const sortByCategorie = (data) => {
  const initialData = {
    food: 0,
    transport: 0,
    housing: 0,
    joy: 0,
    education: 0,
    others: 0,
  };

  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }

    acc[item.category] += Number(item.sum) || 0;
    return acc;
  }, initialData);
};

export const formatedDate = (dateString) => {
  if (!dateString) return "";

  if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateString)) {
    return dateString;
  }

  const shortServerDate = String(dateString).match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (shortServerDate) {
    const [, month, day, year] = shortServerDate;
    return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`;
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return String(dateString);
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const formatedInputDate = (dateString) => {
  const [day, month, year] = dateString.split(".");
  return `${Number(month)}-${Number(day)}-${year}`;
};

export function truncateString(str) {
  if (str.length > 6) {
    return `${str.slice(0, 6)}...`;
  }
  return str;
}
