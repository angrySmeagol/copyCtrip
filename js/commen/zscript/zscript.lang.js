if(typeof zscript=='undefined'){
	zscript=function(){}
}
zscript.lang=function(){};
//copy properties
zscript.lang.copyProperties=function(inSrcObj,inDestObj,inOverride){
	for(var prop in inSrcObj){
		if(inOverride||!inDestObj[prop]){
			inDestObj[prop]=inSrcObj[prop];
		}
	}
	return inDestObj;		
}