const fs=require("fs");
const path=require("path");

     ///Synchronous fs
fs.writeFileSync("read.text","Welcome to server");
fs.writeFileSync("read.text","Hello, I am Shubham welcome to server $$ ");  //print new msg always
fs.appendFileSync("read.text","how are you? $$");

const buf_data=fs.readFileSync("read.text")   //print buffer data
console.log(buf_data)

const read=buf_data.toString();        //convert buffer data into string
console.log(read)

fs.renameSync("read.text","read1.text")


     ///Asynchronous fs
fs.writeFile("read2.text","Node is awesome " ,(err)=>{
  console.log("file is created")
  console.log(err)
})
fs.appendFile("read2.text"," ,gives many functionalities",(err)=>{
    console.log("task completed")
    console.log(err)
});

////
fs.readFile("read2.text",(err,data)=>{    //print buffer data
   console.log(data)
})
fs.readFile("read2.text","utf-8",(err,data)=>{
    console.log(data)
    console.log(err)
 })
//  fs.exists('read2.text', (exi) => { 
//     console.log(exi ? 'Found' : 'Not found!'); 
// });


//
fs.access('read2.text', fs.constants.F_OK, (exi) => {   //check file is ,present or not
    if (exi) {
        console.log('Not found!');
    } else {
        console.log('Found');
    }
});


////
fs.mkdir(path.join(__dirname, 'test'),
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

   

