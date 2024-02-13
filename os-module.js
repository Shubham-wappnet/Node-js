//  It provides the hostname of the operating system and returns the amount of free system memory 
// in bytes. 

const os=require('os');

console.log("CPU architecture: " + os.arch());
console.log("Free memory: " + os.freemem());
console.log("Total memory: " + os.totalmem());
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log('OS default directory for temp files : ' + os.tmpdir());

console.log("Endianness of system: " + os.endianness());
console.log("Hostname: " + os.hostname());
console.log("Operating system name: " + os.type());
console.log('operating system platform: ' + os.platform());
console.log('OS release : ' + os.release());
console.log("cpu info is :" + os.cpus());

try {
    console.log(os.userInfo());    //get user info
} catch (err) {
    console.log(": error occurred" + err);
}

let version = os.version(); 
console.log("OS Version:", version); 