// Завдання 1.1: Рахуємо площу кола
const radiusCircle = 7; // Тут твій радіус кола
const circleArea = Math.PI * (radiusCircle ** 2); // Формула π * r²
console.log(`Площа кола: ${circleArea.toFixed(2)}`); // Округлили до 2 знаків

// Завдання 1.2: Рахуємо площу прямокутника
const length = 12; // Довжина
const width = 6;   // Ширина
const rectangleArea = length * width;
console.log(`Площа прямокутника: ${rectangleArea.toFixed(2)}`);

// Завдання 1.3: Рахуємо об'єм циліндра
const radiusCylinder = 4; // Радіус основи
const height = 10;        // Висота циліндра
const cylinderVolume = Math.PI * (radiusCylinder ** 2) * height;
console.log(`Об'єм циліндра: ${cylinderVolume.toFixed(2)}`);
