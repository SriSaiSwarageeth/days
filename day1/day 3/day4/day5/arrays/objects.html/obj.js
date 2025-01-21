let obj = {
    name : "swarageeth",
    rollno: 671,
    marks : [90,90,90],
    demo : function(){
        console.log("hello")
    }
}
console.log(obj.name,obj.rollno,obj.marks);
obj.demo()


function obj1(name,id){
    this.name = name;
    this.id = id;
}
let oo=new obj1("swarageeth",671)
console.log(oo);
console.log(oo.name);
console.log(oo.id);


