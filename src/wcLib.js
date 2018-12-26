const wc = function(userInput, fs) {
  let fileContents = fs.readFileSync(userInput[0], "utf8");
  let lines = fileContents.split("\n").length;
  let words = fileContents
    .split("\n")
    .join(" ")
    .split(/ +/).length;
  let characters = fileContents.split("").length;
  let spaces = "      ";
  return (
    spaces + lines + spaces + words + spaces + characters + " " + userInput
  );
};

module.exports = {
  wc
};
