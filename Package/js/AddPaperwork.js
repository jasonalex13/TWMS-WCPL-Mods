// NAME			Upload Paperwork Page Mods
// DESCRIPTION		Adds Styles to the Upload Paperwork Page on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ		base.js
//
// VERSION		1.2.2

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


var FuncAddPaperwork = function() {
	if(currentPageURL.toLowerCase() == urlencode("https://" + currentDomain + "/damstra/paperworkportal.asp").toLowerCase()) {
		var attachmentimgURL = chrome.extension.getURL("images/docattachment.png");
		$('img').prop('src', function(_,src) { return src.replace("https://" + currentDomain + "/damstra/images/document_attachment.png", attachmentimgURL); });


		var PaperworkPriorityDropdown = document.getElementById("Priority");
		var PaperworkPriority = 0;

		function setPriorityBoxColor() {
			if (PaperworkPriority == 1) {
				PaperworkPriorityDropdown.style.border = "2px solid red";
				PaperworkPriorityDropdown.style.backgroundColor = "#FFC2C2";
				PaperworkPriorityDropdown.style.fontWeight = "bold";
				PaperworkPriorityDropdown.style.color = "red";
			} else if (PaperworkPriority == 0) {
				PaperworkPriorityDropdown.style.border = "";
				PaperworkPriorityDropdown.style.backgroundColor = "#ffffff";
				PaperworkPriorityDropdown.style.fontWeight = "normal";
				PaperworkPriorityDropdown.style.color = "#000000";
			} else if (PaperworkPriority == -1) {
				PaperworkPriorityDropdown.style.border = "";
				PaperworkPriorityDropdown.style.backgroundColor = "#CCECFB";
				PaperworkPriorityDropdown.style.fontWeight = "normal";
				PaperworkPriorityDropdown.style.color = "#7EBAC3";
			}
		}

		// if the paperwork priority can be found in a cookie, use it
		if(getCookie("PaperworkPriority") != "")
		{
			document.getElementById("Priority").value = getCookie("PaperworkPriority");
			PaperworkPriority = document.getElementById("Priority").value
		}

		setPriorityBoxColor();

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

		addGlobalStyle('label[for="ShowCompleted"], label#ShowOnlyRejectedLabel {width:200px;}')
		addGlobalStyle('input[type="file"] {width:1000px;background-color:'+CurModAccentLighterColor+'; border:1px solid'+CurModAccentColor+'; padding: 10px;}');
		addGlobalStyle('select#Priority {height:30px;}')
		addGlobalStyle('input#DESC1, input#DESC2, input#DESC3, input#DESC4, input#DESC5 {display:none;}');
		addGlobalStyle('th {display:none;}');
		addGlobalStyle('td:nth-child(2){width:200px;} td:nth-child(3){width:90px;} td:nth-child(4){display:none;} td:nth-child(5){width:400px;} td:nth-child(6),td:nth-child(7),td:nth-child(8){width:150px;}');
		addGlobalStyle('table.table-striped tbody tr td {border-top:1px solid '+CurModAccentColor+'}');
		addGlobalStyle('.alert-info {display:none;}');
		addGlobalStyle('#bs-modal-div {width:900px !important; left:100px;}');

		$('table tr td:nth-child(8)').each(function(){
		   if ($(this).text().trim() != '' && $(this).text() != 'Rejected') {
				$(this).siblings().css('background-color','#f4959f');
				$(this).css('background-color','#f4959f');
			}
		});

		document.getElementById("Priority").addEventListener('change',function(){
			PaperworkPriority = document.getElementById("Priority").value;
			setCookie("PaperworkPriority",PaperworkPriority,1);
			setPriorityBoxColor();
		});

		$('#bs-modal-div').width(900);
	}
}

callback.add(FuncAddPaperwork);
