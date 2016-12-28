if(typeof zscript=='undefined'){
	zscript=function(){};
};
zscript.form=function(){};
//form to XML
zscript.form.formToXML=function(inForm,inRootElement){
	if(inForm==null){
		return null;
	}
	if(inRootElement==null){
		return null;
	}
	var outXML="<"+inRootElement+">";
	for(var i=0;i<inForm.length;i++){
		//out form element
		var ofe=inForm[i];
		var ofeType=ofe.type.toUpperCase();
		var ofeName=ofe.name;
		var ofeValue=ofe.value;
		if(ofeType=="TEXT"||ofeType=="HIDDEN"||ofeType=="SELECT-ONE"||ofeType=="PASSWORD"|| ofeType=="TEXTAREA"){
			outXML+="<"+ofeName+">"+ofeValue+"</"+ofeName+">";
		}
		if(ofeType=="RADIO"&&ofe.checked==true){
			outXML+="<"+ofeName+">"+ofeValue+"</"+ofeName+">";
		}
		if(ofeType=="CHECKBOX"){
			if(ofe.checked==true){
				var cbval='true';
			}
			else{
				var cbval='false';
			}
			outXML+="<"+ofeName+">"+cbval+"</"+ofeName+">";	
		}
		if(ofeType=="SELECT-MULTIPLE"){
			outXML+="<"+ofeName+">";
			for(var j=0;j<ofe.options.length;j++){
				//out option element
				var ooe=ofe.options[j];
				var ooeName=ofe.options[j].value;
				if(ooe.selected==true){
					var slval='true';
				}
				else{
					var slval='false';
				}
				outXML+="<"+ooeName+">"+slval+"</"+ooeName+">";
			}
			outXML+="</"+ofeName+">";
		}
	}
	outXML+="</"+inRootElement+">";
	return outXML;
}
//select locate option
zscript.form.selectLocateOption=function(inSelect,inValue,inJustFind,inCaseInsensitive){
	if(inSelect==null||
	inValue==null||inValue==''||
	inJustFind==null||
	inCaseInsensitive==null){
		return;	
	}
	if(inCaseInsensitive){
		inValue=inValue.toLowerCase();
	}
	var found=false;
	for(var i=0;i<inSelect.length&&!found;i++){
		var nextVal=inSelect.options[i].value;
		if(inCaseInsensitive){
			nextVal=nextVal.toLowerCase();
		}
		if(nextVal==inValue){
			found=true;
			if(!inJustFind){
				inSelect.options[i].selected=true;
			}
		}
		
	}
	return found;
}
//select all option
zscript.form.selectSelectAll=function(inSelect){
	if(inSelect==null||typeof inSelect=='undefined'||
		!inSelect.options||inSelect.options.length==0){
		return ;
	}
	for(var i=0;i<inSelect.length;i++){
		inSelect.options[i].selected=true;
	}
}
//do not select 
zscript.form.selectUnSelectAll=function(inSelect){
	if(inSelect==null||typeof inSelect=='undefined'||
		!inSelect.options||inSelect.options.length==0){
		return ;
	}
	for(var i=0;i<inSelect.length;i++){
		inSelect.options[i].selected=false;
	}	
} 