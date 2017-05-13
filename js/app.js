
// start the function $(window).on('load', function(){
// });

$(window).on('load', function(){
    init();
});


function init(){
    // Sequence TimelineMax
    var toolTimeline = new TimelineMax();
    var duration = .5;

    // Sequence TimelineMax.from(ease:Linear.easeInOut)
    // 
    toolTimeline.from('.mainTitle', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},1.5);
    toolTimeline.from('.title', duration, {opacity: 0,scale:25, ease:Linear.easeInOut} ,1.5);
    
    // Sequence TimelineMax.to left:0-right:-50 (ease:Back.easeInOut)

    toolTimeline.to('.superman img', duration, {left: 0, ease:Back.easeInOut});
    toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut}, .7);

    // Sequence TimelineMax.from
                 
    toolTimeline.from('#toolBox', duration, {opacity: 0,scale:5, ease:Linear.easeInOut}, .5);
    toolTimeline.from('#leaf', duration, {opacity: 0,scale:25, ease:Linear.easeInOut}, .5);
    toolTimeline.from('#weightLifter', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},.5);
    toolTimeline.from('#crazy', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},.5);
    toolTimeline.from('#supermeme', duration, {opacity: 0,scale:25, ease:Linear.easeInOut},1);

    // Jquery selector to buttons class.controlButtons

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