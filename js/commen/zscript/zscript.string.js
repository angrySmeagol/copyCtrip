if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.string=function(){};
//sub str count
zscript.string.subStrCount=function(inStr,inSearchStr){
	if(inStr==null||inStr==''||inSearchStr==null||inSearchStr==''){
		return 0;
	}
	var splitChars=inStr.split(inSearchStr);
	return splitChars.length-1;
}
//strip chars
zscript.string.stripChars=function(inStr,inIsStripOrAllow,inCharList){
	var outStr="";
	var nextChar,checkChar,keepChar;
	var isStripOrAllow=inIsStripOrAllow.toLowerCase();
	
	for(var i=0;i<inStr.length;i++){
		nextChar=inStr.substr(i,1);
		if(isStripOrAllow=='allow'){
			keepChar=false;
		}
		if(isStripOrAllow=='strip'){
			keepChar=true;
		}
		for(var j=0;j<inCharList.length;j++){
			checkChar=inCharList.substr(j,1);
			
			if(isStripOrAllow=='allow'&&nextChar==checkChar){
				keepChar=true;	
			}
			if(isStripOrAllow=='strip'&&nextChar==checkChar){
				keepChar=false;
			}
		}
		if(keepChar){
			outStr+=nextChar;
		}
	}
	return outStr;
}
//string content valid
zscript.string.strContentValid=function(inStr,inCharList,inFromExcept){
	inFromExcept=inFromExcept.toLowerCase();
	if(inFromExcept=='from_list'){
		for(var i=0;i<inStr.length;i++){
			if(inCharList.indexOf(inStr.charAt(i))==-1){
				return false;
			}
		}
		return true;
	}
	if(inFromExcept=='not_from_list'){
		for(var i=0;i<inStr.length;i++){
			if(inCharList.indexOf(inStr.charAt(i))==1){
				return false;
			}
		}
		return true;
	}
	
}
//replace all sunstring
zscript.string.replace=function(inStr,inOld,inNew){
	while(inStr.indexOf(inOld)!=-1){
		inStr=inStr.replace(inOld,inNew);
	}
	return inStr;
}
//leftTrim
zscript.string.leftTrim=function(inStr){
	var i=0;
	for(i=0;inStr.charAt(i)==' ';i++){}
	return	inStr.substring(i,inStr.length);
}
//rightTrim
zscript.string.rightTrim=function(inStr){
	for(var i=inStr.length-1;inStr.charAt(i)==' ';i--){}
		return inStr.substring(0,i+1);
}
//fullTrim
zscript.string.fullTrim=function(inStr){
	inStr=this.leftTrim(inStr);
	inStr=this.rightTrim(inStr);
	return inStr;
}
//trim
zscript.string.trim=function(inStr){
	var outStr='';
	for(var i=0;i<inStr.length;i++){
		if(inStr.charAt(i)!=' '){
			outStr+=inStr.charAt(i);
		}
	}
	return outStr;
}
//breakLine
zscript.string.breakLine=function(inStr,inSize){
	var outArray=new Array();
	if(inStr==null||inStr==''||inSize<=0){
		return inSTr;
	}
	if(inStr.length<=inSize){
		return inStr;
	}
	while(inStr.length>inSize){
		var headStr=inStr.substring(0,inSize);
		var lastSpace=headStr.lastIndexOf(' ');
		var lastBreak=headStr.lastIndexOf('\n');
		if(lastBreak!=-1){
			lastSpace=lastBreak;
		}
		if(lastSpace==-1){
			lastSpace=inSize;
			outArray.push(headStr.substring(0,lastSpace));
			inStr=inStr.substring(lastSpace);
		}
		else{
			outArray.push(headStr.substring(0,lastSpace+1));
			inStr=inStr.substring(lastSpace+1);
		}
		
	}
	return outArray;
}