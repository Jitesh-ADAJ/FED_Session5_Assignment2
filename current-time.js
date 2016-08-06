var a1= new Date();
var hrs = a1.getHours();
var min = a1.getMinutes();
	if(min<10)
		{
			min="0"+min;
			
		}
time = hrs +":"+ min;

console.log(time);