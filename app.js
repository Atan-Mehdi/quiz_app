
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Ten Motor Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},

]
const size = quizData.length;
console.log(size);
let counter = 0;
let score = 0;

function submit() {
    counter++;
    const options = document.querySelectorAll('input[name="ques"]');
    let selected;

    options.forEach(option => {
        if (option.checked) {
            selected = option.value;
        }
    });

    if (selected == quizData[counter - 1].correct) {
        score++;
    }


    if (selected) {
        // alert(score);
        begin(counter);
    } else {
        alert("Please select an option");
    }
}

function createQuestion(qNumber) {


    let question = document.createElement('div');
    question.setAttribute("class", "question");
    question.innerHTML = quizData[qNumber].question;

    let options = document.createElement('div');
    options.setAttribute('class', 'options');


    for (let i = 1; i <= 4; i++) {
        let mcq = document.createElement('input');
        mcq.setAttribute('type', 'radio');
        mcq.setAttribute('id', 'option' + i);
        mcq.setAttribute('name', 'ques');
        if (i == 1) {
            mcq.value = 'a';
        } else if (i == 2) {
            mcq.value = 'b';
        } else if (i == 3) {
            mcq.value = 'c';
        } else if (i == 4) {
            mcq.value = 'd';
        }


        let label = document.createElement('label');
        label.setAttribute('for', 'option' + i);
        if (i == 1) {
            label.innerHTML = quizData[qNumber].a;
        } else if (i == 2) {
            label.innerHTML = quizData[qNumber].b;
        } else if (i == 3) {
            label.innerHTML = quizData[qNumber].c;
        } else if (i == 4) {
            label.innerHTML = quizData[qNumber].d;
        }

        let br = document.createElement('br');

        options.appendChild(mcq);
        options.appendChild(label);
        options.appendChild(br);

    }

    let next = document.createElement('button');
    if (qNumber + 1 == size) {
        next.innerHTML = 'Submit';
    } else {
        next.innerHTML = 'Next';
    }
    next.setAttribute('onclick', 'submit()');


    question.appendChild(options);
    question.appendChild(next);
    document.querySelector('.container').appendChild(question);




}


function result() {
    if (score == size) {
        const div = document.createElement('div');
        div.setAttribute('class', 'result');
        div.innerHTML = 'Congratulation you won';
        document.querySelector('.container').appendChild(div);
    } else {
        const div = document.createElement('div');
        div.setAttribute('class', 'result');
        div.innerHTML = 'Your score is ' + score + ' out of ' + size;
        document.querySelector('.container').appendChild(div);
    }
}
function begin(num) {

    if (num == 0) {
        const sub_container = document.querySelector('.sub-container');
        sub_container.parentNode.removeChild(sub_container);
    } else {
        const question = document.querySelector('.question');
        question.parentNode.removeChild(question);
    }

    if (num < size) {
        createQuestion(num);
    } else {
        result();
    }


}

