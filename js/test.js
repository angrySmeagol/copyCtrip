;(function(){
	var Lunbo=function(){
		this.init=function(){
			var self=this;
			var start=function(){
				var current=self.findActive();
				var next=self.findNext();
				var previous=self.findPrevious();

				if(next.src!=next.dataset.src) self.load(next);
				if(current) current.className="lunboPic";
				if(next) next.className="lunboPic active";
				var nextIndex=next.dataset.number;
				var currentIndex=current.dataset.number;
				var li=document.getElementsByClassName("lunbo-ul-li");
				li[currentIndex-1].className="lunbo-ul-li";
				li[nextIndex-1].className="lunbo-ul-li active";
			}
			var timer;
			var img1=document.getElementsByClassName("lunboPic")[0];
			if(img1.dataset.status=="true"){
				timer=setInterval(start,5000);
			}else{
				img1.addEventListener("load",function(){timer=setInterval(start,5000);});
			}
			

			var lunboDiv=document.getElementsByClassName("lunboBox")[0];
			lunboDiv.addEventListener("mouseover",function(e){
				clearInterval(timer);
			});
			lunboDiv.addEventListener("mouseout",function(e){
				timer=setInterval(start,5000);
			});
			
			var lunboUl=document.getElementsByClassName("lunboUl")[0].children[0];
			lunboUl.addEventListener("mouseover",function(e){
				var imgs=document.getElementsByClassName("lunboPic");
				var target = e.target || e.srcElement;
				var li=document.getElementsByClassName("lunbo-ul-li");
				if(target.nodeName.toLowerCase() == 'li'){
					var index=target.dataset.number;
					var current=self.findActive();
					var currentIndex=current.dataset.number;
					if(imgs&&imgs[index-1].className!="lunboPic active") {
						current.className="lunboPic";
						li[currentIndex-1].className="lunbo-ul-li";
						li[index-1].className="lunbo-ul-li active";
					}
					if(imgs[index-1].src.indexOf("lunboPic")==-1) self.load(imgs[index-1]);
					imgs[index-1].className="lunboPic active";
				}else return;
				

			});
			
		};
		this.findActive=function(){
			return document.getElementsByClassName("lunboPic active")[0];
		};
		this.findNext=function(){
			var imgs=document.getElementsByClassName("lunboPic");
			var index=0;
			for(var i=0;i<imgs.length;i++){
				if(imgs[i].className.indexOf("active")!=-1){
					if(i==8) {
						index=0;
					}else index=i+1;
				}
			}
			return imgs[index];
		};
		this.findPrevious=function(){
			var imgs=document.getElementsByClassName("lunboPic");
			var index=0;
			for(var i=0;i<imgs.length;i++){
				if(imgs[i].className.indexOf("active")!=-1){
					if(i==0) {
						index=8;
					}else index=i-1;
					
				}
			}
			return imgs[index];
		};
		this.load=function(tar){
			var src=tar.dataset.src;
			tar.src=src;
		};
	}
	var lunbo=new Lunbo();
	lunbo.init();	
	
}());
