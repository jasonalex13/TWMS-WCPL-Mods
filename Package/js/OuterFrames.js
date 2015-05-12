// NAME			Outer Frames Cosmetic Mods
// DESCRIPTION		Styles for the header and common sidebar in TWMS
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ		base.js
//
// VERSION		0.2

var FuncOuterFrames = function(){
	if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/heading.asp")) {
		var TWMSimgURL = chrome.extension.getURL("images/TWMS-heart.png");
		$('img').prop('src', function(_,src) { return src.replace('https://' + currentDomain + '/damstra/images/DMSl.png', TWMSimgURL); });
		addGlobalStyle("body {background-image: none; background-color:#333333;}");
		addGlobalStyle("h3, h4 {color:"+ CurModAccentColor +";}");
		
		$('body').append("<div ID='backcontainer'><button id='backbutton' class='btn btn-mini btn-warning'>Back</button><button id='fwdbutton' class='btn btn-mini btn-info'>Fwd</button><span id='jlxVersion'><span>Curragh Mod</span> "+jlxVersioning()+"</span></div>");
		addGlobalStyle("#backcontainer {position:absolute;top:0px;left:10px;}");
		addGlobalStyle("#jlxVersion {color:#c4c4c4;font-size:10px;padding-left:5px;} #jlxVersion span {color:"+ CurModAccentColor +";}");
		
		document.getElementById("backbutton").addEventListener('click',function(){
			window.history.go(-1);
		});
		
		document.getElementById("fwdbutton").addEventListener('click',function(){
			window.history.go(1);
		});
	}


	if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/menu1.asp") || currentPageURL == urlencode("https://" + currentDomain + "/damstra/menu2.asp")  ) {
		addGlobalStyle("body, #topDiv {background-image: none; background-color:#333333 !important;}");	
		addGlobalStyle("li.nav-header {color:#ffffff !important;}");
		addGlobalStyle("li a:link, li a:visited {color:#ffffff !important;} li a:hover, li a:active {background-color:"+ CurModAccentColor +" !important;color:#333333 !important;}");
		addGlobalStyle("ul.dropdown-menu li a:link, ul.dropdown-menu li a:visited {color:#333333 !important;}");
	}
}

callback.add(FuncOuterFrames);