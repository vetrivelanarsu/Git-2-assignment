Palindrome or not

let str="naman"
let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev= rev + str[i];  
}
 if(str==rev){
    console.log("Yes");
 }else{
    console.log("No");
 }