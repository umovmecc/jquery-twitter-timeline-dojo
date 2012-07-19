describe("Testing twitter timeline with jQuery", function() {
  var timeline;
  
  beforeEach(function() {
    timeline = new Timeline();
    tweet = new Tweet();
  });
  
  it("Should have a timeline", function() {
    expect(timeline).not.toBe(null);
  });
  
  it("Should add new tweet to timeline", function() {
    timeline.tweet('Luiza foi pro canada.');    
    expect(timeline.getTweets().length).toBe(1);
    var firstTweet = $(timeline.getTweets()[0]);
    expect(firstTweet.find('.text').html()).toBe('Luiza foi pro canada.');
  });
  
  describe('Testing new tweet',function(){
    var tweet;
    beforeEach(function() {
      tweet = new Tweet();
    });
    
    it('should create a new instance of tweet',function(){
       expect(tweet).not.toBe(null);
    });
    
    it('should create a new tweet with text',function(){
       tweet = new Tweet('Luiza foi pro canada.');
       expect(tweet.getText()).toBe('Luiza foi pro canada.');
       tweet = new Tweet('Luiza voltou do canada.');
       expect(tweet.getText()).toBe('Luiza voltou do canada.');
    });
    
  });
  
});
