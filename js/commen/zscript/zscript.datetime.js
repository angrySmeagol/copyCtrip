if(typeof zscript == 'undefined'){
	zscript=function(){};
}
zscript.datetime=function(){};
//isLeapYear
zscript.datetime.isLeapYear=function(inYear){
	if((inYear%4==0&&inYear%100!=0)||inYear%400==0){
		return true;
	}
	else return false;
}
//getNumberDaysInMonth
zscript.datetime.getNumberDaysInMonth=function(inMonth,inYear){
	var leapYear=this.isLeapYear(inYear);
	leapYear==true?leapYear=1:leapYear=0;

	if(inMonth==4||inMonth==6||inMonth==9||inMonth==11){
		return 30;
	}
	else if(inMonth==2){
		return 28+leapYear;
	}
	else return 31;
}