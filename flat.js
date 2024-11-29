Array.prototype.flat = function (depth=1){
    let arr = [];
    for(let i of this){
        if(Array.isArray(i) && depth > 0){
             arr = arr.concat(i.flat(depth-1))
        }else {
            arr.push(i);
        }
    }
    return arr;
}

let arr = [1, 2, [3, [4, 5]]];
console.log(arr.flat(2))