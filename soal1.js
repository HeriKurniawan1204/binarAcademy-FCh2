let word1 = 'Andini sangat mencintai kamu selamanya';
let word2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

changedWord = (selectText, changeText, text) => {
    return text.split(selectText).join(changeText);
}
console.log(changedWord('mencintai', 'membenci', word1));
console.log(changedWord('bromo', 'semeru', word2));