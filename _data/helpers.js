module.exports = {
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  },
  Buildtime() {
    function getCurrentDate(n) {
      return (n < 10 ? "0" : "") + n
    }
    var date = new Date()
    var month = getCurrentDate(date.getMonth() + 1)
    var day = getCurrentDate(date.getDate())
    var year = date.getFullYear()
    var formattedDate = year + "-" + month + "-" + day
    return formattedDate;
  }
};