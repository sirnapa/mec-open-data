Mec.ParticipaView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

		$('#consultas').masonry({
		  // options
		  itemSelector: '.consulta'
		});

	}
});