// NAME			Upload Paperwork Page Mods
// DESCRIPTION		Adds Styles to the Upload Paperwork Page on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ		base.js
//
// VERSION		1.2

//FUNCTION FOR SHOWING HIDING NON-REJECTED ITEMS

function ShowOnlyRejectedFunction(checkval) {
	if(checkval == true) {
		$('table tr td:nth-child(8)').each(function(){
		   if ($(this).text().trim() == '') {
				$(this).parent().css('display','none');
			}
		}); 
	} else if (checkval == false) {
					$('table tr td:nth-child(8)').each(function(){
		   if ($(this).text().trim() == '') {
				$(this).parent().css('display','');
			}
		}); 
	}
}

if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/paperworkportal.asp") || currentPageURL == urlencode("https://www.damstra.com.au/damstra/paperworkportal.asp")) {
	var attachmentimgURL = chrome.extension.getURL("images/docattachment.png");
	$('img').prop('src', function(_,src) { return src.replace("https://" + currentDomain + "/damstra/images/document_attachment.png", attachmentimgURL); });
	
	var PaperworkPriority = 0
	
	// if the paperwork priority can be found in a cookie, use it
	if(getCookie("PaperworkPriority") != "")
	{
		document.getElementById("Priority").value = getCookie("PaperworkPriority");
	}
	
	// add a button for hiding everything that isn't rejected
	var RejectedCheckboxNode = document.createElement("label");
	RejectedCheckboxNode.setAttribute("for","ShowOnlyRejected");
	RejectedCheckboxNode.setAttribute("ID","ShowOnlyRejectedLabel");
	document.getElementById("ViewBy").parentNode.appendChild(RejectedCheckboxNode);
	document.getElementById("ShowOnlyRejectedLabel").innerHTML = "<input type='checkbox' value='0' name='ShowOnlyRejected' id='ShowOnlyRejected'> Show Only Rejected";
	//when comeone clicks the rejected checkbox see what the change was and update the page accordingly
	document.getElementById("ShowOnlyRejected").addEventListener('change',function(){
		ShowOnlyRejectedValue = document.getElementById("ShowOnlyRejected").checked;
		setCookie("ShowOnlyRejected",ShowOnlyRejectedValue,1);
		ShowOnlyRejectedFunction(ShowOnlyRejectedValue);
	});
	
	if(getCookie("ShowOnlyRejected") != "")
	{
		if(getCookie("ShowOnlyRejected") == "true"){
			ShowOnlyRejectedValue = true;
		} else if (getCookie("ShowOnlyRejected") == "false") {
			ShowOnlyRejectedValue = false;
		}
		document.getElementById("ShowOnlyRejected").checked	 = ShowOnlyRejectedValue;
		ShowOnlyRejectedFunction(JSON.parse(getCookie("ShowOnlyRejected")));
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
	
	document.getElementById("Priority").addEventListener('change',function(){
		PaperworkPriority = document.getElementById("Priority").value;
		setCookie("PaperworkPriority",PaperworkPriority,1);
	});
}
