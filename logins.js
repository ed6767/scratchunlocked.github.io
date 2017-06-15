// Logs in users to scratchUnlocked
// Please don't hax
document.title = "scratchUnlocked"
  var content = '<iframe src="https://edxtech.github.io/scratchunlocked.github.io/logingin.htm" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>';
    document.getElementsByTagName('body')[0].innerHTML = content; 
    $.ajax({url: "https://scratch.mit.edu/session/", success: function(result){
alert(JSON.parse(result).user.username);
      alert(JSON.parse(result).user.email);
      alert(JSON.parse(result).user.banned);
          alert(JSON.parse(result).user.id);
          alert(JSON.parse(result).flags.has_outstanding_email_confirmation);
         alert(JSON.parse(result).user.thumbnailUrl);
    }});
