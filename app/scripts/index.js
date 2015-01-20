(function () {
      
  var $visualizaciones = $('#visualizaciones');
  var $frame = $visualizaciones.find('.frame'); window.frr = $frame;
  window.sly = new Sly($frame, {
    //scrollBar: $visualizaciones.find('.scrollbar'),
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'swing',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,

    // Buttons
    prev: $visualizaciones.find('.prev'),
    next: $visualizaciones.find('.next')
  }).init();

  sly.slideTo(3);

}());