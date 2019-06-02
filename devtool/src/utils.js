import _ from "lodash";

export const formatTime = time => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
export const handleString = str => {
  // console.log(_.join(str)
   return _.join(["Hello", str], " ");
};
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
