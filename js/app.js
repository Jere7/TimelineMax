
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
    toolTimeline.from('.title', duration, {opacity: 0,scale:25, ease:Linear.easeInOut} ,1.1);
    
    // Sequence TimelineMax.to left:0-right:-50 (ease:Back.easeInOut)

    toolTimeline.to('.superman img', duration, {left: 0, ease:Back.easeInOut}, 1.9);
    toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut}, 2);

    // Sequence TimelineMax.from
                 
    toolTimeline.from('#toolBox', duration, {opacity: 0,scale: 5, ease:Linear.easeInOut}, 1);
    toolTimeline.from('#leaf', duration, {opacity: 0,scale: 25, ease:Linear.easeInOut}, .5);
    toolTimeline.from('#weightLifter', duration, {opacity: 0,scale: 25, ease:Linear.easeInOut},.5);
    toolTimeline.from('#crazy', duration, {opacity: 0,scale: 25, ease:Linear.easeInOut},1);
    toolTimeline.from('#supermeme', duration, {opacity: 0,scale: 25, ease:Linear.easeInOut},.7);

   

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

$(document).ready(function(){
    startTween();
});

function startTween(){
    var d= 1

         TweenLite.to($("#toolBox"), 1.5, {delay: d, x: 10, y: 0, scale: 1.5,
              onComplete: returnToNormal, onCompleteParams: [$("#toolBox")]});  

         TweenLite.to($("#weightLifter"), 1.5, {delay: d, x: 10, y: 0, scale: 1.5,
              onComplete: returnToNormal, onCompleteParams: [$("#weightLifter")]});        
            
         TweenLite.to($("#crazy"), 1.5, {delay: d, x: 10, y: 0, scale: 1.5,
              onComplete: returnToNormal, onCompleteParams: [$("#crazy")]});        

         TweenLite.to($("#leaf"), 1.5, {delay: d, x: 10, y: 0, scale: 1.5,
              onComplete: returnToNormal, onCompleteParams: [$("#leaf")]});            

         
}

function returnToNormal(obj) {
    if(obj){
         TweenLite.to(obj, 1.5, {x: 300, y: 100  , scale: 1.9 });       
    }
            
}

function returnTextToNormal() {
         TweenLite.to(".title", 1.5, {x: 0, y: 70, color: "blue", fontSize: "+90" });
         TweenLite.to(".greenText", 1.5, {x: 600, y: 0, color: "red", fontSize: "+90" });
         TweenLite.to(".asapReg", 1.5, {x: 600, y: 0, color: "green", fontSize: "+90" });
}  