var arr1:number[] = [10,20,30,40,50];
console.log(arr1);

var arr2 : Array<number> = [60,70,70];
console.log(arr2);

arr1.forEach((element:number, index:number)=>{
    console.log(element, arr2[index]);
});


var obj : any = {
    "sub_one"  : "ReactJS",
    "sub_two"  : "Node_js",
    "sub_three" : "MongoDB"
} 

console.log(obj.sub_one, obj.sub_two, obj.sub_three);