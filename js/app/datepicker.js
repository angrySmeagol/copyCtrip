$(function() {
	
	setPicker($("#check-in"),$("#check-out"));
	setPicker($("#check-in2"),$("#check-out2"));
	setOnePicker($("#check-in3"));

	
	function setOnePicker(input){
		var inputDom=input;
		var today=new Date();
		var tomorrow=new Date(today.valueOf() +86400000);

		inputDom.datepicker({
			numberOfMonths: 2
		});
		inputDom.datepicker('option', 'minDate', '+0d');
		inputDom.datepicker('option', 'maxDate', '+2m');
		inputDom[0].value=today.toLocaleDateString();
	}
	function setPicker(inputIn,inputOut){
		var today=new Date();
		var tomorrow=new Date(today.valueOf() +86400000);
		var inputDom=inputIn;
		var outputDom=inputOut;


		inputDom.datepicker({
		//beforeShowDay: $.datepicker.noWeekends,
		//altField: ".check-out",
		numberOfMonths: 2,
		onClose:function(dateText, inst){
			outputDom.datepicker('show');
		},
		//appendText: '(yyyy-mm-dd)' ,
		//buttonText: 'Choose',
		//changeMonth: true,
		//changeYear: true
		});
		outputDom.datepicker({
			numberOfMonths: 2,
			beforeShow : function(input){
				var checkIn=inputDom.datepicker( 'getDate' );
				var checkedOut=outputDom.datepicker( 'getDate' );
				
				var today=new Date();
				today.setHours(0);
				today.setMinutes(0);
				today.setSeconds(0);
				today.setMilliseconds(0);
				var checkOut=new Date(checkIn.valueOf()+86400000);
				var afterDays=(checkIn-today)/86400000+1;
				if(checkedOut.valueOf()<=checkIn.valueOf()){
					outputDom.datepicker('setDate',checkOut);
				}
				
				outputDom.datepicker('option', 'minDate', '+'+afterDays+'d');
				outputDom.datepicker('option', 'maxDate', '+3w '+'+'+afterDays+'d');
			}
		});
		$.datepicker.setDefaults({
		});
		inputDom.datepicker('option', 'minDate', '+0d');
		inputDom.datepicker('option', 'maxDate', '+2m');

		outputDom.datepicker('option', 'minDate', '+1d');
		outputDom.datepicker('option', 'maxDate', '+3w');
		inputDom[0].value=today.toLocaleDateString();
		outputDom[0].value=tomorrow.toLocaleDateString();

	};
		

////
	$(".search-block-ul").bind("click",function(e){
		var target = e.target || e.srcElement;
		var li=$(".search-block-li");
		var form=$(".form-block");
		var index=0;
		
		if(target.nodeName.toLowerCase()=="li"){
			if(target==$(".search-block-li.active")[0]){
				return;
			}
			for(var i=0;i<li.length;i++){
				if(target==li[i]) index=i;
			}
			$(".search-block-li.active").attr("class","search-block-li");
			$(target).attr("class","search-block-li active");
			$(".form-block.active").attr("class","form-horizontal form-block");
			$(form[index]).attr("class","form-horizontal form-block active");

		}
	});
});