export const formatHours = (hours) => {

  if (hours[3] != 0) {
    if (hours[0] == 0) {
      return hours.slice(1, 5) + "h";
    } else {
      return hours.slice(0, 5) + "h";
    }
  } else {
    if (hours[0] == 0) {
      return hours.slice(1, 2) + "h";
    } else {
      return hours.slice(0, 2) + "h";
    }
  }
};

export const scrollBackTop = (e) => {
  window.scrollTo(0, 0);
};
