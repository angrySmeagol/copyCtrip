if(typeof zscript=='undefined'){
	zscript=function (){};
}
zscript.array=function(){};
//copyArray
zscript.array.copyArray=function(inSrcArray,inDestArray){
	var destLenth=inDestArray.length;
	for (var i = 0; i <= inSrcArray.length-1; i++){
		inDestArray[destLenth+i]=inSrcArray[i];
	}
	return inDestArray;
}
//findInArray
zscript.array.findFirstInArray=function(inArray,inValue){
	for(var i=0;i<=inArray.length-1;i++){
		if(inArray[i]==inValue){
			return i; 
		}
	}
	return -1;
}
zscript.array.findAllInArray=function(inArray,inValue){
	var containerArray=[];
	for(var i=0;i<=inArray.length-1;i++){
		if(inArray[i]==inValue){
			containerArray.push (i); 
		}
	}
	return containerArray;
}
//arrayAverage
zscript.array.arrayAverage=function(inArray){
	var accumulator=0;
	for(var i=0; i<=inArray.length-1;i++){
		accumulator+=inArray[i];
	}
	return accumulator / inArray.length;	
}