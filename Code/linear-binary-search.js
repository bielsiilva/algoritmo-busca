// Busca linear
function linearSearch(array, target) {
    let index = -1
    let count = 0
    for(let i = 0; i < array.length; i++) {
        count++
        if (array[i] == target) {
            console.log(`A busca linear levou ${count} etapas`)
            index = i
        }
    }
    return index
}

// Busca binária
// Sempre iremos dividir o número total de números na lista pelo número 2 e assim continuamente para chegarmos até o valor desejado.
function binarySearch (array, target) {
    
    let firstIndex = 0
    let lastIndex = array.length - 1
    let midIndex = 0
    let count = 0

    while (lastIndex >= firstIndex) {
        count++
        midIndex = Math.floor((firstIndex + lastIndex) / 2)
        if (target > array[midIndex]) {
            firstIndex = midIndex + 1
        } else if (target < array[midIndex]) {
            lastIndex = midIndex
        } else {
            console.log(`A busca binária levou ${count} etapas`)
            return midIndex
        }
    }
    return -1
}

const array =  [1, 2, 3, 4, 5, 6, 7, 8]
const target = 7
const linearIndex = linearSearch(array, target)
const binaryIndex = binarySearch(array, target)
console.log(`Busca linear - Achou o elemento no index ${linearIndex}`)
console.log(`Busca binária - Achou o elemento no index ${binaryIndex}`)