const helper = require('./helper');
const yargs = require('yargs');
const args = yargs.argv;

let command = args._[0];

switch (command) {

  case ('addDetail'):
    helper.addDetail(args.topic,args.marks);
    break;

  case ('showDetails'):
    //logic
    break;

  case ('searchDetail'):
    //logic
    break;

  default:
    console.log("wrong command");

}
