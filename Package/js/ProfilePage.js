// ==UserScript==
// @name            TWMS Upload Paperwork Styles
// @description     Adds Styles to the Upload Paperwork Page on Damstra TWMS for ease of use by WSF CURRAGH
// @icon            https://raw.githubusercontent.com/jasonalex13/TWMS-PaperworkStyle/master/logo.png
//
// @author          Jason Hill <info@jasonalex.net>
// @namespace       http://github.com/jasonalex13

//
// @copyright       Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// @match https://damstra.com.au/damstra/paperworkportal.asp
// @match https://www.damstra.com.au/damstra/paperworkportal.asp
//
// @require         http://code.jquery.com/jquery-1.8.0.min.js
//
// @version         1.1.0
//
// @run-at			document-end
// @unwrap
// ==/UserScript==


if(currentPageURL == urlencode("https://damstra.com.au/damstra/skills.asp") || currentPageURL == urlencode("https://www.damstra.com.au/damstra/skills.asp")) {
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(6), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(5) {display:none;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(2) {width:250px;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(5) > select {width:120px;}");
	addGlobalStyle("body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(13), body > table:nth-child(18) > tbody > tr > td > table > thead > tr > th:nth-child(8) {width:200px !important;}");

	//They use blue buttons on this page so i'm going to make the attachment icon white
	var attachmentimgURL = chrome.extension.getURL("images/docattachmentwhite.png");
	$('img').prop('src', function(_,src) { return src.replace('https://damstra.com.au/damstra/images/document_attachment.png', attachmentimgURL); });	
}
