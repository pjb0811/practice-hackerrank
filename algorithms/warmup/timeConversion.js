function timeConversion(s) {
  let [hour, minute, second] = s.split(':');
  let meridiem = '';
  hour = parseInt(hour, 10);
  second = second.replace(/([a-z]+)/ig, (match) => {
    meridiem = match;
    return '';
  });

  return new Date(0, 0, 0,
    meridiem === 'PM' ?
      (hour < 12 ? hour + 12 : hour) :
      (hour >= 12 ? hour - 12 : hour),
    minute, second)
    .toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

console.log(timeConversion('12:45:54PM'));