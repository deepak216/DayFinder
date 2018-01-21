
function getDay(){
	var dict = {
	1: "monday",
	2: "tuesday",
	3: "wednesday",
	4: "thursday",
	5: "friday",
	6: "saturday",
	0: "sunday"
	};
	var inputValue=document.getElementById("textCaculateDay").value;
	var splitInput=inputValue.split("/");
	var day=parseInt(splitInput[0]);
	var month=parseInt(splitInput[1]);
	var year=parseInt(splitInput[2]);
	var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
	year=year-(month<3);
	var res=( (year) + parseInt(year/4) - parseInt(year/100) + parseInt(year/400) + t[month-1] + day) % 7;
	var insert="<h3>"+dict[res]+"</h3>";
	document.getElementById("calculate_day").innerHTML=insert;
}

document.getElementById("getDay").onclick=getDay;