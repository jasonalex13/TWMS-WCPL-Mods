// NAME			Profile Page Mods
// DESCRIPTION		Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ		base.js
//
// VERSION		1.2

if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/skills.asp")) {
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(6), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(5) {display:none;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(2) {width:250px;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(5) > select {width:120px;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(13), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(8) {width:200px !important;}");

	//They use blue buttons on this page so i'm going to make the attachment icon white
	var attachmentimgURL = chrome.extension.getURL("images/docattachmentwhite.png");
	$('img').prop('src', function(_,src) { return src.replace('https://" + currentDomain + "/damstra/images/document_attachment.png', attachmentimgURL); });	
}
