if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.math=function(){};
zscript.math.genRandomNumber=function(inMin,inMax){
	if(inMin>inMax){
		return 0;
	}
	return inMin+(inMax-inMin)*Math.random();
}