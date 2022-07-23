const arr = [1, 2, 3, 3]
const set = new Set(arr)
console.log(set)

console.log(Array.from(set))//set轉成array第1種方法
console.log([...set])//set轉成array第2種方法
const aa = [...arr, ...'bbb', 'ccc'] //...→ 將裡面的內容都拆開，依照[]拆開，若放"{}物件"會轉成{}
console.log(aa)

const person = {
    name: 'abc',
    age: 18,
    height: 170
}

const { name, ...obj } = person //將物件裡的name拆開逗號後面塞其餘的物件

console.log(name)
console.log(obj)



