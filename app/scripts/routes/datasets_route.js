Mec.DatasetsRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	nombre: 'ESTABLECIMIENTOS ESCOLARES',
            	descripcion: 'Contiene información sobre la ubicación geográfica de los establecimientos escolares tales como el departamento, distrito,barrio/localidad donde se encuentran asentados, además de la zona (urbana o rural) a la cual pertenecen, y los datos georreferenciadas como las coordenadas planas (en metros) y geograficas. El Sistema de informacion de Estadística Continua (SIEC) considera “Establecimiento Escolar” a la construcción que existe dentro de un predio (terreno) que se emplea para la enseñanza, donde puede funcionar una o más instituciones educativas con sus respectivos niveles/modalidades de educación.'
            },
            {
                nombre: 'DIRECTORIO DE INSTITUCIONES',
                descripcion: 'Contiene datos básicos acerca de las instituciones educativas, como el departamento, distrito y zona a la que pertenecen las mismas.'
            },
            {
                nombre: '',
                descripcion: ''
            }
        ];
    }
});
