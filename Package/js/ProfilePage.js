// NAME			Profile Page Mods
// DESCRIPTION		Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ		base.js
//
// VERSION		1.4

var FuncProfilePage = function(){
	if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/skills.asp")) {
		addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(6), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(5) {display:none;}");
		addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(2) {width:250px;}");
		addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(5) > select {width:120px;}");
		addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(13), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(8) {width:200px !important;}");
		addGlobalStyle("img#bigProfilePic {position:fixed;bottom:10px;left:10px;box-shadow:0px 0px 10px #333333;border:1px solid #333333}");
		addGlobalStyle("span.jlxAge { color:"+ CurModAccentColor +";font-style:italic;}")

		//They use blue buttons on this page so i'm going to make the attachment icon white
		var attachmentimgURL = chrome.extension.getURL("images/docattachmentwhite.png");
		$('td').prop('bgColor', function(_,bgColor) {return bgColor.replace('#CCFFFF','#FFF8C5'); });
		$('img').prop('src', function(_,src) { return src.replace("https://" + currentDomain + "/damstra/images/document_attachment.png", attachmentimgURL); });	
		
		$('body').append("<img id='bigProfilePic' src='"+ $('img.pull-right').prop('src') +"' />");
		$('img#bigProfilePic').hide();
		
		$('img.pull-right').hover(function(){
			$('img#bigProfilePic').stop();
			$('img#bigProfilePic').show(400);
		},function(){
			$('img#bigProfilePic').stop();
			$('img#bigProfilePic').hide(400);
		});
		
		// Date of Birth
		if(CurOptAgeCalc){
			dob = $('#header > table > tbody > tr > td:nth-child(1) > div > font > i').text().split("/");
			var year=Number(dob[2]);
			var month=Number(dob[1])-1;
			var day=Number(dob[0]);
			var today=new Date();
			var age=today.getFullYear()-year;
			if(today.getMonth()<month || (today.getMonth()==month && today.getDate()<day)){age--;}
			$('#header > table > tbody > tr > td:nth-child(1) > div > font > i').after("<span class='jlxAge'> ("+ age +" years old)</span>")
		}
	}
}

callback.add(FuncProfilePage);