zscript=function(){};
zscript.ui=function(){};
zscript.ui.alerts=function(){};
zscript.ui.alerts.showErrorAlert=function(){
	alert("An error occurred");
}
zscript.ui.alerts.MessageDisplayer=function(inMsg){
	this.msg=inMsg;
	this.toString=function(){
		return "msg="+this.msg;
	}
}

//zquery.string   PAKEAGE

