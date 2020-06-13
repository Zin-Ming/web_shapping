// JavaScript Document

var controller = new ScrollMagic.Controller();

var index_main01 = new ScrollMagic.Scene({triggerElement: "#main01"})

.setClassToggle("#main01" , "fade_in")
.addTo(controller);

var index_main02 = new ScrollMagic.Scene({triggerElement: "#main02" , duration:800,})

.setClassToggle("#main02" , "fade_in")
.setTween(TweenMax.from(".main02_img" , 1 ,{ backgroundPositionX:'20%' , ease:Power0.easeNone}))
.addTo(controller);

var index_main03 = new ScrollMagic.Scene({triggerElement: "#main03" , duration:1000,})

.setClassToggle("#main03" , "fade_in")
.setTween(TweenMax.from(".main03_img" , 1 ,{ backgroundPositionX:'20%' , ease:Power0.easeNone}))
.addTo(controller);