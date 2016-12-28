if(typeof zscript=='undefined'){
	zscript=function(){};
}
zscript.debug=function(){};
//enumProps
zscript.debug.enumProps=function(inObj){
	var props="";
	for(var i in inObj){
		props+=i+"="+inObj[i]+"\n";
	}
	alert( props);
}
//DIvLogger
zscript.debug.DivLogger=function(){
	//faux constants
	this.LEVEL_TRACE=1;
	this.LEVEL_DEBUG=2;
	this.LEVEL_INFO=3;
	this.LEVEL_WARN=4;
	this.LEVEL_ERROR=5;
	this.LEVEL_FATAL=6;
	//colro for each log level
	this.LEVEL_TRACE_COLOR='a0a000';
	this.LEVEL_DEBUG_COLOR='64c864';
	this.LEVEL_INFO_COLOR='000000';
	this.LEVEL_WARN_COLOR='0000ff';
	this.LEVEL_ERROR_COLOR='ff8c00';
	this.LEVEL_FATAL_COLOR='ff0000';
	//constans
	this.URL='http://localhost/test.php'
	//logLevel determins the minimum message level will show
	this.logLevel=3;
	//targetDiv to output
	this.targetDiv=null;
	//create ajax
	this.createAjax=function(){
		var xmlhttp;
		window.XMLHttpRequest?xmlhttp=new XMLHttpRequest():xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
		xmlhttp.open('POST',this.URL,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");	
		return xmlhttp;
	}
	
	//set the log level, higher level will be show
	this.setLevel=function(inLevel){
		this.logLevel=inLevel;
	}
	//setTargetDiv
	this.setTargetDiv=function(inTargetDiv){
		this.targetDiv=inTargetDiv;
		this.targetDiv.innerHTML='';
	}
	//shouldBeLogged
	this.shouldBeLogged=function(inLevel){
		if(inLevel>=this.logLevel){
			return true;
		}
		else{
			return false;
		}
	}
	//log messages at trace level
	this.trace=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_TRACE)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_TRACE_COLOR+";'>"+
			"[TRACE]"+inMessage+"</div>";
		}
	}
	this.traceToServer=function(inMessage){
		
		if(this.shouldBeLogged(this.LEVEL_TRACE)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_TRACE_COLOR+";'>"+
					"[TRACE IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
	//log messages at debug level
	this.debug=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_DEBUG)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_DEBUG_COLOR+";'>"+
			"[DEBUG]"+inMessage+"</div>";
		}
	}
	this.debugToServer=function(inMessage){
		
		if(this.shouldBeLogged(this.LEVEL_DEBUG)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_DEBUG_COLOR+";'>"+
					"[DEBUG IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
	//log messages at info level
	this.info=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_INFO)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_INFO_COLOR+";'>"+
			"[INFO]"+inMessage+"</div>";
		}
	}
	this.infoToServer=function(inMessage,url){
		if(this.shouldBeLogged(this.LEVEL_INFO)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_INFO_COLOR+";'>"+
					"[INFO IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
	//log messages at warn level
	this.warn=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_WARN)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_WARN_COLOR+";'>"+
			"[WARN]"+inMessage+"</div>";
		}
	}
	this.warnToServer=function(inMessage,url){
		if(this.shouldBeLogged(this.LEVEL_WARN)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_WARN_COLOR+";'>"+
					"[WARN IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
	//log messages at error level
	this.error=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_ERROR)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_ERROR_COLOR+";'>"+
			"[ERROR]"+inMessage+"</div>";
		}
	}
	this.errorToServer=function(inMessage,url){var self=this;
		if(this.shouldBeLogged(this.LEVEL_ERROR)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_ERROR_COLOR+";'>"+
					"[ERROR IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
	//log messages at fatal level
	this.fatal=function(inMessage){
		if(this.shouldBeLogged(this.LEVEL_FATAL)&&this.targetDiv){
			this.targetDiv.innerHTML+=
			"<div style='color:#"+this.LEVEL_FATAL_COLOR+";'>"+
			"[FATAL]"+inMessage+"</div>";
		}
	}
	this.fatalToServer=function(inMessage,url){
		if(this.shouldBeLogged(this.LEVEL_FATAL)&&this.targetDiv){
			var xmlhttp=this.createAjax();
			xmlhttp.send('message=inMessage');
			var self=this;
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4&&xmlhttp.status==200){
					self.targetDiv.innerHTML+=
					"<div style='color:#"+self.LEVEL_FATAL_COLOR+";'>"+
					"[FATAL IN SERVER]"+xmlhttp.responseText+"</div>";
				}
			}	
		}
		
	}
}