const array1 = [1, 15, 0, -3, 17, 0, 1, 3]
const array2 = [1, 15, 0, -3, 17, 0, 1, 3]

// Задача №1. Императивный стиль
function sortListImperative(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[j - 1]) {
                let tmp = numbers[j -1]
                numbers[j - 1] = numbers[j]
                numbers[j] = tmp
            }
        }
    }
    return numbers
}
console.log(`Императивный подход:\n ${array1}\n ${sortListImperative(array1)}`)

// Задача #2. Декларативный стиль
function sortListDeclarative(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers
}
console.log(`Декларативный подход:\n ${array2}\n ${sortListImperative(array2)}`)