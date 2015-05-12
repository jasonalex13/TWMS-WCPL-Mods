// NAME					Profile Page Mods
// DESCRIPTION			Adds Styles to the Employee Profile on Damstra TWMS for ease of use by WSF CURRAGH
//
// AUTHOR				Jason Hill <info@jasonalex.net>
// COPYRIGHT			Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// PRE-REQ				base.js
//
// VERSION				0.22

var FuncAddSkills = function() {
	if(currentPageURL.toLowerCase() == urlencode("https://" + currentDomain + "/damstra/include/panels/AddSkills.asp").toLowerCase()) {
		//just enable all the fields we want from the start
		$("#NOTES").css('display','');
		$("#AS_OF").css('display','');
		$("#expdate").css('display','');
		$("#skilllevel").css('display','');
		$("#attach1").css('display','');
		document.getElementById("skilllevel").value = "Competent";
		
		var MineSelector = document.getElementById("MINE_ID");
		var BeginDateField = document.getElementById("AS_OF");
		var ExpDateField = document.getElementById("expdate");
		
		addGlobalStyle('input[type="file"] {width:480px;background-color:'+CurModAccentLighterColor+';border:1px solid '+CurModAccentColor+'; padding: 10px; font-size:11px;}');
		addGlobalStyle('#frm_skill > table > tbody > tr:nth-child(8) {display:none;}');
		addGlobalStyle('#frm_skill > table > tbody > tr > td:nth-child(1) {width:85px !important;}');
		MineSelector.setAttribute("onchange","InitSkills(this.value);");
		MineSelector.focus();
		MineSelector.value = "WSF CURRAGH";
		MineSelector.blur();
		
		$('#frm_skill > table > tbody > tr:nth-child(3) > td:nth-child(2)').append("<a id='yesterdatebtn' class='btn btn-warning btn-mini'><i class='icon-white icon-calendar'></i> Yesterday's Date</a>")
		
		$('a#yesterdatebtn').click(function(){	
			var jlxd = new Date();
			var jlxm = (jlxd.getMonth()+1);
			if (jlxm < 10) { jlxm = '0' + jlxm; } 
			$('#AS_OF').val(jlxd.getDate()-1 + '/' + jlxm + '/' + jlxd.getFullYear());
			$('#AS_OF').focus();
			$('#NOTES').focus();
		});
		
		$('#frm_skill > table > tbody > tr:nth-child(3) > td:nth-child(2) > a').click(function(){
			$('#AS_OF').focus();
			$('#NOTES').focus();
		});
	}
}

callback.add(FuncAddSkills);