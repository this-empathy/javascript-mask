import numberM from "./number";

export default (value) => {
  value = numberM(value).toString();
  value = value.replace(/(\d{4})(\d)/, "$1-$2");
  return value;
};
