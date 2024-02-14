// Unzip(buffer,option,callback)

/// compress()- is used to compress the data in a single call
const zlib=require('zlib')
const fs=require('fs')

zlib.gzip('Shubham Lad',function(err,data){
    if(err){
        return console.log('err' ,err)
    }
    const unzip=zlib.createUnzip();
    unzip.write(data)
    unzip.on('data',function(data){
        console.log(data.toString());
        console.log(data.toString('base64'));    //also can be done using createInflateRaw()
        console.log(data.toString('hex'));       //also can be done using createInflateRaw() 
        
    });
});

/////
// deflate()- is used to compress data a chunk at a time
const inp = fs.createReadStream('input.txt'); 
const out = fs.createWriteStream('input.txt.gz'); 
const defr = zlib.createDeflateRaw(); 
  
inp.pipe(defr).pipe(out);         //piping
//inp.pipe(out).pipe(defr);       //shows error - piping order is necessary       
console.log("Program Completed!");  

////
const input = zlib.createGzip();    // has limitation in compressing 2:1 or 3:1
const output = zlib.createGunzip();  //can compressed data which is already compressed by gzip
input.pipe(output); 
   
input.write('fdjnhbgmrtnhjjerjkgjrk;e2gtrjkgkrj'); 
   
input.flush(); 
//input.close();
 
output.on('data', (d) => { 
    console.log('Input: Data flush received '
                + d.length + ' bytes'); 
}); 
console.log("Closed!"); 