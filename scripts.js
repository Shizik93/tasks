const maxSequence = (array) => {
    if (array.every(el => el <= 0) || array.length === 0) {
        return 0
    }
    if (array.every(el => el >= 0) || array.length === 0) {
        return array.reduce((acc, el) => acc + el)
    }
    let left = 0
    let right = array.length - 1
    let start = 0
    let end = array.length - 1
    let result
    while (left < right) {


        if (array[left] > 0) {
            start = left
        } else {
            left++
        }
        if (array[right] > 0) {
            end = right
        } else {
            right--
        }

        if (!result) {
            result = array.slice(start, end + 1)
        } else {
            const currentSum = result?.reduce((acc, el) => acc + el)
            const arraySum = array.slice(start, end + 1).reduce((acc, el) => acc + el)
            if (arraySum > currentSum) {
                console.log(array.slice(start, end + 1))
                result = array.slice(start, end + 1)
                left++
            } else {
                right--
            }
        }
    }
    console.log(result)
    return result.reduce((acc, el) => acc + el) <= 0 ? 0 : result.reduce((acc, el) => acc + el)

}

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

//console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])) //0
//console.log(maxSequence([-10])) //0
//console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43])) //155
//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //6
//console.log(maxSequence([28, -48, -47])) //28
//console.log(getMaxSubSum([-44,-45,41,47,4,22,-24,27,47,34,-42,-34,-10,34,-40,-15,-22,8,16,-9,-24,-13,0,10,-24,21,-27,47,-2,37,-24,-24,14,-42,39,-28,-42,-5,-20,40,-38,-20,4,-22,-13,-19,-12,-18,-28,10,12,1,-32,25,-35,39])) //198

const fib = (n) => {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}


const foo = (num) => {
    let number = 0
    let prevRes
    const result = []
    while (true) {
        const currentRes = (fib(number))
        if (num <= prevRes * currentRes) {
            result.push(prevRes)
            result.push(currentRes)
            if (prevRes * currentRes === num) {
                result.push(true)
            } else {
                result.push(false)
            }
            break
        }
        prevRes = fib(number)
        number++
    }
    return result
}
console.log(foo(5895))


/* START 1 */
/* Дан массив объектов. Необходимо написать функцию группировки */
const data = [{
    country: 'country1', city: 'city11',
}, {
    country: 'country2', city: 'city21',
}, {
    country: 'country3', city: 'city31',
}, {
    country: 'country1', city: 'city12',
}, {
    country: 'country1', city: 'city13',
}, {
    country: 'country2', city: 'city22',
}, {
    country: 'country3', city: 'city32',
},];

/**
 * @param {typeof data} arr
 */
function groupByCountry(arr) {
    return arr.reduce((acc, el) => {
        const key = el.country
        const data = el.city
        if (!acc[key]) {
            acc[key] = []

        }
        acc[key].push(data)
        return acc
    }, {})
}


console.log(groupByCountry(data));

/* Должна получиться структура ниже
{
    'country1': [
        'city11', 'city12', 'city13',
    ],
    'country2': [
        'city21', 'city22'
    ],
    'country3': [
        'city31', 'city32'
    ],
}
 */

/* END 1 */

/* START 2 */
/* Дан объект ниже. Необходимо написать функцию, которая превратит группы в плоский массив объектов */
const events = {
    '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
    '2019-12-30': ['name4', 'name8', 'name9'],
    '2019-12-31': ['name3', 'name6'],
};

/**
 * @param {Record<string, string[]>} obj
 */
function groupsToArray(obj) {
    return Object.keys(obj).reduce((acc, key) => [...acc, ...events[key].map(event => ({date: key, event}))], [])
}

console.log(groupsToArray(events));

/* Должна получиться структура ниже
let events = [
    {
        date:  '2019-12-29'
        event: 'name1'
    },
    {
        date:  '2019-12-31'
        event: 'name2'
    },
    {
        date:  '2019-12-29'
        event: 'name3'
    },
    {
        date:  '2019-12-30'
        event: 'name4'
    },
    {
        date:  '2019-12-29'
        event: 'name5'
    },
    {
        date:  '2019-12-31'
        event: 'name6'
    },
    {
        date:  '2019-12-29'
        event: 'name7'
    },
    {
        date:  '2019-12-30'
        event: 'name8'
    },
    {
        date:  '2019-12-30'
        event: 'name9'
    },
]
*/

/* END 2 */

/* START 3 */
// Дана строка, содержащая в себе любое количество вложенных парных круглых скобок. Напишите код, который проверит, что скобки расположены корректно.

// Так корректно:

const str1 = '()()';
const str2 = '(())';

// Так некорректно, так как количество открытых скобок не совпадает с количеством закрытых:

const str3 = '()))';

// Так некорректно, так как, хотя количество открытых скобок и совпадает с количеством закрытых, но у них неправильный порядок:

const str4 = '))((';
const str5 = '(SDS(SDSD)())(sdsds)((()()))';

/**
 * @param {string} text
 */
function checkValidBracersInString(text) {
    let result = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            result++
        }
        if (text[i] === ')') {
            result--
        }
        if (result < 0) {
            return false
        }
    }
    return result === 0

}

// закрывающих скобок не может быть больше чем открывающих в любой момент прохода

console.log(checkValidBracersInString(str1)); // true
console.log(checkValidBracersInString(str2)); // true
console.log(checkValidBracersInString(str3)); // false
console.log(checkValidBracersInString(str4)); // false
console.log(checkValidBracersInString(str5)); // true
/* END 3 */

const util = (el, length) => {

    let result = el.toUpperCase()
    for (let i = 1; i <= length; i++) {
        result += el.toLowerCase()
    }
    return result
}
const accum = (str) => {
    const arr = str.split('')
    return arr.map(util).join('-')
}
console.log(accum('ZpglnRxqenU'))

const arr1 = [[11, 2, 4, 3], [1, 6, 8, 7], [10, 13, 15, 5], [16, 9, 12, 14]]
const foo1 = (arr) => {
    const length = arr[0].length
    const result = []
    const flatArray = arr.flat().sort((a, b) => a - b)
    for (let i = 0; i < length; i++) {
        result.push(flatArray.splice(0, length))
    }
    return result
}
console.log(foo1(arr1))


const pigIt = (str) => {
    const array = str.split(' ')
    return array.reduce((acc, el) => {
        if (el.match(/\w/gm)) {
            const last = el[0] + 'ay '
            acc += el.slice(1) + last
            return acc
        }
        acc += el
        return acc

    }, '').trim()
}
console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'));

const firstNonRepeatingLetter = (str) => {
    const obj = str.split('').reduce((acc, el) => {
        const key = el.toLowerCase()
        if (!acc[key]) {
            acc[key] = {count: 0, key: el}
        }
        acc[key].count++
        return acc
    }, {})
    const key = Object.keys(obj).find(el => obj[el].count === 1)
    return obj[key] ? obj[key]?.key : ''
}

console.log(firstNonRepeatingLetter('moonmen')) //e
console.log(firstNonRepeatingLetter('sTress')) //T
console.log(firstNonRepeatingLetter('a')) //a


const orderWeight = (str) => {
    const result = []
    let accum = null
    for (let i = 0; i < str.length; i++) {


        if (Number(str[i]) >= 0) {
            if (accum === null) {
                accum = 0
            }
            accum += Number(str[i])
        }
        if ((str[i] === ' ' && accum !== null) || i === str.length - 1) {
            result.push(accum)
            accum = null
        }
    }
    return str.split(' ').filter(el => el !== ' ').map((el, index) => ({
        key: el, count: result[index]
    })).sort((a, b) => {
        if (a.count === b.count) {
            if (a.key < b.key) {
                return -1;
            }
            if (a.key > b.key) {
                return 1;
            }
            return 0;
        }
        return a.count - b.count
    }).reduce((acc, el) => acc += el.key + ' ', '').trim()


}
console.log(orderWeight("103 123 4444  99 2000"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function zeros(n) {
    if (getBaseLog(5, n) % 5 > 1) {
        return Math.floor(n / 25 + n / 5)
    }
    return Math.floor(n / 25 + n / 5)

}


console.log(getBaseLog(5, 50), 'log')
console.log(zeros(0))
console.log(zeros(5))
console.log(zeros(50))
console.log(zeros(1000))

const hhh = 'SdSScxcFxcFcF'
const hh = hhh.replaceAll(/[A-Z]/gm, (value) => '_' + value.toLowerCase())
console.log(hh)


/* В константе указан текст. */
const textData = `Some text with many words. And some little text without words. Need calculate count of equals words and his percent`

/* Необходимо посчитать количество раз, которое каждое слово встречается в тексте, а также процентное содержание этого слова в текста. */

/**
 * @param {string} text
 */
function getDataAboutWordsInText(text) {
    const newText = text.replace(/[^\w\s]/gm, '').toLowerCase()
    const arr = newText.split(' ')
    const length = arr.length
    return arr.reduce((acc, key) => {
        if (!acc[key]) {
            acc[key] = {count: 0, percent: 0}
        }
        acc[key].count++
        acc[key].percent = acc[key].count / length * 100
        return acc

    }, {})


}


console.log(getDataAboutWordsInText(textData))

// Написать свою реализацию метода `.map()` для массива.

Array.prototype.myMap = function (callback, thisArgs) {
    const result = []
    for (let i = 0; i < this.length; i++) {

        result.push(callback.call(thisArgs, this[i], i, this))
    }
    return result
}

const arr = [1, 2, 3, null, undefined, 5]

function someFunctionForMap(el, index) {
    return +el + this[index]
}

console.log('native map = ', arr.map(someFunctionForMap, [11, 22, 33, 44, 55, 66])) // [12, 24, 36, 44, NaN, 71]
console.log('custom map = ', arr.myMap(someFunctionForMap, [11, 22, 33, 44, 55, 66])) // [12, 24, 36, 44, NaN, 71]

console.log('native map = ', arr.map((el) => +el)) // [1, 2, 3, 0, NaN, 5]
console.log('custom map = ', arr.myMap((el) => +el)) // [1, 2, 3, 0, NaN, 5]


// Дан список каких-то данных за определенные даты, хранящийся в следующей структуре:

const someData = [{
    year: 2019, month: 11, day: 20, data: ['event1', 'event2']
}, {
    year: 2019, month: 11, day: 21, data: ['event983']
}, {
    year: 2019, month: 12, day: 25, data: ['event01', 'event27', 'event344']
}, {
    year: 2019, month: 12, day: 26, data: ['event133', 'event31']
}, {
    year: 2020, month: 10, day: 29, data: ['event1111', 'event22', 'event33']
}, {
    year: 2020, month: 10, day: 30, data: ['event3']
}, {
    year: 2020, month: 11, day: 19, data: ['event5', 'event8', 'event213']
}, {
    year: 2020, month: 11, day: 23, data: ['event1', 'event4']
}, {
    year: 2020, month: 11, day: 20, data: ['event1', 'event4']
},]

function createGroups(arr) {
    return arr.reduce((acc, el) => {
        const {year, month, day, data} = el
        if (!acc[year]) {
            acc[year] = {[month]: {[day]: data}}
        }
        if (!acc[year][month]) {
            acc[year][month] = {[day]: data}
        }
        if (!acc[year][month][day]) {
            acc[year][month][day] = data
        }
        return acc
    }, {})
}

console.log(createGroups(someData))
// Напишите код, которой переделает структуру данных в структуру вида:

/* {
    год1: {
        месяц1: {
            день1: [массив данных],
            день2: [массив данных],
            день3: [массив данных],
        }
        месяц2: {
            день1: [массив данных],
            день2: [массив данных],
            день3: [массив данных],
        }
    }
    год2: {
        месяц1: {
            день1: [массив данных],
            день2: [массив данных],
            день3: [массив данных],
        }
        месяц2: {
            день1: [массив данных],
            день2: [массив данных],
            день3: [массив данных],
        }
    }
} */

// Есть обычный csv-файл. Разделитель - точка с запятой. Его контент описан ниже в переменной.
// Первая строка в файле (до первого \n) - заголовки колонок.
const csvFileContent = `myJinn2015;round777;smile67;Dentzil;SteffenVogel_79\n17945;10091;10088;3907;10132\n2;12;13;48;11`


// Написать функцию, которая сортирует колонки вместе с их контентом в алфавитном порядке названий колонок. Пример работы функции ниже:
/*
До сортировки:
(НЕ НУЖНО выводить данные в таком виде, это просто для наглядности)
|myJinn2015|round777|smile67|Dentzil|SteffenVogel_79|
|17945     |10091   |10088  |3907   |10132          |
|2         |12      |13     |48     |11             |
 */

/*
After sorting:
As table (only visualization):
|Dentzil|myJinn2015|round777|smile67|SteffenVogel_79|
|3907   |17945     |10091   |10088  |10132          |
|48     |2         |12      |13     |11             |
*/

/**
 * @param {string} csvString
 */
function sortCSVData(csvString) {

    const ggg = csvString.split(/\n/)
    const arr = ggg.reduce((acc, el) => { // Высота столбца
        acc.push(el.split(';'))
        return acc
    }, [])
    const map = arr[0].map((el, index) => ({key: el, index}))
    map.sort((a, b) => a.key.localeCompare(b.key))
    const newMap = map.map((el, index) => {
        return el.index
    })
    const length = newMap.length
    const flat = arr.flat()
    for (let i = 0; i < flat.length - length; i++) {
        newMap.push(newMap[i] + length)
    }
    const newFlat = newMap.reduce((acc, el) => {
        acc.push(flat[el])
        return acc
    }, [])
    let count = 0
    let res = []
    const kkk = newFlat.reduce((acc, el, index) => {
        res.push(el)
        count++
        if (count === length) {
            acc.push(res)
            count = 0
            res = []

        }
        return acc

    }, []).reduce((acc, el) => {
        acc.push([el.join(';')])
        return acc
    }, []).join('\n')

    return kkk
}

//console.log(sortCSVData(csvFileContent))

function sortCSVData2(csvString) {
    const array = csvString.split(/\n/).map(el => el.split(';'))
    const sortArray = [...array[0]].sort((a, b) => a.localeCompare(b))
    const currentArray = sortArray.reduce((acc, el,) => {
        const idx = array[0].indexOf(el)
        array.forEach((element, index) => {
            if (!acc[index]) {
                acc[index] = []
            }
            acc[index].push(element[idx])
        })
        return acc
    }, [])
    console.table(currentArray)
    return currentArray.map(el => el.join(';')).join('\n')

}

console.table(sortCSVData2(csvFileContent))

const HOURS = ["0 - 2", "2 - 4", "4 - 6", "6 - 8", "8 - 10", "10 - 12", "12 - 14", "14 - 16", "16 - 18", "18 - 20", "20 - 22", "22 - 24"];
const DATA = [{time: 0, data: [{v: 10}]}, {time: 2, data: [{v: 2}]}, {time: 3, data: [{v: 0}]}, {
    time: 7, data: [{v: 1111}]
}, {time: 8, data: [{v: 234}]}, {time: 12, data: [{v: 505}]}];

// // Нужно создать новый массив объектов,
// // где объекты из DATA, будут суммировать значение v в data по ключу time, в зависимости от массива HOURS
// // т.е при значениях { time: 0, data: [{ v: 10 }] }, { time: 2, data: [{ v: 2 }] },
// // мы должны получить ответ { time: '0-2', data: 12 }
// // [{ time: '0-2', data: 12 }, { time: '2-4', data: 2 }, ..., { time: '22-24', data: 0 }]

const objSum = (array, hours) => {

    const map = array.reduce((acc, el) => {
        acc[el.time] = el.data[0].v
        return acc
    }, {})

    return hours.map((el) => {
        const [firstKey, secondKey] = el.split('-').map(el => Number(el))
        const first = map[firstKey] ? map[firstKey] : map[firstKey + 1]
        const second = map[secondKey] ? map[secondKey] : map[secondKey - 1]
        const obj = {time: el, data: 0}
        if (first !== undefined && second !== undefined) {
            obj.data = first + second
        }
        return obj
    })
}
console.log(objSum(DATA, HOURS))

function extend(...args) {
    if (!args || args.length === 0) {
        return {}
    }

    return args.reduce((acc, el) => {
        Object.keys(el).forEach(key => {
            if (acc[key] === undefined && (typeof el === 'object' && el !== null && !Array.isArray(el))) {
                acc[key] = el[key]
            }
        })
        return acc
    }, {...args[0]})
}

console.log(extend())

const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
const findNumber = (num, matrix) => {
    const length = matrix[0].length
    let row = 0
    let column = length - 1
    while (row < length && column >= 0) {
        console.log(matrix[row][column])
        if (matrix[row][column] === num) {
            return matrix[row][column]
        }
        if (num < matrix[row][column]) {
            column--
        } else {
            row++
        }
    }
    return null
}
console.log(findNumber(30, matrix), '------findNumber-------')


function disemvowel(str) {
    const array = ['a', 'e', 'u', 'i', 'o', 'A', 'E', 'U', 'I', 'O']
    return str.split('').reduce((acc, el) => {
        if (!array.includes(el)) {
            acc += el
        }
        return acc
    }, '')
}

console.log(disemvowel("This website is for losers LOL!"))

function firstNSmallest(array, n) {
    const arrayCopy = [...array]
    const result = []
    for (let i = 0; i < n; i++) {

        const min = Math.min(...arrayCopy.filter(el => el !== null))
        const index = arrayCopy.indexOf(min)
        arrayCopy.splice(index, 1)
        result[index] = min
        arrayCopy.splice(index, 0, null)
    }
    console.log(result.filter(el => typeof el !== undefined))
    return result.filter(el => typeof el !== undefined)
}

firstNSmallest([1, 2, 3, 4, 5], 3)
firstNSmallest([5, 4, 3, 2, 1], 3)
firstNSmallest([1, 2, 3, 4, 1], 3)
firstNSmallest([1, 2, 3, -4, 0], 3)
firstNSmallest([1, 2, 3, 4, 5], 0)
const largeArray = Array.from({length: 1300000}, (v, i) => i)
console.log(largeArray.reduce((acc, el) => {
    if (el > acc) {
        acc = el
    }
    return acc
}, 0))

function firstNSmallestFast(array, n) {
    const foo = array.length - n;
    for (let i = 0; i < foo; i++) {
        let maxValue = -Infinity;
        for (const item of array) {
            // Find maximum value
            if (item > maxValue) maxValue = item;
        }
        const maxIdx = array.lastIndexOf(maxValue);
        array.splice(maxIdx, 1);
    }
    return array;
}

console.log(firstNSmallestFast([1, -3, -4, 4, 2, -2, 6, -7, 5, -6, 5, -4, 9, 7, -4], 4))