function myFunction() {
  var file =  SpreadsheetApp.openById("1B3lyhJxwFfE0Dakri0yOuhlVFVTzKzAD_Q8Dd_ZLMec");
  var sheet = file.getSheetByName("Bday");
  var date = Utilities.formatDate(new Date(), "GMT+5:30", "MM/dd")
  var year = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy")
  var rangeData = sheet.getDataRange();
  var lastRow = rangeData.getLastRow();
  var searchRange = sheet.getRange(1,1, lastRow-1, 3);
  for ( i = 1; i < lastRow; i++) {
    var cell = searchRange.getCell(i,2).getValue();
    var dt = cell.substring(0,5)
    if ( dt === date) {
      var yr = cell.substring(6,10)
      var age = (year - parseInt(yr,10).toFixed(0))+1;
      var email = searchRange.getCell(i,3).getValue();
      var subject = "Happy Birthday";
      var name = searchRange.getCell(i,1).getValue();
      var body = "Hi "+name+"! \n\tHappy "+age+". Wishing you a day filled with happiness and a year filled with joy. Happy birthday! Sending you smiles for every moment of your special day… Have a wonderful time and a very happy birthday!\n\nRegards\nAswin N";
      GmailApp.sendEmail(email, subject, body);
    }
  }  
}
