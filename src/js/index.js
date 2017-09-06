window.addEventListener("load", function() {

    window.addEventListener("scroll", function() {

        var winH = window.innerHeight;
        var boxbottom = (numArea.offsetTop + numArea.offsetHeight / 1.8) - window.pageYOffset;
        var status = false;

        if(boxbottom < winH) {
            status = true;
        }
        if(true == status) {
            numberCounting();
        }

    });

});

function animateValue(id, start, end, duration) {
    
    var obj = document.getElementById(id);
    var range = end - start;
    
    var minTimer = 50;
    
    var stepTime = Math.abs(Math.floor(duration / range));
    
    stepTime = Math.max(stepTime, minTimer);
    
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

var active = false;
function numberCounting() {
    
    var numArea = document.getElementById("numArea");
    var val01 = document.getElementById("val01");

    if(false == active) {
        animateValue("val01", 0, 5000, 800);
        animateValue("val02", 0, 20000, 800);
        animateValue("val03", 0, 800000, 800);
        active = true;
    }
}



