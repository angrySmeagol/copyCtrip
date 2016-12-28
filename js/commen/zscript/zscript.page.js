if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.page=function(){};
zscript.page.printPage=function(){
	if(parseInt(navigator.appVersion)>=4){
		window.print();
	}
}
//get URL parameter
zscript.page.getParameter=function(inParamName){
	var retVal=null;
	var varVals=unescape(location.search.substring(1));
	if(varVals){
		var searchArray=varVals.split("&");
		var tempArray=new Array();
		for(var i=0,j=0;i<searchArray.length;i++){
			tempArray=searchArray[i].split('=');
			var pName=tempArray[0];
			var pValue=tempArray[1];
			if(inParamName==null){
				if(retVal==null){
					retVal=new Array();
				}
				retVal[j]=pName;
				retVal[j+1]=pValue;
				j+=2;
			}
			else{
				if(pName==inParamName){
					retVal=pValue;
					break;
				}
			}

		}
	}
	return retVal;
}
//break out of frames
zscript.page.breakOutOfFrames=function(){
	if(self!=top){
		top.location=self.location;
	}
}