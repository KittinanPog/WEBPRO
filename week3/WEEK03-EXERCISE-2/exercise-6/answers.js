function save () {
    // TODO: ให้ใช้ LocalStorage ในการบันทึก Array นี้ ด้วย key people
    const people = [
        { name: "Aariz Bennett", age: 24 },
        { name: "Najma Shaffer", age: 17 },
        { name: "Jill Schmitt", age: 32 },
        { name: "Anita Rose", age: 44 },
    ]
    const myJSON = JSON.stringify(people);
    localStorage.setItem("people", myJSON)
}

function read () {
    // TODO: อ่านค่า people จาก Local Storage
    let people = localStorage.getItem("people")
    const arr = JSON.parse(people)
    return arr
}

function remove () {
    // TODO: ลบ people จาก Local Storage
    localStorage.removeItem("people")
}