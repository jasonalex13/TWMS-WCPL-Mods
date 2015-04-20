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
// @version         1.0.9.3
//
// @run-at			document-end
// @unwrap
// ==/UserScript==

alert(currentPageURL)

if(currentPageURL == urlencode("https://www.damstra.com.au/damstra/skills.asp")) {
	addGlobalStyle('body > table:nth-child(18) > tbody > tr > td > table > tbody > tr > td:nth-child(6) {background-color:red;}');
}