// If Challenge

let a = 10;
console.log((a < 10)? 10 : ( a >= 10 && a <= 40 )? "10 t0 40":( a > 40 )?"> 40":"UnKnown");
//////////////////////////////
let st = "Elzero Web School";
if(String((st.length)*2)==="34")
{
    console.log("Good");
}
if(st[st.indexOf("W")].toLowerCase()==="w")
{
    console.log("Good");
}
if(st.length!=="string")
{
    console.log("Good");
}

if(typeof(st.length)=== "number")
{
    console.log("Good");
}
if(st.slice(0,6).repeat(2)==="ElzeroElzero")
{
    console.log("Good");
}
