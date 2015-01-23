Mec.DatosVerView = Ember.View.extend({
    didInsertElement : function(){
        this._super();
        $('.table-responsive').responsiveTable({});
	}
});