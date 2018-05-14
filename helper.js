const fs = require('fs');
let details = [];
let detail = {
  topic: "",
  marks: ""
};

module.exports = {
  addDetail: (topic,marks) => {
    //logic to store data in details and then with the help of fs write into file
    return "success!!"; //or fail accordingly
  },

  showDetails: () => {
    //logic to pull data from details.json and storting it in details array and the returning it
    return details;
  },

  searchDetail: (topic) => {
    //logic to fetch all data from detail.json and then returning the data asked
    return detail;
  }

}
