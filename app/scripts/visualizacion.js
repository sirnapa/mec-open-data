$('#filtros').hide().removeClass('hidden');

$('#lista-elastica .le-caja li').click(function(){
  $(this).parent().find('li')
    .addClass('oculto')
    .removeClass('activo');
  $(this).toggleClass('activo');

  if($(this).hasClass('activo')){
    $(this).removeClass('oculto');
  }
});

function verCodigoExportacion(){
  if($('#codigo-exportacion').is(':visible')){return;}
  $('#codigo-exportacion').hide().removeClass('hidden');
  $('#codigo-exportacion').slideDown('slow');
}

function toggleFiltros(){
  $('#filtros').stop().slideToggle('slow',function(){
    $('#filtrar-mas,#filtrar-menos').toggleClass('hidden');
  });
}