


$(window).on('load', function(){
    init();
});


function init(){
    var toolTimeline = new TimelineMax();
    var duration = .5;

    toolTimeline.from('.mainTitle', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},1);
    toolTimeline.from('.title', duration, {opacity: 0,scale:25, ease:Linear.easeInOut} ,1);
    toolTimeline.from('#toolBox', duration, {opacity: 0,scale:5, ease:Linear.easeInOut}, 2);
    toolTimeline.from('#leaf', duration, {opacity: 0,scale:25, ease:Linear.easeInOut}, 2);
    toolTimeline.from('#weightLifter', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},1.5);
    toolTimeline.from('#crazy', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},1.5);
    toolTimeline.from('#supermeme', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},2.5);

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