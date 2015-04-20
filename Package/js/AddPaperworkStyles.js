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
// @version         1.1.4
//
// @run-at			document-end
// @unwrap
// ==/UserScript==

if(currentPageURL == urlencode("https://damstra.com.au/damstra/paperworkportal.asp")) {
	var PaperworkPriority = 0
	
	if(getCookie("PaperworkPriority") != "")
	{
		document.getElementById("Priority").value = getCookie("PaperworkPriority");
	}
	
	addGlobalStyle('input[type="file"] {width:1000px;background-color:rgb(227,242,217);border:1px solid #7ac143; padding: 10px;}');
	addGlobalStyle('input#DESC1, input#DESC2, input#DESC3, input#DESC4, input#DESC5 {display:none;}');
	addGlobalStyle('th {display:none;}');
	addGlobalStyle('td:nth-child(2){width:200px;} td:nth-child(3){width:90px;} td:nth-child(4){display:none;} td:nth-child(5){width:400px;} td:nth-child(6),td:nth-child(7),td:nth-child(8){width:150px;}');
	addGlobalStyle('table.table-bordered tr:nth-child(n+7) td {border-top:1px solid #a7a9ac;}');
	addGlobalStyle('.alert-info {display:none;}')

	$('table tr td:nth-child(8)').each(function(){
	   if ($(this).text().trim() != '' && $(this).text() != 'Rejected') {
			$(this).parent().css('background-color','#f4959f');
		}
	}); 	
	
	var attachmentimgURL = chrome.extension.getURL("images/docattachment.png");
	$('img').prop('src', function(_,src) { return src.replace('https://damstra.com.au/damstra/images/document_attachment.png', attachmentimgURL); })
	
	document.getElementById("Priority").addEventListener('change',function(){
		PaperworkPriority = document.getElementById("Priority").value;
		setCookie("PaperworkPriority",PaperworkPriority,1);
		});
}