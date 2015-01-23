Mec.IndexView = Ember.View.extend({
    didInsertElement : function(){
        this._super();
        
        window.redimensionar = function(){

          var alto = 0;

        	$('.vista-previa').each(function(v,vista){
	        	$(vista).css('height',$(vista).width())
	        		.attr('data-indice',v)
              .tooltip({title:$(vista).data('titulo')});
            alto += $(vista).outerHeight(true);
	        });

        	$('#portada').data('total',$('.vista-previa').length)
            .css('height', $('.vista-previa').first().is(':visible')? 
              alto/2 : ($(window).height() - 
                        $('header').outerHeight(true) - 
                        $('#anterior').parent().outerHeight(true)));
        };

        $('body').attr('onresize','redimensionar();');
        window.redimensionar();

      	window.cambiar = function(btn){
      		$('.vista-previa.active').removeClass('active');
      		$(btn).addClass('active');

      		var indice = $(btn).data('indice');

      		$('#portada').css('background-image','url('+$(btn).data('imagen')+')')
            .attr('onclick','window.open("'+$(btn).data('enlace')+'","_self");')
      			.data('indice',indice)
            .empty();

          var info = $('<div>').addClass('carousel-caption')
            .appendTo('#portada');

          $('<h2>').html($(btn).data('titulo')).appendTo(info);
          $('<p>').html($(btn).data('descripcion')).appendTo(info);

      		if(indice==0){
      			$('#anterior').addClass('disabled');
      		}else{
      			$('#anterior').removeClass('disabled');
      		}

      		if(indice==($('#portada').data('total') - 1)){
      			$('#siguiente').addClass('disabled');
      		}else{
      			$('#siguiente').removeClass('disabled');
      		}
      	};

      	window.cambiar($('.vista-previa').first());

      	window.anterior = function(btn){
      		if($(btn).parent().hasClass('disabled')){return;}
      		cambiar($('.vista-previa[data-indice=' +
      			(parseInt($('#portada').data('indice')) - 1) + ']'));
      	};

      	window.siguiente = function(btn){
      		if($(btn).parent().hasClass('disabled')){return;}
      		cambiar($('.vista-previa[data-indice=' +
      			(parseInt($('#portada').data('indice')) + 1) + ']'));
      	};

        window.seleccionar = function(btn){
          $('#portada').removeClass('cambio-automatico');
          cambiar(btn);
        };

        window.autocambio = function(){
          setTimeout(function () {

            if($('#portada').hasClass('cambio-automatico')){
              var indice = $('#portada').data('indice');

              if(indice<($('#portada').data('total') - 1)){
                siguiente($('#siguiente a'));
              }else{
                cambiar($('.vista-previa').first());
              }

              autocambio();
            }

          }, 3000);
        };

        window.autocambio();

    }
});