Mec.GoogleMapsComponent = Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(this.get("latitud"),
this.get("longitud")),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if(this.get("simple")){
    	$.extend(options,{
        panControl: false,
  		/*
        zoomControl: false,
  			mapTypeControl: false,
  			scaleControl: false,
  			streetViewControl: false,
  			overviewMapControl: false
        */
    	});
    }

    window.mapa = new google.maps.Map(container[0], options);

    window.abrirMapa = function(){
      $('.fondo-mapa').hide()
        .removeClass('hidden')
        .slideDown('slow',function(){
          google.maps.event.trigger(window.mapa,'resize');
        });
    }; 

    window.cerrarMapa = function(){
      $('.fondo-mapa').slideUp();
    };

  }.on('didInsertElement')
});