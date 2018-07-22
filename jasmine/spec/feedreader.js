/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Done: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a defined URL', function(){
            allFeeds.forEach(function(feed){
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
         });

        /* Done: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a defined name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });

    });


    /* Done: Write a new test suite named "The menu" */
    describe('The menu', function(){

      var body = $('body');
      var menuButton = document.querySelector('.menu-icon-link')


        /* Done: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
           expect(body[0].classList.contains('menu-hidden')).toBe(true);
         });
         /* Done: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('changes visibility when clicked', function(){
           menuButton.click();
           expect(body[0].classList.contains('menu-hidden')).toBe(false);
           menuButton.click();
           expect(body[0].classList.contains('menu-hidden')).toBe(true);

         });


       });

    /* Done: Write a new test suite named "Initial Entries" */
      /* Done: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
//beforeEach function executes before each of specs. passing 0 into loadFeed() runs it on one iteration.
// passing empty/anonymous callback function into loadFeed to call done()
//pass done() to beforeEach
    describe('Initial Entries', function(){
       beforeEach(function(done){
         loadFeed(0, function(){
           done();
    });
  });

        it('has at least one .entry element within the .feed container', function(){
          expect($('.feed .entry').length).toBeGreaterThan(0);

        });
      });

    /* Done: Write a new test suite named "New Feed Selection" */
    /* Done: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    describe('New Feed Selection',function(){
//variables for old and new content
    var feed1;
    var feed2;
        beforeEach(function(done){
          //make sure feed is empty using empty selector
          $('.feed').empty();
          loadFeed(0, function(){
            feed1 = $('.feed').html();
            //find() selects all descendants of element

          //finds second item in array
          loadFeed(1, function(){
            feed2 = $('.feed').html();
            //find() selects all descendants of element
            done();
              });
          });

        });

        it('new feed content does not equal old feed', function(){
          expect(feed1).not.toBe(feed2);
        });

  });

}());
