let nums = [10,20,30,40,50];
/*
console.log(nums);

console.log(nums[2]);

nums[2] = 60;*/
console.log( nums);

//agregar elemento al final del arreglo
nums.push( 70);
console.log( nums);

nums.pop();
console.log(nums)

nums.unshift(1);
console.log(nums);

nums.shift();
console.log(nums);

nums.splice(3, 0, 35);
console.log(nums);

nums.splice( 2, 1);
console.log(nums);
/*
for ( let i = 0; i < nums.length; i++){
    console.log( nums[i]);
}
*/