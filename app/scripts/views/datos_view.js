Mec.DatosView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        window.descripcion = function(btn){
        	var descripcion = $(btn).parent().parent().next();

        	if(!descripcion.is(':visible')){
        		descripcion.hide().removeClass('hidden-xs');
        		descripcion.slideDown('slow',function(){
        			$(btn).find('[data-ver]').hide();
        			$(btn).find('[data-ocultar]').hide()
        				.removeClass('hidden').fadeIn();
        		});
        	}else{
        		descripcion.slideUp('slow',function(){
        			descripcion.addClass('hidden-xs');
        			$(btn).find('[data-ocultar]').hide().addClass('hidden');
        			$(btn).find('[data-ver]').fadeIn();
        		});
        	}
        };

        window.redimensionar = function(){

          $('.listado li').each(function(f,fila){
            $(fila).css('height',$(fila).height());
          });

        };

        $('body').attr('onresize','redimensionar();');
        window.redimensionar();
    }
});