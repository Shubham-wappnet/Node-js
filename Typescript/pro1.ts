let greetings:string="hello,good morning"
console.log(greetings)

function funA(num1:number):number{
     return num1*2;
    
}
function funB(str1:string):string{
    return str1.toUpperCase()
}
console.log(funA(4));
console.log(funB("hfelbel"));

const hello=(s:string):string=>{
    return "hi";
}
function getvalue(ele:number){
    if(ele>10){
        return 'it is a number'
    }
    else{
        return 'it is Nan';
    }
}
console.log(getvalue(13));

const login=(name:string,password:number,islogin:boolean):string=>{
    return "user is found"
}

console.log(login("shubham",1234,false))

const heros=['thor','ironman','spiderman',1]
heros.map(hero=>{
     return `my favourite is ${hero}`
})
console.log(heros)

const user={
    name:"Shubham",
    email:"lad123@gmail.com",
    isLogged:true
}
//function details({name:string,isLogged:boolean}){}--not acceptable

// object call into function
function details():{name:string,email:string,isLogged:boolean}{
    return {name:"hdfj",email:"hnnajn@gmail.com",isLogged:true}
}
console.log(details());

// type - is a keyowrd
type Point = {
    x: number;
    y: number;
    z:string;
  };
  
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
     console.log("The coordinate's z value is " + pt.z);
  }
  
  printCoord({ x: 10, 
               y: 100,
               z:"hello"
            })
const enum CardinalDirections {
    top = 'North-dir',
    right = "East-dir",
    down= "South-dir",
    left = "West-dir"
};
console.log(CardinalDirections.top);
console.log(CardinalDirections.left);
const choice=CardinalDirections.right
console.log(choice)

// interface 
interface User{
    readonly id:number,
    name:string,
    email:string,
    //getInfo(dept:string,desg:string):string
}
const Shubham:User={id:101,name:"Lad",email:"sh@gmail.com"}
Shubham.email="lad@gmail.com";
// Shubham.getInfo:(dept:"software",desg:"trainee")=>{
//     return "found"
// }
console.log(Shubham)

// simple inheritance
interface Post extends User{
    dept:string,
    desg:string
}
const Dhyey:Post={id:102,name:"Dhyey",email:"bhagat02@gmail.com",dept:"chemical",desg:"trainee"}
console.log(Dhyey)


// multilevel inheritance
interface Like extends Post{
    view:number
}
const Mihir:Like={id:103,name:"Mihir",email:"mihir@gmail.com",dept:"chemical",desg:"trainee",view:50}
console.log(Mihir)


// type Window = {    duplicate window identifier
//     title: string;
//   }                    
  
//   type Window = {
//     ts: TypeScriptAPI;
//   }

class Person {
    public name: string;
    private email:string;
    public readonly id:number;
  
    public constructor(name: string,email:string,id:number) {
      this.name = name;
      this.email=email;
      this.id=id;
    }
  
    public getName(): string {
      return this.name;
    }
    public getEmail():string{
        return this.email;
    }
    public getId():number{
        return this.id;
    }
  }
  
  const p1 = new Person("feb","adc@gmail.com",100);
  p1.name="march"
  // p1.email="xyz@gmial.com"  can't access bcz email scope is private
  // p1.id=102                 can't access bcz email scope is public but readonly
  console.log(p1.getName()); 
  console.log(p1.getEmail());
  console.log(p1.getId());

// multilevel inheritance
interface Shape{
    countArea:()=>number;
}
class Triangle implements Shape{
      public constructor(protected base:number,protected height:number){}
      public countArea() :number{
             return this.base*this.height*0.5;
       };
}
class Area extends Triangle{
    public constructor(base:number,height:number){
        super(base,height);
    }
    public countArea(): number {
        return super.countArea()
    }
}
const A1=new Area(8,6);
console.log(A1.countArea());


// abstract class
abstract class Cube{
   public abstract getVolume():number
}
class Volume extends Cube{
     public constructor(protected length:number){
     super();
    }
    public getVolume(): number {
       return this.length*this.length*this.length;
    }
}
const V1=new Volume(5);
console.log(V1.getVolume());


export {}