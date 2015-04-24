// NAME						Profile Page Mods
// DESCRIPTION		Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR					Jason Hill <info@jasonalex.net>
// COPYRIGHT			Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ				base.js
//
// VERSION				1.2


if(currentPageURL == urlencode("https://" + currentDomain + "/damstra/include/panels/AddSkills.asp") || currentPageURL == urlencode("https://www.damstra.com.au/damstra/paperworkportal.asp")) {
  document.getElementById("MINE_ID").onchange = "InitSkills(this.value);"; 
  document.getElementById("MINE_ID").onblur = "";   
  document.getElementById("MINE_ID").value = "WSF CURRAGH";
  addGlobalStyle('input[type="file"] {width:400px;background-color:rgb(227,242,217);border:1px solid #7ac143; padding: 10px;}');

}
