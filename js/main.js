requirejs.config({
	baseUrl:'./js/app',
	paths:{
		jquery:"../commen/jQuery v3.1.1min",
		react:"../commen/react/react.min",
		JSX:"../commen/react/JSXTransformer",
		shirt:"./shirt"
	}
});
require(["jquery","require","react","JSX","shirt"],function(){
	var dCarousel=$("head");
	var react=require("react");

});