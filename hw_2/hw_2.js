// Таблица умножения

const number = 9

function multiplicationTable (number) {
    let stringArr = []
    for (let i = 0; i < number + 1; i++) {
        i === 0 ? stringArr.push('') : stringArr.push(i)
        for (let j = 0; j < number; j++) {
            i === 0 ? stringArr.push(j + 1) : stringArr.push(i * (j + 1))
        }
        console.log(stringArr.join('\t'))
        stringArr.length = 0
    }
}

multiplicationTable(number)