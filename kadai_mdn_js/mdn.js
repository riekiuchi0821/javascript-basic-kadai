const date = new Date();

const today = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
]

console.log(today[0] + "年" + today[1] +"月" + today[2] + "日");