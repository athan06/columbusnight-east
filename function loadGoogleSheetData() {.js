function loadGoogleSheetData() {
 gapi.client.setApiKey('YOUR_API_KEY');
 gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
    .then(function() {
      return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1:C10'
      });
    }, function(error) {
      console.log('Error loading Google Sheets API:', error);
    })
    .then(function(response) {
      var range = response.result;
      if (range.values.length > 0) {
        for (var i = 0; i < range.values.length; i++) {
          var row = range.values[i];
          console.log('Row:', row);
        }
      } else {
        console.log('No data found.');
      }
    }, function(error) {
      console.log('Error loading data:', error);
    });
}