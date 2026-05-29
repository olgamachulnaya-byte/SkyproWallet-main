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

export function truncateString(str) {
  if (str.length > 6) {
    return `${str.slice(0, 6)}...`;
  }
  return str;
}
