// For Challenge
let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
let newAdmins=[];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
for(let i=0;i<myAdmins.length;i++)
{
    if(myAdmins[i]=="Stop")
    {
        break;
    }
    newAdmins.push(myAdmins[i]);
}
X=newAdmins.length;
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${X} Admins</div>`);
document.write(`<hr>`);
let j=0;
let m=0;
for(let i=0;i<newAdmins.length;i++)
{
   j++;
    document.write(`The Admin For Team ${j}  Is ${newAdmins[i]}`);
    document.write(`<h2>Team Members:</h2>`);
    for(let k=0;k<myEmployees.length;k++)
    {
        if(myEmployees[k][0]==newAdmins[i][0]){
            m++;
            document.write(`- ${m} ${myEmployees[k]} <br>`);
        }  
    }
    m=0;
    document.write(`<hr>`);
}
