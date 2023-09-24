// Корреляция

function sumOfProducts(x, y, z) {
    if (!z) {
        z = 1
    }
    const meanX = x.reduce((a, b) => (a + b)) / x.length
    const meanY = y.reduce((a, b) => (a + b)) / y.length
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum = sum + (x[i] - meanX) ** z * (y[i] - meanY) ** z
    }
    return sum
}

function distributionOfPearson(x, y) {
    if (x.length !== y.length) {
        console.log("Массивы должны иметь одинаковую длину")
        return -1
    } else {
        const distribution = sumOfProducts(x, y) / Math.sqrt(sumOfProducts(x, y, 2))
        console.log(distribution)
        return distribution
    }
}

x = [1, 2, 3, 4, 5]
y = [6, 7, 8, 9, 10]

distributionOfPearson(x, y);