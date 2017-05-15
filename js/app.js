
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

    toolTimeline.to('.superman img', duration, {left: 0, ease:Back.easeOut});
    toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut}, 2);    
    // Sequence TimelineMax.from
                 
    toolTimeline.from('#toolBox', duration, {opacity: 0,scale: 5, ease:Linear.easeInOut});
    toolTimeline.from('#leaf', duration, {opacity: 0,scale: 5, ease:Linear.easeInOut});
    toolTimeline.from('#weightLifter', duration, {opacity: 0,scale: 5, ease:Linear.easeInOut});
    toolTimeline.from('#crazy', duration, {opacity: 0,scale: 5, ease:Linear.easeInOut});
    toolTimeline.from('#supermeme', duration, {opacity: 0,scale: 25, ease:Linear.easeInOut},.5);

   

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

$(window).on('load', function(){
    startTween();
});

function startTween(){
    var d= 1

         TweenLite.to($("#toolBox"), 1, {delay: d, x: -400, y: 0, scale: 2,
              onComplete: returnToNormal, onCompleteParams: [$("#toolBox")]});  

         TweenLite.to($("#weightLifter"), 1, {delay: d, x: -200, y: 0, scale: 2,
              onComplete: returnToNormal, onCompleteParams: [$("#weightLifter")]});     
            
         TweenLite.to($("#crazy"), 1, {delay: d, x: 0, y: 0, scale: 2,
              onComplete: returnToNormal, onCompleteParams: [$("#crazy")]});        

         TweenLite.to($("#leaf"), 1, {delay: d, x: 100, y: 0, scale: 2,
              onComplete: returnToNormal, onCompleteParams: [$("#leaf")]});            
              
     
         TweenLite.to(".title", .5, {delay: d + 3.2,color: "white", fontSize: "+=20"
         ,onComplete:returnTextToNormal, onCompleteParams: [d] });
         TweenLite.to(".asapReg", .5, {delay: d + 3.2,color: "blue", fontSize: "+=20"
         ,onComplete:returnTextToNormal, onCompleteParams: [d] });
         TweenLite.to(".greenText", .5, {delay: d + 3.2,color: "green", fontSize: "+=20"
         ,onComplete:returnTextToNormal, onCompleteParams: [d] });   

}

function returnToNormal(obj) {    
    if(obj){
         TweenLite.to(obj, 1.5, {x: 90, y: 290  , scale: 1.5 });       
    }
            
}

function returnTextToNormal(delay) {
          TweenLite.to(".title", 2.5, {delay: delay, color: "blue", fontSize: "+=10" });
          TweenLite.to(".gsapTitle", 2.5, {delay: delay, color: "green", fontSize: "+=20" });
          TweenLite.to(".asapReg", 2.5, {delay: delay, color: "red", fontSize: "+=20" });
         
}  
