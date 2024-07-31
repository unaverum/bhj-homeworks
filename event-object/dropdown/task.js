const buttonsDropdownList = document.getElementsByClassName('dropdown__value');
const dropDownList = Array.from(buttonsDropdownList);
const buttonsLinks = Array.from(document.getElementsByClassName('dropdown__link'));

function dropDown() {
    let listDrop = Array.from(document.getElementsByClassName('dropdown__list'));
    if (listDrop[0].className === "dropdown__list") {
        listDrop[0].className = "dropdown__list dropdown__list_active";
    } else {
        listDrop[0].className = "dropdown__list";
    }
    return false;
}

function choiceMade(event) {
    let topItem = Array.from(document.getElementsByClassName('dropdown__value'));
    topItem[0].textContent = this.textContent;
    event.preventDefault();
    dropDown();
}

dropDownList[0].addEventListener('click', dropDown);

for (let i = 0; i < buttonsLinks.length; i++) {
    buttonsLinks[i].addEventListener('click', choiceMade);
}