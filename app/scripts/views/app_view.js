Ember.View = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        $('#compartir').sharrre({
         share: {
           twitter: true,
           facebook: true,
           googlePlus: true
         },
         urlCurl: 'bower_components/sharrre/sharrre.php',
         template: '<div class="box">'+
                     '<div class="left">Compartir</div>'+
                     '<div class="middle">'+
                       '<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>'+
                       '<a href="#" class="twitter"><i class="fa fa-twitter"></i></a>'+
                       '<a href="#" class="googleplus"><i class="fa fa-google-plus"></i></a>'+
                     '</div>'+
                     '<div class="right">{total}</div>'+
                   '</div>',
         enableHover: false,
         enableTracking: true,
         render: function(api, options){
           $(api.element).on('click', '.twitter', function() {
             api.openPopup('twitter');
           });
           $(api.element).on('click', '.facebook', function() {
             api.openPopup('facebook');
           });
           $(api.element).on('click', '.googleplus', function() {
             api.openPopup('googlePlus');
           });
         }
       });
     }
});