let twoDigit = prompt("Введите двузначное число: ");
twoDigit = parseFloat(twoDigit);
let reverseTwoDigit = String(twoDigit % 10) + String(Math.floor(twoDigit / 10));
alert("Перестановка цифр числа " + twoDigit + " = " + reverseTwoDigit);
