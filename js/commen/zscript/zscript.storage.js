if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.storage=function(){};
//set cookie
zscript.storage.setCookie=function(inName,inValue,inExpiry){
	if(typeof inExpiry=='Date'){
		inExpiry=inExpiry.toGTMString();
	}
	document.cookie=inName+"="+escape(inValue)+";expires="+inExpiry;
}
//get cookie
zscript.storage.getCookie=function(inName){
	var docCookies=document.cookie;
	var cIndex=docCookies.indexOf(inName+'=');
	var endStr=docCookies.indexOf(';',cIndex);
	if(endStr==-1){
		endStr=docCookies.length;
	}
	return unescape(docCookies.substring(cIndex,endStr));
}
//delete cookie
zscript.storage.deleteCookie=function(inName){
	if(this.getCookie(inName)){
		this.setCookie(inName,null,'Tue, 05 Jul 1999 05:13:10 GMT');
	}
}