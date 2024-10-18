const inpText = document.querySelector(".inp");
const btnAdd = document.querySelector(".btn_add");
const resultText = document.querySelector(".text_result");
const listText = document.querySelector(".list_text");
const arrayText = []

const reverseData = (text) => {
    return text.split("").reverse().join("");
}

const addTextHTML = () => {
    listText.innerHTML = '';
    arrayText.forEach((item) => {
        const liCard = document.createElement('li');
        liCard.textContent = item;
        listText.appendChild(liCard);
    });
}

btnAdd.onclick = () => {
    arrayText.push(inpText.value);
    resultText.innerText = reverseData(inpText.value);
    inpText.value = "";
    addTextHTML();
    console.log(arrayText);
}