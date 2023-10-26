function formatAsSecondsAsString(sec) {
  minute = Math.floor(sec / 60);
  remainedSecond = sec % 60;
  remianedMinute = minute % 60;
  //remainedHour=Math.floor(minute/60);
  //return arr=[remainedSecond,minute,remianedMinute,remainedHour];
  if (sec < 60) {
    return `${remainedSecond} second`;
  } else {
    return `  ${minute} minute ${remainedSecond} second`;
  }
}
console.log(formatAsSecondsAsString(390));

console.log(formatAsSecondsAsString(6327894));
module.exports = formatAsSecondsAsString;
