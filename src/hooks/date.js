export const date = () => {
  let d = new Date(),
    day = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${day}/${month}/${year}`;
};
