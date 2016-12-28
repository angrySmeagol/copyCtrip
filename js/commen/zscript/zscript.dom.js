if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.dom=function(){};
//layerCenterH
zscript.dom.layerCenterH=function(inObj){
	var lca,lcb,lcx,scleft;

	window.innerWidth?lca=window.innerWidth:document.body.clientWidth;

	lcb=inObj.offsetWidth;

	lcx=Math.round(lca/2)-Math.round(lcb/2);

	window.pageXOffset?scleft=window.pageXOffset:scleft=document.body.scrollLeft;

	inObj.style.position='absolute';
	inObj.style.left=lcx+scleft+'px';
}
//layerCenterV
zscript.dom.layerCenterV=function(inObj){
	var lca,lcb,lcx,sctop;

	window.innerHeight?lca=window.innerHeight:document.body.clientHeight;

	lcb=inObj.offsetHeight;

	lcx=Math.round(lca/2)-Math.round(lcb/2);

	window.pageYOffset?sctop=window.pageYOffset:sctop=document.body.scrollTop;

	inObj.style.position='fixed';
	inObj.style.top=lcx+sctop+'px';
}
//execute javascript
zscript.dom.execScripts=function(inText){
	var si=0;
	while(true){
		var ss=inText.indexOf('<script',si);
		if(ss==-1) return;
		var sa=inText.indexOf('<script>',ss);
		var sb=inText.indexOf('<script type="text/javascript">',ss);
		if(sa==sb==-1) return;
		if(sa==-1){
			ss=sb;
			var se=inText.indexOf('</script>',ss);
			if(se==-1) return;
			var sc=inText.substring(ss+31,se);
		}
		else if(sb==-1){
			ss=sa;
			var se=inText.indexOf('</script>',ss);
			if(se==-1) return;
			var sc=inText.substring(ss+8,se);
		}
		else{
			ss=sa<sb?sa:sb;
			var se=inText.indexOf('</script>',ss);
			if(se==-1) return;
			var sc=sa<sb?inText.substring(ss+8,se):inText.substring(ss+31,se);
		}
		si=se+9;
		eval(sc);
	}	
}
//getDOMElements by ID
zscript.dom.getDOMElements=function(){
	if(arguments.length==0){
		return null;
	}
	if(arguments.length==1){
		return document.getElementById(arguments[0]);
	}
	var elems=new Array();
	for(var i=0;i<arguments.length;i++){
		elems.push(document.getElementById(arguments[i]));
	}
	return elems;
}
