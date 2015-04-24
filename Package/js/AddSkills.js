// NAME						Profile Page Mods
// DESCRIPTION		Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR					Jason Hill <info@jasonalex.net>
// COPYRIGHT			Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ				base.js
//
// VERSION				0.1

if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/include/panels/AddSkills.asp")) {
	
	
	document.getElementById("MINE_ID").value = "WSF CURRAGH";
	addGlobalStyle('input[type="file"] {width:400px;background-color:rgb(227,242,217);border:1px solid #7ac143; padding: 10px;}');

	
	
}
