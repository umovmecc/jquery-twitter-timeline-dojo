
function Timeline(){
  
  this.tweet = function(text) {
    $('#timeline ul').append($('<li class="tweet"> <div class="header"> <span class="user">@nbluis</span> <span class="time">10 minutes ago</span> <span class="delete">X</span> </div> <p class="text">' + text + '</p> </li>'));
  }
  
  
  this.getTweets = function() {
    return $('#timeline ul li');
  }
  
}

function Tweet(text){
  
  this.getText = function(){
    return text;
  }
  
}

