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
    var Time =  document.getElementById('Time').value;

   setInterval(function () {  
    if(Time >=0){
        var Minute = Math.floor(Time/60);
        var Second = Time%60;
        if(Minute<=9){
            document.getElementById('setMinute').innerHTML = '0'+ Minute;
        }
        else{
            document.getElementById('setMinute').innerHTML = Minute;
        }
        if(Second<=9){
        document.getElementById('setSecond').innerHTML =  '0'+ Second;
        }
        else{
            document.getElementById('setSecond').innerHTML = Second;
        }
        Time--;
    }
    else{
        clearInterval
    }
    }, 1000);
}

