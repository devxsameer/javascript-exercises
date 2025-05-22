const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const editedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");

  const reversedStr = editedStr.split("").reverse().join("");
  return reversedStr === editedStr;
};

// Do not edit below this line
module.exports = palindromes;
