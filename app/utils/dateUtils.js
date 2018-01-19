export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const dayName = [
  'Monday',
  'Tuesday',
  'Wedensday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export const getDisplaybleDate = date => {
  const todayDate = new Date();

  const noteDate = new Date(0);
  noteDate.setUTCSeconds(date);
  let prifix = '';
  let postfix = '';
  if (noteDate.getFullYear() !== todayDate.getFullYear()) {
    prifix = monthNames[noteDate.getMonth()];
  } else if (noteDate.getMonth() !== todayDate.getMonth()) {
    prifix = monthNames[noteDate.getMonth()];
  } else {
    prifix = monthNames[noteDate.getDay()];
  }
  if (noteDate.getHours() > 12) {
    postfix = ' PM';
  } else {
    postfix = ' AM';
  }
  return `${prifix} at ${noteDate.toLocaleTimeString()}${postfix}`;
};
