 const path=require('path')
  
let path1 = path.basename('/home/user/ladsh/read.txt'); //get basename
console.log(path1) 
let path2 = path.basename('/home/user/ladsh/read.txt', '.txt'); 
console.log(path2) 

///
let path3=path.dirname('/home/user/ladsh/read.txt')   //get directory nmae
console.log(path3)
////
let path4=path.extname('/home/user/ladsh/read.txt')   //get extention name
console.log(path4)

paths_array = [ 
    "/home/user/website/index.html", 
    "/home/user/website/style.css", 
    "/home/user/website/bootstrap.css", 
    "/home/user/website/main.js", 
    "/home/user/website/contact_us.html", 
    "/home/user/website/services.js", 
] 
paths_array.forEach((element) => {
    if(path.extname(element)==".js"){
        console.log(element)
    }
});

/////
let path5 = path.format({    //priority: dir>base , root should be ignore if dir & base is given
    root: "/ignored/root/", 
    dir: "/home/user/personal", 
    base: "details.txt", 
}); 
console.log("Path 1:", path5); 
  
let path6 = path.format({     //dir is not given so base is printed
    root: "/", 
    base: "game.dat", 
    ext: ".noextension", 
}); 
console.log("Path 2:", path6); 
   
let path7 = path.format({ 
    root: "/images/", 
    name: "image", 
    ext: ".jpg", 
}); 
console.log("Path 3:", path7); 

let path8 = path.join("users/ladsh/files...", "index.html");  //join paths 
console.log(path8) 
let path9=path.parse(path8)  
console.log(path9)