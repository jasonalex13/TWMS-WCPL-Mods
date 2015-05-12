// Saves options to chrome.storage.sync.
function save_options() {
  var EnableTheme = document.getElementById('EnableTheme').checked;
  var AccentColor = document.getElementById('AccentColor').value;
  var ThemeDL = document.getElementById('Theme').value;
  var BackFwd = document.getElementById('BackFwd').checked;
  var AgeCalc = document.getElementById('AgeCalc').checked;
  chrome.storage.sync.set({
    EnableTheme: EnableTheme,
    AccentColor: AccentColor,
	Theme: ThemeDL,
	BackFwd: BackFwd,
	AgeCalc: AgeCalc
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. You may need to refresh TWMS to see the changes';
    setTimeout(function() {
      status.textContent = '';
    }, 4000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    EnableTheme: true,
    AccentColor: '#ff51b1',
	Theme: 'dark',
	BackFwd: true,
	AgeCalc: true
  }, function(items) {
    document.getElementById('EnableTheme').checked = items.EnableTheme;
    document.getElementById('AccentColor').value = items.AccentColor;
	document.getElementById('AccentDiv').style.backgroundColor = items.AccentColor;
	document.getElementById('Theme').value = items.Theme;
	document.getElementById('BackFwd').checked = items.BackFwd;
	document.getElementById('AgeCalc').checked = items.AgeCalc;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('AccentColor').addEventListener('change',function(){
	document.getElementById('AccentDiv').style.backgroundColor = this.options[this.selectedIndex].value;
});