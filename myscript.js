//ЗАДАЧА №1
function writeResult(tag, where, myRes){
     const parag = document.createElement(tag);
     const answer = document.querySelector(where);
     answer.appendChild(parag);
     parag.textContent = myRes;
}
const userBirth = document.querySelector('input[type="text"]');
function fun(){
     const birthValue = userBirth.value;
     const now = new Date();
     const year = [now.getFullYear()]; 
     let shortBirth = birthValue.split('');
     const result = year - birthValue;
     let ggg = String(result).split('');
     ggg.splice(0, 2);

     if(shortBirth.length === 4) {
         writeResult('p', '.first', result);
     } else if(shortBirth.length == 2){  
         writeResult('p', '.first', ggg.join(''));
     } else{
         writeResult('p', '.first', 'Год введен в неправильном формате');
     }

    }

const myButton = document.querySelector('input[type="button"]');
myButton.addEventListener('click', fun);


//ЗАДАЧА №2

function numbers(){
    const firstN = document.querySelector('input[name="first"]').value;
    const secondN = document.querySelector('input[name="second"]').value;
    if(firstN === secondN){
        writeResult('p', '.second', "Эти числа равные");
    } else{
        writeResult('p', '.second', Math.max(firstN, secondN));
    }
}
     const myres = document.querySelector('.forSecond');
     myres.addEventListener('click', numbers);

//ЗАДАЧА №3

function flat(){
    const myFlat = document.querySelector('input[name="third"]').value;

    if(myFlat != 0 && myFlat <= 20){
        writeResult('p', '.third', "Квартира из первого подъезда");
    } else if(myFlat > 20 && myFlat < 65){
        writeResult('p', '.third', "Квартира со второго подъезда");
    } else if(myFlat > 64 && myFlat < 81){
        writeResult('p', '.third', "Квартира из третьего подъезда");
    } else{
        writeResult('p', '.third', "Нет такой квартиры");
    }
}

    const flatRes = document.querySelector('.forThird');
    flatRes.addEventListener('click', flat);

//ЗАДАЧА №4

let obj = {
    ivan: '333',
    ssss: '666',
    gibs: '0000'
}

function checkLogin(log, pass){
    return  (obj[log] === pass) ? 'Добро пожаловать' : 'ошибка';
}
function bbb(){
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;
    alert(checkLogin(login, password));
}
     const loginForm = document.querySelector('.forLogin');
     loginForm.addEventListener('click', bbb);
    
//ЗАДАЧА №5
function math(){
const one = document.querySelector('input[name="one"]').value;
const two = document.querySelector('input[name="two"]').value;
const three = document.querySelector('input[name="three"]').value;
alert(Math.max(one, two, three));
}
const viewNumber = document.querySelector('.forN');
viewNumber.addEventListener('click', math);


//--------------Задачи на цикл for-----------
function showLoop(where, tag, res){
    let loopNum = document.querySelector(where);
    let newPerr = document.createElement(tag);
    loopNum.appendChild(newPerr);
    newPerr.textContent = res;
}

//ЗАДАЧА №1
    function looperr () {
    for(let i = 0; i < 102; i++){
        if(i%2 === 0) {
            showLoop('.loop1', 'span', " " + i);
        }
    }
    
}

const ggg = document.querySelector('.forNum');
ggg.addEventListener('click', looperr);

//ЗАДАЧА №2
    function loopper () {
    
    for(let i = 200; i >= 0; i--){
            showLoop('.loop2', 'span', " " + i);
    }
    
}

const aaa = document.querySelector('.forNumber');
aaa.addEventListener('click', loopper);

//ЗАДАЧА №3
    function summaN () {
    let sum = 0;
    for(let i = 0; i < 101; i++){
            sum += i;
    }
    showLoop('.loop3', 'p', sum);    
}

const mySum = document.querySelector('.summa');
mySum.addEventListener('click', summaN);

//ЗАДАЧА №4
    const userNum = document.querySelector('input[name="oneStep"]'); 
    const userD = document.querySelector('input[name="oneS"]'); 
    
 function degree () {
    userNumber = parseInt(userNum.value, 10);
    userDeg = parseInt(userD.value, 10);
    let userDegree = 1;
    for(let i = 1; i < userDeg +1; i++){
          userDegree *= userNumber;
    }
    showLoop('.loop4', 'p', userDegree);
}

const myStep = document.querySelector('.step');
myStep.addEventListener('click', degree);

//ЗАДАЧА №5
 function degreeFun () {
     let i;
     let resF;

    for(i = 1; i < 10; i++){
        resF = i*7;
        showLoop('.loop5', 'p', "7 " + "* " + i + " = " + resF);
    }   
}

const myStepF = document.querySelector('.stepF');
myStepF.addEventListener('click', degreeFun);

//ЗАДАЧА №6
 function proizvedFun () {
    let resProizved = 1;
    for(i = 1; i < 51; i++){
        resProizved *= i;
    }   
    showLoop('.loop6', 'p', resProizved);
}

const myProizved = document.querySelector('.proizved');
myProizved.addEventListener('click', proizvedFun);

//ЗАДАЧА №7

 function simbolFun () {
    
    for(let simbol = 1000; simbol < 2001; simbol++){
        let loopSimbol = document.querySelector('.loop7');
        let newSimbol = document.createElement("span");
        loopSimbol.appendChild(newSimbol);
        newSimbol.innerHTML = "&#" + simbol;
    }   
}

const mySimbol = document.querySelector('.simbols');
mySimbol.addEventListener('click', simbolFun);
