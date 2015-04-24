// NAME					Profile Page Mods
// DESCRIPTION			Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR				Jason Hill <info@jasonalex.net>
// COPYRIGHT			Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ				base.js
//
// VERSION				0.19
	
if(currentPageURL.toLowerCase() == urlencode("https://" + currentDomain + "/damstra/include/panels/AddSkills.asp").toLowerCase() || currentPageURL == urlencode("https://www.damstra.com.au/damstra/paperworkportal.asp")) {
	console.log("0.19");
	//just enable all the fields we want from the start
	$("#NOTES").css('display','');
	$("#AS_OF").css('display','');
	$("#expdate").css('display','');
	$("#skilllevel").css('display','');
	$("#attach1").css('display','');
	
	var MineSelector = document.getElementById("MINE_ID");
	var BeginDateField = document.getElementById("AS_OF");
	var ExpDateField = document.getElementById("expdate");
	
	addGlobalStyle('input[type="file"] {width:400px;background-color:rgb(227,242,217);border:1px solid #7ac143; padding: 10px;}');
	addGlobalStyle('#frm_skill > table > tbody > tr:nth-child(8) {display:none;}');
	MineSelector.setAttribute("onchange","InitSkills(this.value);");
	MineSelector.focus();
	MineSelector.value = "WSF CURRAGH";
	MineSelector.blur();
	
	ExpDateField.addEventListener("blur",function(){
		document.getElementById("skilllevel").value = "Competent";
	});
	BeginDateField.addEventListener("blur",function(){
		document.getElementById("skilllevel").value = "Competent";	
	});
}