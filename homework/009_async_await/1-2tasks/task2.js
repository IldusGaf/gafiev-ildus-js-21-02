// 2 задание
const textTimer = document.getElementById('secondTime');

        let sec = 9;
        timer = setInterval(()=>{
                textTimer.innerHTML = (sec < 2) ? sec+" секунду" : ((sec < 5) ? sec+" секунды" : sec+" секунд");
                sec--;
                if (sec===0){
                    window.location = 'https://maxima.life';
                    clearInterval(timer);
                }
           },1000);
