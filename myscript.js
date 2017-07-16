//ЗАДАЧА №1

function fun(){

 const userBirth = [document.querySelector('input[type="text"]').value];
 const now = new Date();
 const year = [now.getFullYear()]; 
 let shortBirth = userBirth[0].split('');
 const result = year - userBirth;

 if(shortBirth.length == 4) {
     const parag = document.createElement('p');
     const answer = document.querySelector('.first');
     answer.appendChild(parag);
     parag.textContent = "Вам - " + result;
 } else if(shortBirth.length == 2){
    let ggg = String(result).split('');
    ggg.splice(0, 2);
    const parag = document.createElement('p');
    const answer = document.querySelector('.first');
     answer.appendChild(parag);
    parag.textContent = "Вам - " + ggg.join('');
 } else{
     const parag = document.createElement('p');
     const answer = document.querySelector('.first');
     answer.appendChild(parag);
     parag.textContent = "Год введен в неправильном формате";
 }

}

const myButton = document.querySelector('input[type="button"]');
myButton.addEventListener('click', fun);


//ЗАДАЧА №2

function numbers(){
    const firstN = document.querySelector('input[name="first"]').value;
    const secondN = document.querySelector('input[name="second"]').value;
    if(firstN > secondN){
        const parag = document.createElement('p');
        const answer = document.querySelector('.second');
        answer.appendChild(parag);
        parag.textContent = firstN;
    } else if(firstN < secondN){
        const parag = document.createElement('p');
        const answer = document.querySelector('.second');
        answer.appendChild(parag);
        parag.textContent = secondN;
    } else if(firstN == secondN){
        const parag = document.createElement('p');
        const answer = document.querySelector('.second');
        answer.appendChild(parag);
        parag.textContent = "Эти числа равные";
    }
}

     const myres = document.querySelector('.forSecond');
     myres.addEventListener('click', numbers);

//ЗАДАЧА №3

function flat(){
    const myFlat = document.querySelector('input[name="third"]').value;

    if(myFlat != 0 && myFlat <= 20){
        const parag = document.createElement('p');
        const answer = document.querySelector('.third');
        answer.appendChild(parag);
        parag.textContent = "Квартира из первого подъезда";
    } else if(myFlat > 20 && myFlat < 65){
        const parag = document.createElement('p');
        const answer = document.querySelector('.third');
        answer.appendChild(parag);
        parag.textContent = "Квартира со второго подъезда";
    } else if(myFlat > 64 && myFlat < 81){
        const parag = document.createElement('p');
        const answer = document.querySelector('.third');
        answer.appendChild(parag);
        parag.textContent = "Квартира из третьего подъезда";
    } else{
        const parag = document.createElement('p');
        const answer = document.querySelector('.third');
        answer.appendChild(parag);
        parag.textContent = "Нет такой квартиры";
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
//ЗАДАЧА №1
    function looperr () {
    for(let i = 0; i < 102; i++){
        if(i%2 == 0) {
            let loopNum = document.querySelector('.loop1');
            let newPerr = document.createElement("span");
            loopNum.appendChild(newPerr);
            newPerr.textContent = " " + i;
        }
    }
    
}

const ggg = document.querySelector('.forNum');
ggg.addEventListener('click', looperr);

//ЗАДАЧА №2
    function loopper () {
    
    for(let i = 200; i >= 0; i--){
            let loopNumb2 = document.querySelector('.loop2');
            let newPerr2 = document.createElement("span");
            loopNumb2.appendChild(newPerr2);
            newPerr2.textContent = " " + i;
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
    let loopNumb3 = document.querySelector('.loop3');
    let newPerr3 = document.createElement("p");
    loopNumb3.appendChild(newPerr3);
    newPerr3.textContent = sum;
    
}

const mySum = document.querySelector('.summa');
mySum.addEventListener('click', summaN);

//ЗАДАЧА №4
 function stepen () {
    let userNum = parseInt(document.querySelector('input[name="oneStep"]').value); 
    let userS = parseInt(document.querySelector('input[name="oneS"]').value); 
    let userStepen = 1;
    for(let i = 1; i < userS +1; i++){
          userStepen *= userNum;
    }
    let loopStep = document.querySelector('.loop4');
    let newStep = document.createElement("p");
    loopStep.appendChild(newStep);
    newStep.textContent = userStepen;
    
}

const myStep = document.querySelector('.step');
myStep.addEventListener('click', stepen);

//ЗАДАЧА №5
 function stepenF () {
     let i;
     let resF;

    for(i = 1; i < 10; i++){
        resF = i*7;
    let loopStepF = document.querySelector('.loop5');
    let newStepF = document.createElement("p");
    loopStepF.appendChild(newStepF);
    newStepF.textContent = "7 " + "* " + i + " = " + resF;
    }   
}

const myStepF = document.querySelector('.stepF');
myStepF.addEventListener('click', stepenF);

//ЗАДАЧА №6
 function proizvedFun () {
    let resProizved = 1;
    for(i = 1; i < 51; i++){
        resProizved *= i;
    }   
    let loopProizved = document.querySelector('.loop6');
    let newProizved = document.createElement("p");
    loopProizved.appendChild(newProizved);
    newProizved.textContent = resProizved;
}

const myProizved = document.querySelector('.proizved');
myProizved.addEventListener('click', proizvedFun);

//ЗАДАЧА №7
 function simbolFun () {
    let simbol = 1000;
    for(; simbol < 2001; simbol++){
        //viewSimbol = "&#" + simbol;
    let loopSimbol = document.querySelector('.loop7');
    let newSimbol = document.createElement("span");
    loopSimbol.appendChild(newSimbol);
    newSimbol.innerHTML = "&#" + simbol;
    }   
}

const mySimbol = document.querySelector('.simbols');
mySimbol.addEventListener('click', simbolFun);
