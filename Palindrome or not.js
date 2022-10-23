Palindrome or not
let N= str.length;
let str="nmaman'
let rev="";
    for(let i=N-1;i>0;i--){
        rev= rev + str[i+1];  
}
 if(str==rev){
    console.log("Yes");
 }else{
    console.log("No");
 }