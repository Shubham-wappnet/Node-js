//buf.write(string,offset,lenght,encoding)
var nbuf=Buffer.alloc(26);

var nbuflength=nbuf.write("welocome to nodejs");         
console.log("required octets for msg" + nbuflength);

let j;
for(let i=65,j=0;i<90,j<26;i++,j++){      
    nbuf[j]=i;
}
console.log(nbuf.toString('utf-8',0,10))   //print 0-index to 10-index

let buf2=Buffer.from("Shubham");      //copy from one-buffer to other-buffer
let buf1=Buffer.alloc(13);
for(let i=0;i<10;i++){
    buf1[i]=i+97;
    buf1[i]=i+65;
}
buf1.copy(buf2,3)
console.log(buf2.toString());
console.log(buf2.includes("huA"));    //search element

let buf3=Buffer.from("Lad");
console.log(Buffer.compare(buf2,buf3));  //compare buf2 with buf3
console.log(Buffer.compare(buf3,buf2));  //compare buf3 with buf2

console.log(buf2.equals(buf3)); 
//let buf4=buf2.subarray(2,8);
let buf4=buf2.subarray(-2,8);
//let buf4=buf2.subarray(-2,-8);
console.log("suabarray is " + buf4);

const buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]); 
  console.log(buff.readIntBE(0, 6).toString(16)); 
  //console.log(buff.readIntBE(3, 0).toString(16)); 
// const output1=buf2.indexof("Shubham")
// console.log(output1);

const buffer = Buffer.from('shubham'); 
   
for (const value of buffer.values()) {   //print ascii value
  console.log(value); 
} 

const buffer2 = Buffer.from('SHUBHAM');   //print ascii value
for (const value of buffer2.values()) { 
  console.log(value); 
}  
 
var obj = Buffer.compare(buffer, buffer2); 
console.log(obj); 