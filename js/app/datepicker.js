$(function() {
	var today=new Date();
	var tomorrow=new Date(today.valueOf() +86400000);
	
	$( "#check-in" ).datepicker({
		//beforeShowDay: $.datepicker.noWeekends,
		//altField: "#check-out",
		numberOfMonths: 2,
		onClose:function(dateText, inst){
			$("#check-out").datepicker('show');
		},
		//appendText: '(yyyy-mm-dd)' ,
		//buttonText: 'Choose',
		//changeMonth: true,
		//changeYear: true
	});
	$( "#check-out" ).datepicker({
		numberOfMonths: 2,
		beforeShow : function(input){
			var checkIn=$("#check-in").datepicker( 'getDate' );
			var checkedOut=$("#check-out").datepicker( 'getDate' );
			
			var today=new Date();
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);
			today.setMilliseconds(0);
			var checkOut=new Date(checkIn.valueOf()+86400000);
			var afterDays=(checkIn-today)/86400000+1;
			if(checkedOut.valueOf()<=checkIn.valueOf()){
				$("#check-out").datepicker('setDate',checkOut);
			}
			
			$("#check-out").datepicker('option', 'minDate', '+'+afterDays+'d');
			$("#check-out").datepicker('option', 'maxDate', '+3w '+'+'+afterDays+'d');
		}
	});
	$.datepicker.setDefaults({
	});
	$("#check-in").datepicker('option', 'minDate', '+0d');
	$("#check-in").datepicker('option', 'maxDate', '+2m');

	$("#check-out").datepicker('option', 'minDate', '+1d');
	$("#check-out").datepicker('option', 'maxDate', '+3w');
	$(".datepicker")[0].value=today.toLocaleDateString();
	$(".datepicker")[1].value=tomorrow.toLocaleDateString();


	;

});