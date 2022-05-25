export function formatDate(timestamp) {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(timestamp * 1000);

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes =
    String(date.getMinutes()).length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();

  return `${month}/${day}/${year}, ${hours}:${minutes}`;
}
