// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here

    if (confirm()) {
        let msg = "ยืนยันจ้า"
        callback(msg)
    }
    else {
        let msg = "ไม่ดีกว่า"
        callback(msg)
    }
}

// ข้อ 2.2



function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()

    setTimeout(() => {
        let div = document.getElementById('start')
        div.innerHTML = "Program started"
        setTimeout(() => {
            let div = document.getElementById('process')
            div.innerHTML = "Hellow World";
            setTimeout(() => {
                let div = document.getElementById('end')
                div.innerHTML = "Program ended"
            }, 3000)
        }, 2000)
    }, 0)

    
    

}

// ข้อ 2.3
function stopTime() {

}

