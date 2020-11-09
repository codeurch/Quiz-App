const questionTitle = document.getElementById('questionTitle');
let optionContainer = document.getElementById('optionContainer');
let optionss = document.getElementById('option');
const nextBtn = document.getElementById('nextBtn');

let questionCounter = -1;

nextBtn.addEventListener('click', e => {
    questionCounter++;
    // console.log(quizQuestion[questionCounter].options);
    questionTitle.innerHTML = `<p>${quizQuestion[questionCounter].question}</p>`;
    for (
        let index = 0; index < quizQuestion[questionCounter].options.length; index++
    ) {
        console.log(quizQuestion[questionCounter].options[index]);
        optionContainer.innerHTML = `<div>${quizQuestion[questionCounter].options[index]}</div>`;
    }
});