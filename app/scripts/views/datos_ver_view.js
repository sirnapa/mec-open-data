Mec.DatosVerView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        // Correcciones del ancho de los select en el filtro de la tabla

        $('.table-responsive thead .combobox-container input').change(function(){
            var texto = $(this).val();
            var celda = $(this).parent().parent().parent();

            if(texto.length){
                var ancho = parseInt(texto.length) * 6;
                ancho = (ancho>24? ancho : 30) + (celda.is('th')? 60 : 0);
                celda.css('min-width', ancho);
                if(!celda.is('th')){
                    celda.css('max-width', ancho);
                }
            }else{
                celda.css('min-width',60);
            }

        });

        $('.table-responsive thead .combobox-container input').trigger('change');

        // Los comparadores del filtro son readonly
        var ver_opciones_comparador = function(){
                var dropdown = $(this).parent().find('.dropdown-toggle');
                
                if(dropdown.parent().parent().hasClass('combobox-selected')){
                    dropdown.find('.glyphicon-remove').click();
                }
                dropdown.find('.caret').click();
            };

        $('.table-responsive thead .comparador').attr('readonly',true)
            .click(ver_opciones_comparador)
            .keydown(ver_opciones_comparador);

        // Creación de la tabla con RWD Table

        var tabla = $('.table-responsive').responsiveTable({});
        var botones_derecha = $('.btn-toolbar').find('.dropdown-btn-group button');
        $(botones_derecha[0]).html('Ver todos');
        $(botones_derecha[1]).html('Ver columnas');

        // Para sitios con localización
        $('.btn-toolbar .focus-btn-group button').unbind()
            .html('<span class="fa-lg icon-py-mapa"></span> <span class="hidden-xs">Ver todas las localizaciones</span>')
            .attr('onclick','abrirMapa();');

        // Para sitios sin localización
        // $('.btn-toolbar .focus-btn-group button').unbind().remove();
        //

        var tabla_original = tabla.find('div').next('table');
        var filtros_clonados = tabla.find('table').first().find('thead tr th');
        var titulos = [];

        tabla_original.find('thead tr th').each(function(t,th){
            titulos.push($(th).find('span[data-titulo=true]').html());

            // De original a clonado
            $(th).find('input,select').keyup(function(){
                $(filtros_clonados[t]).find('input,select').val($(this).val());
            });

            // De clonado a original
            $(filtros_clonados[t]).find('input,select').keyup(function(){
                $(th).find('input,select').val($(this).val());
            });

        });

        $(botones_derecha[1]).next().find('li').each(function(l,li){
            $(li).find('label').html(titulos[l]);
        });

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