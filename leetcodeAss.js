// 1. https://leetcode.com/problems/truncate-sentence/submissions/915331746/

var truncateSentence = function(s, k) {   
    return s.split(' ').slice(0, k).join(' ')
   };

// 2. https://leetcode.com/problems/length-of-last-word/submissions/915408615/
var lengthOfLastWord = function(s) {
    y = s.trim().split(' ')
    return y[y.length - 1].length
   };

//3. https://leetcode.com/problems/majority-element/submissions/915432438/

var majorityElement = function(nums) {
    nums.sort()
    y = Math.floor((nums.length-1)/2)
    return nums[y]

// 4. https://leetcode.com/problems/perfect-number/submissions/915354822/
var checkPerfectNumber = function(num) {
    let  x = 0;
    for (let i=1; i<=num/2; i++){
       if (num%i === 0) { x+=i}}
    return x==num?true:false
   };

// 5. https://leetcode.com/problems/contains-duplicate/submissions/915386169/
var containsDuplicate = function(num) {
    if (new Set(num).size != num.length){
        return true
    } else {
        return false
    }

