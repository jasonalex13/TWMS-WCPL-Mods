// NAME			TWMS-WCPL-Mods BASE JS
// DESCRIPTION		declares functions and variables and does the stuff that gets applied to all TWMS pages
//
// AUTHOR		Jason Hill <info@jasonalex.net>
// COPYRIGHT		Copyright (C) 2015, by Jason Hill <info@jasonalex.net>
//
// VERSION		1.4.1

callback = $.Callbacks();

function jlxVersioning() {
	// this is the overall version of the TWMS-Mod (per the manifest)
	return "v1.4.1";
}

function shadeColor2(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

var CurModAccentColor = "#ff51b1"
var CurModPrimaryColor = "#333333"
var CurModSecondaryColor = "#d1d1d1"
var CurOptAgeCalc = true;
var CurOptBackFwd = true;
var CurOptEnableTheme = true;

chrome.storage.sync.get({
    EnableTheme: true,
    AccentColor: '#ff51b1',
	Theme: 'dark',
	BackFwd: true,
	AgeCalc: true
  }, function(items) {
	CurModAccentColor = items.AccentColor;
	CurOptBackFwd = items.BackFwd;
	CurOptAgeCalc = items.AgeCalc;
	CurOptEnableTheme = items.EnableTheme;
	
	if(CurOptEnableTheme == false) {
		CurModAccentColor = "#333333";
	} else if(items.Theme == "dark"){
		CurModPrimaryColor = "#333333";
		CurModSecondaryColor = "#d1d1d1";
	} else if (items.Theme == "light"){
		CurModPrimaryColor = "#e0e0e0";
		CurModSecondaryColor = "#4c4c4c";
	} else if (items.Theme = "colorful"){
		CurModPrimaryColor = items.AccentColor;
		CurModSecondaryColor = "#ffffff";
		CurModAccentColor = "#333333";
	}
	
	CurModAccentLighterColor = shadeColor2(CurModAccentColor,0.9);
	callback.fire();
  });


var FuncBase = function(){
addGlobalStyle(".CurModAccentColor {color:"+ CurModAccentColor +";} .CurModAccentBG {background-color:"+ CurModAccentColor +";}");
}
callback.add(FuncBase);

// Code to encode URLs
function urlencode(str) {
  //       discuss at: http://phpjs.org/functions/urlencode/
  //      original by: Philip Peterson
  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Lars Fischer
  //         input by: AJ
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Ratheous
  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      bugfixed by: Joris
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //             note: This reflects PHP 5.3/6.0+ behavior
  //             note: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
  //             note: pages served as UTF-8
  //        example 1: urlencode('Kevin van Zonneveld!');
  //        returns 1: 'Kevin+van+Zonneveld%21'
  //        example 2: urlencode('http://kevin.vanzonneveld.net/');
  //        returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
  //        example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
  //        returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'

  str = (str + '')
    .toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .
  replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
}

// save the domain to a variable
currentDomain = document.domain;

//save cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Retrieve Cookies
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}


// get the url of the current page without any of the extra stuff after the ?
var currentPageURL = urlencode(window.location.href.toString().toLowerCase());
if(currentPageURL.search("%3F") != -1) {
	currentPageURL = currentPageURL.split("%3F")[0];
}

// function for adding extra css lines
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// change up some common icons
var redflagimgURL = chrome.extension.getURL("images/redflag.png");
var validimgURL = chrome.extension.getURL("images/valid.png");
var invalidimgURL = chrome.extension.getURL("images/invalid.png");
var warningimgURL = chrome.extension.getURL("images/warning.png");
$('img').prop('src', function(_,src) { return src.replace('https://' + currentDomain + '/damstra/images/redflag.gif', redflagimgURL); });
$('img').prop('src', function(_,src) { return src.replace('https://' + currentDomain + '/damstra/images/valid.png', validimgURL); });
$('img').prop('src', function(_,src) { return src.replace('https://' + currentDomain + '/damstra/images/invalid.png', invalidimgURL); });
$('img').prop('src', function(_,src) { return src.replace('https://' + currentDomain + '/damstra/images/warning.png', warningimgURL); });
