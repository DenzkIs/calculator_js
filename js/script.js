let ele; // для получения компонентов
let resultOfExp;
    // Функция очистки содержимого
function clearAll() {
    ele = document.getElementById("expression");
    ele.value = "";
    ele = document.getElementById("result")
    ele.value = "";
}

    // Объединить символ, соответствующий кнопке, в выражение
function inputExp(symbol) {
    ele = document.getElementById("expression");
    ele.value += symbol;
}

    // Рассчитать результат
function giveResult() {
    ele = document.getElementById("expression");
    resultOfExp = eval(ele.value);
    ele = document.getElementById("result");
    ele.value = resultOfExp;
}

    // Удалить по одному
function deleteSymbol() {
    ele = document.getElementById("expression");
    let exp = ele.value;
    let end = exp.length - 1;
    exp = ele.value.slice(0, end);
    ele.value = exp;
}