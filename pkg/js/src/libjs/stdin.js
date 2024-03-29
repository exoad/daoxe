// Software created by Jack Meng (AKA exoad). Licensed by the included "LICENSE" file. If this file is not found, the project is fully copyrighted.

module.exports = function (fn) {
  var buf = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", function (s) {
    buf += s;
  });
  process.stdin
    .on("end", function () {
      fn(buf);
    })
    .resume();
};
