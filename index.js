const questionAnswer = document.getElementById('question_answer');

let ParagraphOne = document.createElement('p');
ParagraphOne.setAttribute('id', 'question-column');

let questionNumberSpan = document.createElement('span');
questionNumberSpan.setAttribute('id', 'questionNumbe');
let numberQuestion = document.createTextNode('1: ');
questionNumberSpan.appendChild(numberQuestion);

let questionLine = document.createElement('span');
questionLine.setAttribute('id', 'questionLine');
let questionText = document.createTextNode(quizQuestion[0].question);
questionLine.appendChild(questionText);

ParagraphOne.appendChild(questionNumberSpan);
ParagraphOne.appendChild(questionLine);

questionAnswer.prepend(ParagraphOne);


let paragraphTwo = document.createElement('p');
paragraphTwo.setAttribute('id', 'options');

let optionsContainer = document.createElement('span');
optionsContainer.setAttribute('class', 'span-answer');

let inputTag = document.createElement('input');
inputTag.setAttribute('type', 'radio');
inputTag.setAttribute('name', 'answer');
inputTag.setAttribute('value', 'A');
optionsContainer.appendChild(inputTag);

let optionsValue = document.createTextNode(quizQuestion[0].options);
optionsContainer.appendChild(optionsValue);


paragraphTwo.appendChild(optionsContainer);

questionAnswer.appendChild(paragraphTwo);