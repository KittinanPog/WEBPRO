const { Value } = require("react-native-reanimated")

function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    var ans = input.map(input => {
        return input**2
    })
    return ans
}


function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
    
    var ans = input.map((val) => {
        return {
            date:val.date,
            temperature:fah_to_celsius(val.temperature)
        }
    })
    return ans
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    var result = input.filter((even) => even%2==0)
    return result
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
    var result = input.people.filter((val) => {
        if (val.age >= input.min && val.age <= input.max){
        return {
            name:val.name,
            age:val.age
        }
    }
    })
    return result
    
}


function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    var result = input.people.filter((val) => val.id !== input.removeId)
    return result
        

}

function replaceBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
    input.splice(4, 1, 4)
    return input
}
