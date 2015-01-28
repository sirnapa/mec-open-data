Mec.DatosDiccionarioView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        window.redimensionar = function(){

          $('.listado li').each(function(f,fila){
            $(fila).css('height',$(fila).height());
          });

        };

        $('body').attr('onresize','redimensionar();');
        window.redimensionar();
	}
});