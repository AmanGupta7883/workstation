const test = [{
    "id": 1,
    "q": "What is the full form of HTML ?",
    "o1": "Hyper Text Meter Loader",
    "o2": "Hyper Text Meter Loader",
    "o3": "Hyper Text Meter Loader",
    "o4": "Hyper Text Meter Loader"
},

{
    "id": 2,
    "q": "What is the full form of JVM?",
    "o1": "Java Video Manager",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 3,
    "q": "What is the full form of JRE?",
    "o1": "Java RunTime Enviroment",
    "o2": "Jumbo Radio Edge",
    "o3": "Just Ride Everywhere",
    "o4": "None of the above"
},

{
    "id": 4,
    "q": "What is the full form of JDBC?",
    "o1": "Java Database Connectivity",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 5,
    "q": "What is the full form of OOPs?",
    "o1": "Java Video Manager",
    "o2": "Object oreiented programming",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 6,
    "q": "What is the full form of MERN?",
    "o1": "Java Video Manager",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 7,
    "q": "What is the full form of MEAN?",
    "o1": "Java Video Manager",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 8,
    "q": "What is the full form of FIFO?",
    "o1": "Java Video Manager",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 9,
    "q": "What is the full form of LIFO?",
    "o1": "Java Video Manager",
    "o2": "Jumbo Video Monitor",
    "o3": "Java Virtual Machine",
    "o4": "Java Virtual Memory"
},

{
    "id": 10,
    "q": "What is the full form of JSX?",
    "o1": "Hyper Text Meter Loader",
    "o2": "Hyper Text Meter Loader",
    "o3": "Hyper Text Meter Loader",
    "o4": "Hyper Text Meter Loader"
}
];

qcoun=1;
const b=document.getElementById('qnos');

window.onload=()=>{
    for(let i=1;i<=test.length;i++){
        b.innerHTML=i;
        }
}


c = 1;a=0;
nextoption = () => {
        document.getElementById('qn').innerText = test[c].id;
        document.getElementById('ques').innerText = test[c].q;
        document.getElementById('op1').innerText = test[c].o1;
        document.getElementById('op2').innerText = test[c].o2;
        document.getElementById('op3').innerText = test[c].o3;
        document.getElementById('op4').innerText = test[c].o4;
        c++;
        a=c;
        if(c==(test.length)){
            document.getElementById('quizAreas').style.display='none';
            document.getElementById('quizAreas').style.textAlign='center';
            document.getElementById('quizAreas').style.transform='translate(5%,10rem)';
            document.getElementById('sc').style.display="block";
            document.getElementById('quizAreas').innerHTML=`<h3>Finished</h3>`;
            window.location = "https://triggerreact.netlify.app/";
        }
}
previous=()=>{
    a--;
    document.getElementById('qn').innerText = test[a].id;
    document.getElementById('ques').innerText = test[a].q;
    document.getElementById('op1').innerText = test[a].o1;
    document.getElementById('op2').innerText = test[a].o2;
    document.getElementById('op3').innerText = test[a].o3;
    document.getElementById('op4').innerText = test[a].o4;
   
}

ended = () => {
    document.getElementById('ynbar').style.visibility = 'visible';
}
yes = () => {
    document.getElementById('quizAreas').innerHTML=`<h3>Finished</h3>`;
    document.getElementById('quizAreas').style.display="flex";
    document.getElementById('quizAreas').style.alignItems="center";
    document.getElementById('quizAreas').style.justifyContent="center";
    document.getElementById('ynbar').style.display = 'none';
    window.location = "https://universalworkstation.netlify.app/";
}
no = () => {
    document.getElementById('ynbar').style.display = 'none';
}