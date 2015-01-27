Mec.DatosVerView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        $('.table-responsive').responsiveTable({});

        $('.orden').click(function(){

        	// El comportamiento del botón es:
        	// sin orden > descendente > ascendente > sin orden

        	if($(this).hasClass('ascendente')){
        		$(this).removeClass('ascendente');
        	} else if($(this).hasClass('descendente')){
        		$(this).removeClass('descendente');
        		$(this).addClass('ascendente');
        	} else{
        		$(this).addClass('descendente');
        	}

        });

        $('.limpiar').click(function(){
        	var input = $(this).prev();
        	input.val('');
        	input.trigger('change');
        });
	}
});