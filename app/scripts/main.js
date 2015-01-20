// onReady
$(document).ready(function(){

	// Ajustamos la pantalla;
	bodyOnResize();

	// Sidebar izquierda
	menuPrincipal();
	
	// Marcar en el menu principal el modulo actual
	marcarMenuActual();
	
	// Habilitar submenu
	habilitarSubmenu();

	// Boton que muestra el menu lateral para resoluciones inferiores
	$("#menu-toggle").click(function(e){
		e.stopPropagation();
		$("#wrapper").toggleClass("active clicked");
	});

});

function bodyOnResize(){
	$('#page-content-wrapper').css('width',$('#wrapper').width());
	if(window.sly!=undefined){
    	window.sly.reload();
      	window.sly.toCenter();
	}
}

function menuPrincipal(){
	// Hover
	$('#sidebar-wrapper').hover(function(){
		$('#wrapper').addClass('active');
		//bodyOnResize();
	},function(){
		if(!$('#wrapper').hasClass('clicked')){
			$('#wrapper').removeClass('active');
		}
	});
	
	// Click
	$('#sidebar-wrapper').click(function(e){
		e.stopPropagation();
		$("#wrapper").addClass("active clicked");
	});
	$(document).click(function(){
		marcarMenuActual();
		$('#wrapper').removeClass('active clicked');		
	});
}

function marcarMenuActual(){
	var actual = $('#'+$("body").data('modulo')).addClass('current');
	var li = actual.parent().parent(); 
	if(li.is('li')){
		if(!li.hasClass('abierto')){
			cerrarSubmenu();
		}
		actual.parent().slideDown();
		li.addClass('abierto');
	}
}

// Submenu
function habilitarSubmenu(){
	$('ul.sidebar-nav li ul').each(function(s,submenu){		
		$(submenu).data('submenu',true);
		$(submenu).parent().click(function(){
			var sm = $(this).find('ul');
			if(sm.is(':visible')){
				sm.slideUp('slow',function(){
					sm.parent().removeClass('abierto');
				});
			}else{
				cerrarSubmenu();
				sm.parent().addClass('abierto');
				sm.slideDown();
			}
		});
	});
}

function cerrarSubmenu(){
	$('ul.sidebar-nav li.abierto ul').slideUp('fast',function(){
		$(this).parent().removeClass('abierto');                                         
	});
}