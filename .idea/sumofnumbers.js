const arr = [1,2,3,4,5];

function sumFor(nums){
  let total = 0;
  for(let i = 0; i<nums.length; i++){
    total += nums[i];
  }
  return total;
}

console.log(sumFor(arr));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while(i<nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(arr));

function sumRecursion(nums){
  if(nums.length == 0)
    return 0;
  else{
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
}

console.log(sumRecursion(arr));

function sumTheSimpleWay(nums){
  var total = _.reduce(nums, function(memo, num){ return memo + num; }, 0);
  return total;
}

console.log(sumTheSimpleWay(arr));