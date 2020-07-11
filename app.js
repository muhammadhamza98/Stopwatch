var min=0;
var sec=0;
var msec=0;
var minute=document.getElementById('min');
var second=document.getElementById('sec');
var msecond=document.getElementById('msec');
var interval;
function timer(){
	msec++
	msecond.innerHTML=msec;
	if(msec>=100){
		sec++
		second.innerHTML=sec;
		msec=0;
	}else if(sec>=10){
		min++
		sec=0;
		minute.innerHTML=min
    }
}
function play(){
interval=setInterval(timer,10)
}
function stop(){
	clearInterval(interval)  
}
function reset(){
  min=0;
  sec=0;
  msec=0;
  minute.innerHTML=min
  second.innerHTML=sec
  msecond.innerHTML=msec
  stop()
}
