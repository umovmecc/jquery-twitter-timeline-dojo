describe("Testing twitter timeline with jQuery", function() {
  var timeline;
  
  beforeEach(function() {
    timeline = new Timeline();
  });
  
  it("Should have a timeline", function() {
    expect(timeline).not.toBe(null);
  });
  
  it("Should add new tweet to timeline", function() {
    timeline.tweet('Luiza foi pro canadá.');
    
    expect(timeline.tweets.length).toBe(1);
  });
      
  
});