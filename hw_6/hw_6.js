// Бинарный поиск

function binarySearch(array, number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === number) {
      return mid;
    } else if (array[mid] < number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function search() {
  const arrayInput = document.getElementById("arrayInput").value;
  const numberInput = document.getElementById("numberInput").value;

  const array = arrayInput.split(",").map(Number);
  const number = parseInt(numberInput);

  const result = binarySearch(array, number);

  document.getElementById("result").textContent = "Result: " + result;
}
