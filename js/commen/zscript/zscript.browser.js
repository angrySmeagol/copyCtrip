if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.browser=function(){};
//getBrowserIdentity
zscript.browser.getBrowserIdentity=function(){
	return navigator.appName+" "+navigator.appVersion;
}