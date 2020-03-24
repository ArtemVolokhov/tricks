const inputs = document.querySelectorAll('.input');
function focusFunc(){
    let parent = this.parentNode.parentNode; //отримуємо батьківський блок натиснутого інпута
    parent.classList.add('focus'); //стилізуємо батьківський блок
}
function blurFunc(){
    let parent = this.parentNode.parentNode; //отримуємо батьківський блок натиснутого інпута
    if(this.value == ""){ // .value повертає масив всіх властивостей об"єкта. В цьому контексті, якщо .value пусте - значить користувач нажав не на input, до якого ми його прив"язали
        parent.classList.remove('focus');// прибираємо класс focus із батьківського елементу
    }
}
inputs.forEach(input => { //forEach - метод, який запускає функцію для кожного елемента масиву. input => - це стрілочна функція із аргументом input
    input.addEventListener('focus', focusFunc); //коли інтуп стає активним виконується функція focusFunc
    input.addEventListener('blur', blurFunc); //blur -  це коли елемент втрачаэ фокус. Тоді виконується функція blurFunc
});




