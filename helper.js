const fs = require('fs');
let details = [];
let detail = {
  topic: "",
  marks: ""
};

module.exports = {
  addDetail: (topic, marks) => {
    detail.topic = topic;
    detail.marks = marks;
    try {
      details = JSON.parse(fs.readFileSync("details.json"));
    } catch (e) {
       console.log("creating a file!!!!");
    }
    details.push(detail);
    fs.writeFileSync("details.json",JSON.stringify(details));
    console.log(details);
    //return "success!!"; //or fail accordingly
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
