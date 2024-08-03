module.exports = function reverse(n) {
   let res = 0;
   if (n < 0) {
      res = Math.abs(n);
      return Number(res.toString().split("").reverse().join(""));
   } else {
      return Number(n.toString().split("").reverse().join(""));
   }
}

