var arr1 = [10, 20, 30, 40, 50];
console.log(arr1);
var arr2 = [60, 70, 70];
console.log(arr2);
arr1.forEach(function (element, index) {
    console.log(element, arr2[index]);
});
var obj = {
    "sub_one": "ReactJS",
    "sub_two": "Node_js",
    "sub_three": "MongoDB"
};
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
