import React, { Component } from 'react';
import $ from 'jquery';
import './egg.scss';

export default class EasterEgg extends Component {
  jQuerycode = () => {
     var $w = $( window ).width();
     var $dW = $('.bb8').css('width');
     $dW = $dW.replace('px', '');
     $dW = parseInt($dW);
     var $dPos = 0;
     var $dSpeed = 1;
     var $dMinSpeed = 1;
     var $dMaxSpeed = 2;
     var $dAccel = 1.04;
     var $dRot = 0;
     var $mPos = $w - $w/5;
     var $slowOffset = 120;
     var $movingRight = false; 

     function moveDroid(){
       if($mPos > $dPos + ($dW/4)){
         // mover a la derecha
         if(!$movingRight){
           $movingRight = true;
           $('.antennas').addClass('right');
           $('.eyes').addClass('right');
         }
         if($mPos - $dPos > $slowOffset){
           if($dSpeed < $dMaxSpeed){
             // acelerar
             $dSpeed = $dSpeed * $dAccel;
           }
         } else if($mPos-$dPos < $slowOffset){
           if($dSpeed > $dMinSpeed){
             // desacelerar
             $dSpeed = $dSpeed / $dAccel;
           }
         }
         $dPos = $dPos + $dSpeed;
         $dRot = $dRot + $dSpeed;
       } else if($mPos < $dPos - ($dW/4)){
         // mover a la izquierda
         if($movingRight){
           $movingRight = false;
           $('.antennas').removeClass('right');
           $('.eyes').removeClass('right');
         }
         if($dPos - $mPos > $slowOffset){
           if($dSpeed < $dMaxSpeed){
             // acelerar
             $dSpeed = $dSpeed * $dAccel;
           }
         } else if($dPos - $mPos < $slowOffset){
           if($dSpeed > $dMinSpeed){
             // desacelerar
             $dSpeed = $dSpeed / $dAccel;
           }
         }
         $dPos = $dPos - $dSpeed;
         $dRot = $dRot - $dSpeed;
       } else { }
       $('.bb8').css('left', $dPos);
       $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
       $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
     }

     setInterval(moveDroid, 10);

     $( document ).on( "mousemove", function( event ) {
       $('h2').addClass('hide');
       $mPos = event.pageX;
       return $mPos;
     });
    }

    componentDidMount(){
      this.jQuerycode()
    }

  render() {
    return (
      <>
         <div class="message">
             <h2 class="msg" style={{ color:'grey' }} >Mueve el mouse...</h2>
         </div>
         <div class="sand"></div>
         <div class="bb8">
             <div class="antennas">
                 <div class="antenna short"></div>
                 <div class="antenna long"></div>
             </div>
             <div class="head">
                 <div class="stripe one"></div>
                 <div class="stripe two"></div>
                 <div class="eyes">
                   <div class="eye one"></div>
                   <div class="eye two"></div>
                 </div>
                 <div class="stripe three"></div>
             </div>
             <div class="ball">
               <div class="lines one"></div>
               <div class="lines two"></div>
               <div class="ring one"></div>
               <div class="ring two"></div>
               <div class="ring three"></div>
             </div>
             <div class="shadow"></div>
         </div>
         <div class="shameless">
             <p> Para: <strong>Giovanni</strong> </p>
             <p> De: <strong>Jesús y José</strong> </p>
             <h6 style={{ textAlign:'right'}} > <a class="links" href="./"> volver...</a> </h6>
         </div>
      </>
    )
  }
}