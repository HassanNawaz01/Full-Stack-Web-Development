const arr = [23, 4542, 25225, 474, 44, 4, 4, 43, 5, 6, 578578, 555];
let num = 100;

function getElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getElement(arr, num);

//Q2
let str = "abcdabcdefggh";
function getUnique(str) {
  let ans = "";
  for (i = 0; i < str.length; i++) {
    if (ans.indexOf(str[i]) == -1) {
      // if current character is not added, then add in it. otherwise it is duplicate
      ans += str[i];
    }
  }
  return ans;
}
console.log(getUnique(str));

//Q3
const country = ["austria", "Germany", "pakistan", "USA"];
function longestCountry(country) {
  let temp = "";
  for (i = 0; i < country.length; i++) {
    if (country[i].length > temp.length) {
      temp = country[i];
    }
  }
  return temp;
}
let temp = longestCountry(country);
console.log(temp);


//Q4
str = "apnacollege";
function checkVowels(){
let count = 0;
for (let i=0;i<str.length;i++){
    if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")){
        count+=1;
    }
} return count;
}
 let count = checkVowels(str);
 console.log(count);

 //Q5

 function generateRandom(start,end){
    let diff = end-start;
    return Math.ceil(Math.random()*diff) + start;
 }
 console.log(generateRandom(5,15));
