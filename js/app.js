$(document).ready(function(){
    init();
});


function init(){
    var toolTimeline = new TimelineMax();
    var duration = .5;
    toolTimeline.to('#toolBox', duration, {y:-100, ease:Linear.easeInOut});
    toolTimeline.to('#weightLifter', duration, {y:-100, ease:Bounce.easeInOut});
    toolTimeline.to('#crazy', duration, {y:-100, ease:Elastic.easeInOut});
    toolTimeline.to('#leaf', duration, {y:-100, ease:Back.easeInOut});

    $("#start").click(function(){
        toolTimeline.play();
    });

    $("#pause").click(function(){
        toolTimeline.pause();
    });

    $("#stop").click(function(){
        toolTimeline.stop();
    });

    $("#reverse").click(function(){
        toolTimeline.reverse();
    });
}   