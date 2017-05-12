


$(window).on('load', function(){
    init();
});


function init(){
    var toolTimeline = new TimelineMax();
    var duration = .5;

    toolTimeline.from('.mainTitle', duration, {opacity: 1,scale:25, ease:Linear.easeInOut});
    toolTimeline.from('.title', duration, {opacity: 0,scale:25, ease:Linear.easeInOut});
    toolTimeline.from('#toolBox', duration, {opacity: 0,scale:5, ease:Linear.easeInOut});
    toolTimeline.from('#leaf', duration, {opacity: 0,scale:25, ease:Linear.easeInOut});

    // $("#start").click(function(){
    //     toolTimeline.play();
    // });

    // $("#pause").click(function(){
    //     toolTimeline.pause();
    // });

    // $("#stop").click(function(){
    //     toolTimeline.stop();
    // });

    // $("#reverse").click(function(){
    //     toolTimeline.reverse();
    // });
}   