let userName;
let timerId;
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
    popupContent.style.padding = "50px 100px";
const popupButton = document.querySelectorAll('.popButton');
const closePop = document.createElement('a');
    closePop.textContent = "x";
    closePop.style.position = "absolute";
    closePop.style.right = "10px";
    closePop.style.top = "10px";
    closePop.style.fontSize = "22px";
    closePop.style.textDecoration = "none";
    closePop.style.color = "black";
    closePop.style.cursor = "pointer";


popupButton.forEach(e => {
    e.addEventListener('click', function(){
        popup.classList.add('target');
        popupContent.appendChild(closePop);
        chooseBut(e.id);
    })
});

function chooseBut (id){
    let article = document.createElement("h2");
    let button1 = document.createElement("button");
        button1.style.padding = "8px 40px";
        button1.style.fontSize = "28px";
        button1.style.margin = "5px";
    let button2 = document.createElement("button");
        button2.style.padding = "8px 40px";
        button2.style.fontSize = "28px";
        button2.style.margin = "5px";
    let p;
    let input;
    let nameBody = document.createElement("div");
    nameBody.style.padding = "15px";
    nameBody.style.margin = "5px";
    nameBody.style.fontSize = "26px";
    let solve = document.createElement("p");
    article.onclick = function(){
        popupContent.appendChild(solve);
    }
    if(popupContent.children.length == 1){
        switch(id){
            case 'firstBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                article.innerText = "Введи своё имя:";
                input = document.createElement("input");
                input.style.padding = "15px";
                input.style.margin = "5px";
                input.style.fontSize = "28px";
                button1.textContent = "Ввести";
                button2.textContent = "Заново";
                p = document.createElement("p");
                button1.onclick = function(){
                    if(p.textContent == "" && input.value != ""){
                        userName = input.value;
                        p.textContent = "Привет, " + userName + "!";
                        nameBody.appendChild(p);
                        popupContent.removeChild(button1);
                        popupContent.appendChild(button2);
                        popupContent.appendChild(nameBody);
                        popupContent.removeChild(input);
                    }
                }    
            button2.onclick = function(){
                input.value = "";
                p.textContent = "";
                nameBody.removeChild(p);
                popupContent.removeChild(nameBody);
                popupContent.appendChild(input);
                popupContent.appendChild(button1);
                popupContent.removeChild(button2);
            }  
            popupContent.appendChild(article);
            popupContent.appendChild(input);
            popupContent.appendChild(button1);
            solve.textContent = "С помощью тега <input> можно получать данные от пользователя и сохранять их";
            break;
            case 'secondBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                article.innerText = "Введи основание и высоту:";
                let inputHeight = document.createElement("input");
                    inputHeight.style.padding = "15px";
                    inputHeight.style.margin = "5px";
                    inputHeight.style.fontSize = "28px";
                let inputFooting = document.createElement("input");
                    inputFooting.style.padding = "15px";
                    inputFooting.style.margin = "5px";
                    inputFooting.style.fontSize = "28px";
                button1.textContent = "Ввести";
                button2.textContent = "Заново";
                p = document.createElement("p");
                button1.onclick = function(){
                    p.textContent = "";
                    if(inputFooting.value != "" && inputHeight.value != "" && !isNaN(inputFooting.value) && !isNaN(inputHeight.value)){
                        if(inputFooting.value > 0 && inputHeight.value > 0){
                            if(nameBody.children.length == 1)   nameBody.removeChild(p);
                            let trinagleSquare = (0 + inputFooting.value) * inputHeight.value * 1/2; 
                            p.textContent = "Площадь равна: " + trinagleSquare;
                        }
                    }
                    else{
                        inputFooting.value = "";
                        inputHeight.value = "";
                        p.textContent = "Введи числа";
                    }
                    nameBody.appendChild(p);
                    popupContent.appendChild(button2);
                    popupContent.removeChild(button1);
                    popupContent.appendChild(nameBody);
                }    
            button2.onclick = function(){
                inputFooting.value = "";
                inputHeight.value = "";
                p.textContent = "";
                nameBody.removeChild(p);
                popupContent.removeChild(button2);
                popupContent.appendChild(button1);
            }  
            popupContent.appendChild(article);
            popupContent.appendChild(inputFooting);
            popupContent.appendChild(inputHeight);
            popupContent.appendChild(button1);
            solve.textContent = "С помощью JS можно выполнять различные операции, в том числе и вычислять площадь треугольника. Считав данные с двух текстовых вводов, можно применить простую математику: 0.5 * основание(первый ввод) * высота(второй ввод).";
            break;
            case 'thirdBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                article.innerText = "Введи 2 строки:";
                let inputFirst = document.createElement("input");
                    inputFirst.style.padding = "15px";
                    inputFirst.style.margin = "5px";
                    inputFirst.style.fontSize = "28px";
                let inputSecond = document.createElement("input");
                    inputSecond.style.padding = "15px";
                    inputSecond.style.margin = "5px";
                    inputSecond.style.fontSize = "28px";
                button1.textContent = "Ввести";
                button2.textContent = "Заново";
                p = document.createElement("p");
                button1.onclick = function(){
                    if(p.textContent == "" && inputFirst.value != "" && inputSecond.value != ""){
                        p.textContent = "Количество символов равно? - " + (inputFirst.value.length == inputSecond.value.length);
                        nameBody.appendChild(p);
                        popupContent.removeChild(button1);
                        popupContent.appendChild(button2);
                        popupContent.appendChild(nameBody);
                    }
                }    
            button2.onclick = function(){
                inputFirst.value = "";
                inputSecond.value = "";
                p.textContent = "";
                popupContent.removeChild(button2);
                popupContent.appendChild(button1);
                nameBody.removeChild(p);
            }  
            popupContent.appendChild(article);
            popupContent.appendChild(inputFirst);
            popupContent.appendChild(inputSecond);
            popupContent.appendChild(button1);
            solve.textContent = "JavaScript позволяет сравнивать количество символов строк с помощью свойства length. Данное свойство показывает количество символов в строке и позволяет работать с ним. Например, здесь было использовано сравнение длин двух строк следующим образом: if (string1.length == string2.length) ... ;"
            break;
            case 'fourthBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                let inputArray = document.createElement("input");
                let intArray = [0];
                let i = 0;
                let count = 5;
                inputArray.style.padding = "15px";
                inputArray.style.margin = "5px";
                inputArray.style.fontSize = "28px";
                button1.textContent = "Ввести";
                button2.textContent = "Заново";
                p = document.createElement("p");
                article.innerText = "Введи " + (i + 1) + "-е число:";
                popupContent.appendChild(article);
                popupContent.appendChild(inputArray);
                popupContent.appendChild(button1);
                popupContent.appendChild(button2);
                button1.onclick = function(){
                    if(p.textContent == "" && inputArray.value != ""){
                        let inputNum;
                        if (!isNaN(inputArray.value) && i < count){
                            if (nameBody.children.length == 1)  nameBody.removeChild(p);
                            inputNum = inputArray.value;
                            inputArray.value = "";   
                            intArray[i] = inputNum;
                            i++;
                            article.innerText = "Введи " + (i + 1) + "-е число:";
                        }
                        else {
                            p.textContent = "Пожалуйста, введи число";
                            inputArray.value = "";
                            nameBody.appendChild(p);
                            popupContent.appendChild(nameBody);
                        }
                        if (i == count) {
                            article.innerText = "Вот что есть в твоем массиве:";p.textContent = "Минимальное значение: " + Math.min.apply(null, intArray) + ", максимальное: " + Math.max.apply(null, intArray);
                            popupContent.appendChild(nameBody);
                            popupContent.removeChild(inputArray);
                            popupContent.removeChild(button1);
                            if (nameBody.children.length == 0)  nameBody.appendChild(p);
                        }
                    }
                }

                button2.onclick = function(){
                    i = 0;
                    article.innerText = article.innerText = "Введи " + (i + 1) + "-е число:";
                    intArray = [0];
                    inputArray.value = "";
                    p.textContent = "";
                    popupContent.removeChild(button2);
                    popupContent.appendChild(inputArray);
                    popupContent.appendChild(button1);
                    popupContent.appendChild(button2);
                    if(nameBody.children.length == 1)    nameBody.removeChild(p);
                } 
            solve.textContent = "Данная функция работает по такому принципу: последовательно считываются 5 чисел (да-да, именно чисел, если ты будешь пытаться отправить что-то лишнее, функция не примет это), затем заносит эти значения в массив, а затем с помощью специальных методов класса Math Math.min.apply(Function, argArray) и Math.max.apply(Function, argArray) получаем минимальное и максимальное значение в массиве. Всё просто!"
            break;
            case 'fifthBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                article.innerText = "Таймер в формате (ЧЧ:ММ:СС):";
                let timer = document.createElement("div");
                timer.className = "timer";
                let hours = document.createElement("input");
                hours.style.maxWidth = "50px";
                hours.style.minHeight = "50px";
                hours.maxLength = 2;
                hours.style.margin = "10px";
                hours.style.fontSize = "36px";
                hours.style.textAlign = "center";
                let mins = document.createElement("input");
                mins.style.maxWidth = "50px";
                mins.style.minHeight = "50px";
                mins.maxLength = 2;
                mins.style.fontSize = "36px";
                mins.style.margin = "10px";
                mins.style.textAlign = "center";
                let secs = document.createElement("input");
                secs.style.maxWidth = "50px";
                secs.style.minHeight = "50px";
                secs.maxLength = 2;
                secs.style.fontSize = "36px";
                secs.style.margin = "10px";
                secs.style.textAlign = "center";
   
                button1.textContent = "Старт";
                button2.textContent = "Пауза";
                let button3 = document.createElement("button");
                button3.textContent = "Стоп";
                button3.style.padding = "8px 40px";
                button3.style.fontSize = "28px";
                button3.style.margin = "5px";
                button1.style.width = "250px";
                button2.style.width = "250px";
                button3.style.width = "250px";
                let seconds = 0;
                p = document.createElement("p");
                p.style.fontSize = "30px";
                popupContent.appendChild(timer);

                button1.onclick = function(){
                    p.textContent = "";
                    button2.textContent = "Пауза";
                    button3.textContent = "Стоп";
                    if (!hours.value=="" && !mins.value=="" && !secs.value==""){
                        if(!isNaN(hours.value) && !isNaN(mins.value) && !isNaN(secs.value)){
                            hours.value = parseInt(hours.value);
                            mins.value = parseInt(mins.value);
                            secs.value = parseInt(secs.value);
                            if ((hours.value <= 23 && hours.value >= 0) && (mins.value <= 59 && mins.value >= 0) && (secs.value <= 59 && secs.value >= 0)){
                                popupContent.removeChild(button1);
                                popupContent.removeChild(timer);
                                let add_seconds;
                                let add_minutes;  
                                TimerAdapter();                              
                                popupContent.appendChild(nameBody);
                                popupContent.appendChild(button2);
                                popupContent.appendChild(button3);
                            }
                        }
                    }
                }    

                function TimerAdapter(){
                    timerId = setInterval(() => {
                        if (secs.value > 0)    secs.value--;
                        else if (mins.value > 0){
                                mins.value--;
                                secs.value = 59;
                            }
                            else if (hours.value > 0) {
                                hours.value--;
                                mins.value = 59;
                                secs.value = 59;
                            }
                        else{
                            EndTimer();
                            button3.textContent = "Заново";
                        }
                        Timer();
                    }, 1000);
                }

                function EndTimer(){
                    setTimeout(() => { clearInterval(timerId); p.textContent = "Время вышло"; popupContent.removeChild(button2);}, 0);
                }

                function Timer(){
                    copySeconds = secs.value;
                    copyMinutes = mins.value;
                    copyHours = hours.value;
                    while (copySeconds > 59){
                        copySeconds -= 60;
                        copyMinutes++;
                    }
                    while (copyMinutes > 59) {
                        copyMinutes -= 60;
                        copyHours++;
                    }
                    if (copySeconds < 10)   add_seconds = "0";
                    else    add_seconds = "";
                    if (copyMinutes < 10)   add_minutes = "0";
                    else    add_minutes = "";
                    if (copyHours > 23) copyHours -= 24;
                    p.textContent = copyHours + ":"+ add_minutes + copyMinutes + ":" + add_seconds + copySeconds;
                    nameBody.appendChild(p);
                }

                button2.onclick = function(){
                    if (button2.textContent == "Пауза"){
                        setTimeout(() => { clearInterval(timerId);}, 0);
                        button2.textContent = "Продолжить";
                    } 
                    else{
                        button2.textContent = "Пауза";
                        TimerAdapter();
                    } 
                }  
                
                button3.onclick = function(){
                    button2.textContent = "Пауза";
                    button3.textContent = "Стоп";
                    hours.value = "";
                    mins.value = "";
                    secs.value = "";
                    popupContent.removeChild(button3);
                    popupContent.appendChild(timer);
                    popupContent.appendChild(button1);
                    popupContent.removeChild(nameBody);
                    console.log(popupContent.children);
                    popupContent.removeChild(button2);
                }


                popupContent.appendChild(article);
                timer.appendChild(hours);
                timer.appendChild(mins);
                timer.appendChild(secs);
                popupContent.appendChild(timer);
                popupContent.appendChild(button1);
                solve.textContent = "Здесь также идет проверка на правильность ввода: часы вводятся от 0 до 23, минуты от 0 до 59 и секунды от 0 до 59. После правильного ввода вызывается функция обратного отсчета с применением метода setInterval(). Данная комбинация позволяет ежесекундно выводить время на экран и отнимать его. По истечению времени вызывается метод прерывания clearInterval(), внутри которого выводится сообщение о завершении времени. Также здесь реализована функция паузы, которая тоже является, по сути, вызовом метода clearInterval(), а продолжение соответственно - setInterval(). Попробуй сам!";
                break;
            case 'sixthBut':
                let access = true;
                let countRight = 0;
                let con = document.createElement("p");
                popupContent.style.flexDirection = "row";
                closePop.style.position = "relative";
                closePop.textContent = "Закрыть";
                let quiz = document.createElement("ol");
                quiz.id = "quiz";
                quiz.style.fontSize = "14px";
                popupContent.appendChild(quiz);
                let quizMenu = document.createElement("div");
                quizMenu.appendChild(button1);
                quizMenu.appendChild(closePop);
                quizMenu.style.textAlign = "center";
                quizMenu.style.margin = "50px";
                closePop.style.margin = "25px";
                quiz.style.marginTop = "750px";
                popupContent.appendChild(quizMenu);
                let question1 = document.createElement("li");
                let question2 = document.createElement("li");
                let question3 = document.createElement("li");
                let question4 = document.createElement("li");
                let question5 = document.createElement("li");
                let question6 = document.createElement("li");
                let question7 = document.createElement("li");
                let question8 = document.createElement("li");
                let question9 = document.createElement("li");
                let question10 = document.createElement("li");
                let q1ArticleText = document.createElement("p");
                let q2ArticleText = document.createElement("p");
                let q3ArticleText = document.createElement("p");
                let q4ArticleText = document.createElement("p");
                let q5ArticleText = document.createElement("p");
                let q6ArticleText = document.createElement("p");
                let q7ArticleText = document.createElement("p");
                let q8ArticleText = document.createElement("p");
                let q9ArticleText = document.createElement("p");
                let q10ArticleText = document.createElement("p");
                q1ArticleText.textContent = "Выберите правильную запись условия:";
                q2ArticleText.textContent = "Что из перечисленного не является примитивом?";
                q3ArticleText.textContent = "Каким методом удаляется последний элемент массива?";
                q4ArticleText.textContent = "Каким методом добавляется элемент в конец массива?"; 
                q5ArticleText.textContent = "Какой метод позволяет получить данные, введенные пользователем?";
                q6ArticleText.textContent = "Сколько сообщений будет выведено в консоль?";
                let q6ExArticleText = document.createElement("p");
                q6ExArticleText.textContent = "for (let i= 0; i< 10; i++)      console.log(i++);";
                q7ArticleText.textContent = "Укажите имя функции округления вверх:";
                q8ArticleText.textContent = "Этот метод разбивает строку на подстроки, используя заданный разделитель, и возвращает их в виде массива:";
                q9ArticleText.textContent = "Что нас ожидает в консоли после выполнения этого цикла?";
                let q9ExArticleText = document.createElement("p");
                q9ExArticleText.textContent = "for (let x = 3; x < 10000; x *= 3)	console.log(x);";
                q10ArticleText.textContent = "Является ли элемент «else» обязательным в конструкции условия?";

                let q1Answers = document.createElement("div");
                let q1Answer1 = document.createElement("div");
                q1Answer1.style.display = "flex";
                let q1Answer1Text = document.createElement("p");
                q1Answer1Text.style.margin = "5px";
                let q1Answer1Radio = document.createElement("input");
                q1Answer1Text.textContent = "if {} (i == 1);";
                q1Answer1Radio.type = "radio";
                q1Answer1Radio.name = "first";
                q1Answer1Radio.value = "false";
                let q1Answer2 = document.createElement("div");
                q1Answer2.style.display = "flex";
                let q1Answer2Text = document.createElement("p");
                q1Answer2Text.style.margin = "5px";
                let q1Answer2Radio = document.createElement("input");
                q1Answer2Text.textContent = "if () i ==1 {};";
                q1Answer2Radio.type = "radio";
                q1Answer2Radio.name = "first";
                q1Answer2Radio.value = "false";
                let q1Answer3 = document.createElement("div");
                q1Answer3.style.display = "flex";
                let q1Answer3Text = document.createElement("p");
                q1Answer3Text.style.margin = "5px";
                let q1Answer3Radio = document.createElement("input");
                q1Answer3Text.textContent = "if (i==1) {};";
                q1Answer3Radio.type = "radio";
                q1Answer3Radio.name = "first";
                q1Answer3Radio.value = "true";
                let q1Answer4 = document.createElement("div");
                q1Answer4.style.display = "flex";
                let q1Answer4Text = document.createElement("p");
                q1Answer4Text.style.margin = "5px";
                let q1Answer4Radio = document.createElement("input");
                q1Answer4Text.textContent = "if i==1 {};";
                q1Answer4Radio.type = "radio";
                q1Answer4Radio.name = "first";
                q1Answer4Radio.value = "false";
                q1Answers.appendChild(q1Answer1);
                q1Answer1.appendChild(q1Answer1Radio);
                q1Answer1.appendChild(q1Answer1Text);
                q1Answers.appendChild(q1Answer2);
                q1Answer2.appendChild(q1Answer2Radio);
                q1Answer2.appendChild(q1Answer2Text);
                q1Answers.appendChild(q1Answer3);
                q1Answer3.appendChild(q1Answer3Radio);
                q1Answer3.appendChild(q1Answer3Text);
                q1Answers.appendChild(q1Answer4);
                q1Answer4.appendChild(q1Answer4Radio);
                q1Answer4.appendChild(q1Answer4Text);

                let q2Answers = document.createElement("div");
                let q2Answer1 = document.createElement("div");
                q2Answer1.style.display = "flex";
                let q2Answer1Text = document.createElement("p");
                q2Answer1Text.style.margin = "5px";
                let q2Answer1Radio = document.createElement("input");
                q2Answer1Text.textContent = "Number;";
                q2Answer1Radio.type = "radio";
                q2Answer1Radio.name = "second";
                q2Answer1Radio.value = "false";
                let q2Answer2 = document.createElement("div");
                q2Answer2.style.display = "flex";
                let q2Answer2Text = document.createElement("p");
                q2Answer2Text.style.margin = "5px";
                let q2Answer2Radio = document.createElement("input");
                q2Answer2Text.textContent = "String;";
                q2Answer2Radio.type = "radio";
                q2Answer2Radio.name = "second";
                q2Answer2Radio.value = "false";
                let q2Answer3 = document.createElement("div");
                q2Answer3.style.display = "flex";
                let q2Answer3Text = document.createElement("p");
                q2Answer3Text.style.margin = "5px";
                let q2Answer3Radio = document.createElement("input");
                q2Answer3Text.textContent = "null;";
                q2Answer3Radio.type = "radio";
                q2Answer3Radio.name = "second";
                q2Answer3Radio.value = "false";
                let q2Answer4 = document.createElement("div");
                q2Answer4.style.display = "flex";
                let q2Answer4Text = document.createElement("p");
                q2Answer4Text.style.margin = "5px";
                let q2Answer4Radio = document.createElement("input");
                q2Answer4Text.textContent = "Object;";
                q2Answer4Radio.type = "radio";
                q2Answer4Radio.name = "second";
                q2Answer4Radio.value = "true";
                q2Answers.appendChild(q2Answer1);
                q2Answer1.appendChild(q2Answer1Radio);
                q2Answer1.appendChild(q2Answer1Text);
                q2Answers.appendChild(q2Answer2);
                q2Answer2.appendChild(q2Answer2Radio);
                q2Answer2.appendChild(q2Answer2Text);
                q2Answers.appendChild(q2Answer3);
                q2Answer3.appendChild(q2Answer3Radio);
                q2Answer3.appendChild(q2Answer3Text);
                q2Answers.appendChild(q2Answer4);
                q2Answer4.appendChild(q2Answer4Radio);
                q2Answer4.appendChild(q2Answer4Text);

                let q3Answers = document.createElement("div");
                let q3Answer1 = document.createElement("div");
                q3Answer1.style.display = "flex";
                let q3Answer1Text = document.createElement("p");
                q3Answer1Text.style.margin = "5px";
                let q3Answer1Radio = document.createElement("input");
                q3Answer1Text.textContent = ".push();";
                q3Answer1Radio.type = "radio";
                q3Answer1Radio.name = "third";
                q3Answer1Radio.value = "false";
                let q3Answer2 = document.createElement("div");
                q3Answer2.style.display = "flex";
                let q3Answer2Text = document.createElement("p");
                q3Answer2Text.style.margin = "5px";
                let q3Answer2Radio = document.createElement("input");
                q3Answer2Text.textContent = ".pop();";
                q3Answer2Radio.type = "radio";
                q3Answer2Radio.name = "third";
                q3Answer2Radio.value = "true";
                let q3Answer3 = document.createElement("div");
                q3Answer3.style.display = "flex";
                let q3Answer3Text = document.createElement("p");
                q3Answer3Text.style.margin = "5px";
                let q3Answer3Radio = document.createElement("input");
                q3Answer3Text.textContent = ".shift();";
                q3Answer3Radio.type = "radio";
                q3Answer3Radio.name = "third";
                q3Answer3Radio.value = "false";
                let q3Answer4 = document.createElement("div");
                q3Answer4.style.display = "flex";
                let q3Answer4Text = document.createElement("p");
                q3Answer4Text.style.margin = "5px";
                let q3Answer4Radio = document.createElement("input");
                q3Answer4Text.textContent = ".unshift();";
                q3Answer4Radio.type = "radio";
                q3Answer4Radio.name = "third";
                q3Answer4Radio.value = "false";
                q3Answers.appendChild(q3Answer1);
                q3Answer1.appendChild(q3Answer1Radio);
                q3Answer1.appendChild(q3Answer1Text);
                q3Answers.appendChild(q3Answer2);
                q3Answer2.appendChild(q3Answer2Radio);
                q3Answer2.appendChild(q3Answer2Text);
                q3Answers.appendChild(q3Answer3);
                q3Answer3.appendChild(q3Answer3Radio);
                q3Answer3.appendChild(q3Answer3Text);
                q3Answers.appendChild(q3Answer4);
                q3Answer4.appendChild(q3Answer4Radio);
                q3Answer4.appendChild(q3Answer4Text);

                let q4Answers = document.createElement("div");
                let q4Answer1 = document.createElement("div");
                q4Answer1.style.display = "flex";
                let q4Answer1Text = document.createElement("p");
                q4Answer1Text.style.margin = "5px";
                let q4Answer1Radio = document.createElement("input");
                q4Answer1Text.textContent = ".push();";
                q4Answer1Radio.type = "radio";
                q4Answer1Radio.name = "fourth";
                q4Answer1Radio.value = "true";
                let q4Answer2 = document.createElement("div");
                q4Answer2.style.display = "flex";
                let q4Answer2Text = document.createElement("p");
                q4Answer2Text.style.margin = "5px";
                let q4Answer2Radio = document.createElement("input");
                q4Answer2Text.textContent = ".pop();";
                q4Answer2Radio.type = "radio";
                q4Answer2Radio.name = "fourth";
                q4Answer2Radio.value = "false";
                let q4Answer3 = document.createElement("div");
                q4Answer3.style.display = "flex";
                let q4Answer3Text = document.createElement("p");
                q4Answer3Text.style.margin = "5px";
                let q4Answer3Radio = document.createElement("input");
                q4Answer3Text.textContent = ".shift();";
                q4Answer3Radio.type = "radio";
                q4Answer3Radio.name = "fourth";
                q4Answer3Radio.value = "false";
                let q4Answer4 = document.createElement("div");
                q4Answer4.style.display = "flex";
                let q4Answer4Text = document.createElement("p");
                q4Answer4Text.style.margin = "5px";
                let q4Answer4Radio = document.createElement("input");
                q4Answer4Text.textContent = ".unshift();";
                q4Answer4Radio.type = "radio";
                q4Answer4Radio.name = "fourth";
                q4Answer4Radio.value = "false";
                q4Answers.appendChild(q4Answer1);
                q4Answer1.appendChild(q4Answer1Radio);
                q4Answer1.appendChild(q4Answer1Text);
                q4Answers.appendChild(q4Answer2);
                q4Answer2.appendChild(q4Answer2Radio);
                q4Answer2.appendChild(q4Answer2Text);
                q4Answers.appendChild(q4Answer3);
                q4Answer3.appendChild(q4Answer3Radio);
                q4Answer3.appendChild(q4Answer3Text);
                q4Answers.appendChild(q4Answer4);
                q4Answer4.appendChild(q4Answer4Radio);
                q4Answer4.appendChild(q4Answer4Text);

                let q5Answers = document.createElement("div");
                let q5Answer1 = document.createElement("div");
                q5Answer1.style.display = "flex";
                let q5Answer1Text = document.createElement("p");
                q5Answer1Text.style.margin = "5px";
                let q5Answer1Radio = document.createElement("input");
                q5Answer1Text.textContent = "alert();";
                q5Answer1Radio.type = "radio";
                q5Answer1Radio.name = "fifth";
                q5Answer1Radio.value = "false";
                let q5Answer2 = document.createElement("div");
                q5Answer2.style.display = "flex";
                let q5Answer2Text = document.createElement("p");
                q5Answer2Text.style.margin = "5px";
                let q5Answer2Radio = document.createElement("input");
                q5Answer2Text.textContent = "confirm();";
                q5Answer2Radio.type = "radio";
                q5Answer2Radio.name = "fifth";
                q5Answer1Radio.value = "false";
                let q5Answer3 = document.createElement("div");
                q5Answer3.style.display = "flex";
                let q5Answer3Text = document.createElement("p");
                q5Answer3Text.style.margin = "5px";
                let q5Answer3Radio = document.createElement("input");
                q5Answer3Text.textContent = "prompt();";
                q5Answer3Radio.type = "radio";
                q5Answer3Radio.name = "fifth";
                q5Answer3Radio.value = "true";
                let q5Answer4 = document.createElement("div");
                q5Answer4.style.display = "flex";
                let q5Answer4Text = document.createElement("p");
                q5Answer4Text.style.margin = "5px";
                let q5Answer4Radio = document.createElement("input");
                q5Answer4Text.textContent = "message();";
                q5Answer4Radio.type = "radio";
                q5Answer4Radio.name = "fifth";
                q5Answer3Radio.value = "false";
                q5Answers.appendChild(q5Answer1);
                q5Answer1.appendChild(q5Answer1Radio);
                q5Answer1.appendChild(q5Answer1Text);
                q5Answers.appendChild(q5Answer2);
                q5Answer2.appendChild(q5Answer2Radio);
                q5Answer2.appendChild(q5Answer2Text);
                q5Answers.appendChild(q5Answer3);
                q5Answer3.appendChild(q5Answer3Radio);
                q5Answer3.appendChild(q5Answer3Text);
                q5Answers.appendChild(q5Answer4);
                q5Answer4.appendChild(q5Answer4Radio);
                q5Answer4.appendChild(q5Answer4Text);

                let q6Answers = document.createElement("div");
                let q6Answer1 = document.createElement("div");
                q6Answer1.style.display = "flex";
                let q6Answer1Text = document.createElement("p");
                q6Answer1Text.style.margin = "5px";
                let q6Answer1Radio = document.createElement("input");
                q6Answer1Text.textContent = "0";
                q6Answer1Radio.type = "radio";
                q6Answer1Radio.name = "sixth";
                q6Answer1Radio.value = "false";
                let q6Answer2 = document.createElement("div");
                q6Answer2.style.display = "flex";
                let q6Answer2Text = document.createElement("p");
                q6Answer2Text.style.margin = "5px";
                let q6Answer2Radio = document.createElement("input");
                q6Answer2Text.textContent = "1";
                q6Answer2Radio.type = "radio";
                q6Answer2Radio.name = "sixth";
                q6Answer2Radio.value = "false";
                let q6Answer3 = document.createElement("div");
                q6Answer3.style.display = "flex";
                let q6Answer3Text = document.createElement("p");
                q6Answer3Text.style.margin = "5px";
                let q6Answer3Radio = document.createElement("input");
                q6Answer3Text.textContent = "5";
                q6Answer3Radio.type = "radio";
                q6Answer3Radio.name = "sixth";
                q5Answer3Radio.value = "true";
                let q6Answer4 = document.createElement("div");
                q6Answer4.style.display = "flex";
                let q6Answer4Text = document.createElement("p");
                q6Answer4Text.style.margin = "5px";
                let q6Answer4Radio = document.createElement("input");
                q6Answer4Text.textContent = "10";
                q6Answer4Radio.type = "radio";
                q6Answer4Radio.name = "sixth";
                q5Answer3Radio.value = "false";
                q6Answers.appendChild(q6Answer1);
                q6Answer1.appendChild(q6Answer1Radio);
                q6Answer1.appendChild(q6Answer1Text);
                q6Answers.appendChild(q6Answer2);
                q6Answer2.appendChild(q6Answer2Radio);
                q6Answer2.appendChild(q6Answer2Text);
                q6Answers.appendChild(q6Answer3);
                q6Answer3.appendChild(q6Answer3Radio);
                q6Answer3.appendChild(q6Answer3Text);
                q6Answers.appendChild(q6Answer4);
                q6Answer4.appendChild(q6Answer4Radio);
                q6Answer4.appendChild(q6Answer4Text);

                let q7Answers = document.createElement("div");
                let q7Answer1 = document.createElement("div");
                q7Answer1.style.display = "flex";
                let q7Answer1Text = document.createElement("p");
                q7Answer1Text.style.margin = "5px";
                let q7Answer1Radio = document.createElement("input");
                q7Answer1Text.textContent = "math.ceil";
                q7Answer1Radio.type = "radio";
                q7Answer1Radio.name = "seventh";
                q7Answer1Radio.value = "false";
                let q7Answer2 = document.createElement("div");
                q7Answer2.style.display = "flex";
                let q7Answer2Text = document.createElement("p");
                q7Answer2Text.style.margin = "5px";
                let q7Answer2Radio = document.createElement("input");
                q7Answer2Text.textContent = "Math.ceil";
                q7Answer2Radio.type = "radio";
                q7Answer2Radio.name = "seventh";
                q7Answer2Radio.value = "false";
                let q7Answer3 = document.createElement("div");
                q7Answer3.style.display = "flex";
                let q7Answer3Text = document.createElement("p");
                q7Answer3Text.style.margin = "5px";
                let q7Answer3Radio = document.createElement("input");
                q7Answer3Text.textContent = "math.ceil()";
                q7Answer3Radio.type = "radio";
                q7Answer3Radio.name = "seventh";
                q7Answer3Radio.value = "true";
                let q7Answer4 = document.createElement("div");
                q7Answer4.style.display = "flex";
                let q7Answer4Text = document.createElement("p");
                q7Answer4Text.style.margin = "5px";
                let q7Answer4Radio = document.createElement("input");
                q7Answer4Text.textContent = "ceil()";
                q7Answer4Radio.type = "radio";
                q7Answer4Radio.name = "seventh";
                q7Answer4Radio.value = "false";
                q7Answers.appendChild(q7Answer1);
                q7Answer1.appendChild(q7Answer1Radio);
                q7Answer1.appendChild(q7Answer1Text);
                q7Answers.appendChild(q7Answer2);
                q7Answer2.appendChild(q7Answer2Radio);
                q7Answer2.appendChild(q7Answer2Text);
                q7Answers.appendChild(q7Answer3);
                q7Answer3.appendChild(q7Answer3Radio);
                q7Answer3.appendChild(q7Answer3Text);
                q7Answers.appendChild(q7Answer4);
                q7Answer4.appendChild(q7Answer4Radio);
                q7Answer4.appendChild(q7Answer4Text);

                let q8Answers = document.createElement("div");
                let q8Answer1 = document.createElement("div");
                q8Answer1.style.display = "flex";
                let q8Answer1Text = document.createElement("p");
                q8Answer1Text.style.margin = "5px";
                let q8Answer1Radio = document.createElement("input");
                q8Answer1Text.textContent = "filter();";
                q8Answer1Radio.type = "radio";
                q8Answer1Radio.name = "eigth";
                q8Answer1Radio.value = "false";
                let q8Answer2 = document.createElement("div");
                q8Answer2.style.display = "flex";
                let q8Answer2Text = document.createElement("p");
                q8Answer2Text.style.margin = "5px";
                let q8Answer2Radio = document.createElement("input");
                q8Answer2Text.textContent = "split();";
                q8Answer2Radio.type = "radio";
                q8Answer2Radio.name = "eigth";
                q8Answer2Radio.value = "true";
                let q8Answer3 = document.createElement("div");
                q8Answer3.style.display = "flex";
                let q8Answer3Text = document.createElement("p");
                q8Answer3Text.style.margin = "5px";
                let q8Answer3Radio = document.createElement("input");
                q8Answer3Text.textContent = "parseInt();";
                q8Answer3Radio.type = "radio";
                q8Answer3Radio.name = "eigth";
                q8Answer3Radio.value = "false";
                let q8Answer4 = document.createElement("div");
                q8Answer4.style.display = "flex";
                let q8Answer4Text = document.createElement("p");
                q8Answer4Text.style.margin = "5px";
                let q8Answer4Radio = document.createElement("input");
                q8Answer4Text.textContent = "separate();";
                q8Answer4Radio.type = "radio";
                q8Answer4Radio.name = "eigth";
                q8Answer4Radio.value = "false";
                q8Answers.appendChild(q8Answer1);
                q8Answer1.appendChild(q8Answer1Radio);
                q8Answer1.appendChild(q8Answer1Text);
                q8Answers.appendChild(q8Answer2);
                q8Answer2.appendChild(q8Answer2Radio);
                q8Answer2.appendChild(q8Answer2Text);
                q8Answers.appendChild(q8Answer3);
                q8Answer3.appendChild(q8Answer3Radio);
                q8Answer3.appendChild(q8Answer3Text);
                q8Answers.appendChild(q8Answer4);
                q8Answer4.appendChild(q8Answer4Radio);
                q8Answer4.appendChild(q8Answer4Text);

                let q9Answers = document.createElement("div");
                let q9Answer1 = document.createElement("div");
                q9Answer1.style.display = "flex";
                let q9Answer1Text = document.createElement("p");
                q9Answer1Text.style.margin = "5px";
                let q9Answer1Radio = document.createElement("input");
                q9Answer1Text.textContent = "Все числа, которые делятся на 3 в диапазоне от 3 до 10000 (3, 6, 9, 12 и т д)";
                q9Answer1Radio.type = "radio";
                q9Answer1Radio.name = "nineth";
                q9Answer1Radio.value = "false";
                let q9Answer2 = document.createElement("div");
                q9Answer2.style.display = "flex";
                let q9Answer2Text = document.createElement("p");
                q9Answer2Text.style.margin = "5px";
                let q9Answer2Radio = document.createElement("input");
                q9Answer2Text.textContent = "Степени числа 3 в диапазоне от 3 до 10000 (3, 9, 27 и т.д. )";
                q9Answer2Radio.type = "radio";
                q9Answer2Radio.name = "nineth";
                q9Answer2Radio.value = "true";
                let q9Answer3 = document.createElement("div");
                q9Answer3.style.display = "flex";
                let q9Answer3Text = document.createElement("p");
                q9Answer3Text.style.margin = "5px";
                let q9Answer3Radio = document.createElement("input");
                q9Answer3Text.textContent = "Одно число - 9";
                q9Answer3Radio.type = "radio";
                q9Answer3Radio.name = "nineth";
                q9Answer3Radio.value = "false";
                let q9Answer4 = document.createElement("div");
                q9Answer4.style.display = "flex";
                let q9Answer4Text = document.createElement("p");
                q9Answer4Text.style.margin = "5px";
                let q9Answer4Radio = document.createElement("input");
                q9Answer4Text.textContent = "Сумму всех степеней числа 3 в диапазоне от 3 до 10000";
                q9Answer4Radio.type = "radio";
                q9Answer4Radio.name = "nineth";
                q9Answer4Radio.value = "false";
                q9Answers.appendChild(q9Answer1);
                q9Answer1.appendChild(q9Answer1Radio);
                q9Answer1.appendChild(q9Answer1Text);
                q9Answers.appendChild(q9Answer2);
                q9Answer2.appendChild(q9Answer2Radio);
                q9Answer2.appendChild(q9Answer2Text);
                q9Answers.appendChild(q9Answer3);
                q9Answer3.appendChild(q9Answer3Radio);
                q9Answer3.appendChild(q9Answer3Text);
                q9Answers.appendChild(q9Answer4);
                q9Answer4.appendChild(q9Answer4Radio);
                q9Answer4.appendChild(q9Answer4Text);

                let q10Answers = document.createElement("div");
                let q10Answer1 = document.createElement("div");
                q10Answer1.style.display = "flex";
                let q10Answer1Text = document.createElement("p");
                q10Answer1Text.style.margin = "5px";
                let q10Answer1Radio = document.createElement("input");
                q10Answer1Text.textContent = "Да";
                q10Answer1Radio.type = "radio";
                q10Answer1Radio.name = "tenth";
                q1Answer1Radio.value = "false";
                let q10Answer2 = document.createElement("div");
                q10Answer2.style.display = "flex";
                let q10Answer2Text = document.createElement("p");
                q10Answer2Text.style.margin = "5px";
                let q10Answer2Radio = document.createElement("input");
                q10Answer2Text.textContent = "Нет";
                q10Answer2Radio.type = "radio";
                q10Answer2Radio.name = "tenth";
                q10Answer2Radio.value = "true";
                let q10Answer3 = document.createElement("div");
                q10Answer3.style.display = "flex";
                let q10Answer3Text = document.createElement("p");
                q10Answer3Text.style.margin = "5px";
                let q10Answer3Radio = document.createElement("input");
                q10Answer3Text.textContent = "Зависит от версии JavaScript";
                q10Answer3Radio.type = "radio";
                q10Answer3Radio.name = "tenth";
                q10Answer3Radio.value = "false";
                let q10Answer4 = document.createElement("div");
                q10Answer4.style.display = "flex";
                let q10Answer4Text = document.createElement("p");
                q10Answer4Text.style.margin = "5px";
                let q10Answer4Radio = document.createElement("input");
                q10Answer4Text.textContent = "В разных браузерах по-разному";
                q10Answer4Radio.type = "radio";
                q10Answer4Radio.name = "tenth";
                q10Answer4Radio.value = "false";
                q10Answers.appendChild(q10Answer1);
                q10Answer1.appendChild(q10Answer1Radio);
                q10Answer1.appendChild(q10Answer1Text);
                q10Answers.appendChild(q10Answer2);
                q10Answer2.appendChild(q10Answer2Radio);
                q10Answer2.appendChild(q10Answer2Text);
                q10Answers.appendChild(q10Answer3);
                q10Answer3.appendChild(q10Answer3Radio);
                q10Answer3.appendChild(q10Answer3Text);
                q10Answers.appendChild(q10Answer4);
                q10Answer4.appendChild(q10Answer4Radio);
                q10Answer4.appendChild(q10Answer4Text);

                question1.appendChild(q1ArticleText);
                question2.appendChild(q2ArticleText);
                question3.appendChild(q3ArticleText);
                question4.appendChild(q4ArticleText);
                question5.appendChild(q5ArticleText);
                question6.appendChild(q6ArticleText);
                question6.appendChild(q6ExArticleText);
                question7.appendChild(q7ArticleText);
                question8.appendChild(q8ArticleText);
                question9.appendChild(q9ArticleText);
                question9.appendChild(q9ExArticleText);
                question10.appendChild(q10ArticleText);
                question1.appendChild(q1Answers);
                question2.appendChild(q2Answers);
                question3.appendChild(q3Answers);
                question4.appendChild(q4Answers);
                question5.appendChild(q5Answers);
                question6.appendChild(q6Answers);
                question7.appendChild(q7Answers);
                question8.appendChild(q8Answers);
                question9.appendChild(q9Answers);
                question10.appendChild(q10Answers);
                quiz.appendChild(question1);
                quiz.appendChild(question2);
                quiz.appendChild(question3);
                quiz.appendChild(question4);
                quiz.appendChild(question5);
                quiz.appendChild(question6);
                quiz.appendChild(question7);
                quiz.appendChild(question8);
                quiz.appendChild(question9);
                quiz.appendChild(question10);
                button1.textContent = "Посмотреть результат";
                popup.style.overflow = "auto";

button1.onclick = function(){
    let countChecked = 0;
    if (button1.textContent == "Посмотреть результат") {
        // popupContent.removeChild(quiz);
            let d = quiz.querySelectorAll("li");
            for (let j = 0; j < d.length;j++){
                let e  =d[j].lastChild;
                for (let k = 0; k < e.childNodes.length; k++){
                    let f = e.childNodes[k];
                    console.log(f);
                    let i = 0;
                    if (f.firstChild.checked){
                        if (f.firstChild.value == "false"){
                            f.lastChild.style.color = "red";
                        }
                        if (f.firstChild.value == "true"){
                            f.lastChild.style.color = "green";
                            if (access) countRight++;
                        }
                        countChecked++;
                    }

                }
            // d[0].querySelectorAll("div");
            // .querySelectorAll("div").querySelectorAll("input");
            // console.log(d);
        }
        if (countChecked == 10){
            button1.textContent = "Попробовать заново";
            con.textContent = "Правильно: " + countRight + "/10" ;
        }
        else{
            access = false;
            con.textContent = "Ответь на все вопросы!";
            for (let j = 0; j < d.length;j++){
                let e  =d[j].lastChild;
                for (let k = 0; k < e.childNodes.length; k++){
                    e.childNodes[k].lastChild.style.color = "black";
                }
            }
        }   
        popupContent.appendChild(con);
    }
    else {
        countRight = 0;
        popupContent.removeChild(con);
        popupContent.appendChild(quiz);
        popupContent.removeChild(quizMenu);
        popupContent.appendChild(quizMenu);
        let d = quiz.querySelectorAll("li");
        for (let j = 0; j < d.length;j++){
            let e  =d[j].lastChild;
            for (let k = 0; k < e.childNodes.length; k++){
                e.childNodes[k].lastChild.style.color = "black";
            }
        }
        button1.textContent = "Посмотреть результат";
        access = true;
    }
}
    break;
            case 'seventhBut':
                closePop.style.margin = "0";
                popupContent.style.flexDirection = "column";
                closePop.style.position = "absolute";
                closePop.textContent = "X";
                popupContent.appendChild(article);
                if (userName != null && userName != "")  article.innerText = "Как ваши дела, " + userName + "?";
                else article.innerText = "Ты еще не написал своего имени..";
                let image = document.createElement("img");
                image.src = "sur.jpg";
                image.style.width = "100%";
                popupContent.appendChild(image);
                p = document.createElement("p");
                p.textContent = "Сейчас + " + new Date();
                nameBody.appendChild(p);
                popupContent.appendChild(nameBody);
                solve.textContent = "Ах да, я совсем забыл, что при нажатии на какой-то элемент происходят различные события. Это можно реализовать разными способами, но я решил использовать событие onclick. Функционально, ты можешь описать всё, что тебе нужно при нажатии на какой-то элемент. Как ты уже заметил, при нажатии на заголовок появляются подсказки, при нажатии на пункт меню, появляется всплывающее окно с нужной функцией, а при нажатии на крестик оно закрывается. Это очень просто, но эффективно, если использовать JS без всяких дополнений. Благодаря созданию объекта Date, ты сейчас видишь точное время вызова этого окна. Мне было приятно рассказать об интересных вещах в мире JS, надеюсь я смог тебя увлечь глубже изучать этот язык."
                break;
        }
    }
}



closePop.addEventListener('click', function(){
    popup.classList.remove('target');
    while (popupContent.firstChild) {
        popupContent.removeChild(popupContent.firstChild);
}
});

