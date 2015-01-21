Mec.DatasetsRoute = Ember.Route.extend({
    model: function () {
        return [
            {
                id: '1',
            	nombre: 'ESTABLECIMIENTOS ESCOLARES',
            	descripcion: 'Contiene información sobre la ubicación geográfica de los establecimientos escolares tales como el departamento, distrito,barrio/localidad donde se encuentran asentados, además de la zona (urbana o rural) a la cual pertenecen, y los datos georreferenciadas como las coordenadas planas (en metros) y geograficas. El Sistema de informacion de Estadística Continua (SIEC) considera “Establecimiento Escolar” a la construcción que existe dentro de un predio (terreno) que se emplea para la enseñanza, donde puede funcionar una o más instituciones educativas con sus respectivos niveles/modalidades de educación.'
            },
            {
                id: '2',
                nombre: 'DIRECTORIO DE INSTITUCIONES',
                descripcion: 'Contiene datos básicos acerca de las instituciones educativas, como el departamento, distrito y zona a la que pertenecen las mismas.'
            },
            {
                id: '3',
                nombre: 'DATOS ESPECÍFICOS DE INSTITUCIONES EDUCATIVAS',
                descripcion: 'Contiene datos de los niveles/modalidades de educación ofertados por las instituciones educativas; región administrativa a la que pertenece la institución educativa; tipo de organización, participación comunitaria, dirección del establecimiento escolar, servicio disponible (internet, telefono, correo electronico, etc.). Una institución educativa puede poseer diferentes locales escolares ubicados en un mismo o en diferentes departamentos geográficos. El SIEC considera una misma institución cuando varios niveles o modalidades tienen una organización, gestión y administración única. Por ejemplo: Centro Regional de Educación Gral. Patricio Escobar de Encarnación, Colegio Santa Clara de Asunción.'
            },
            {
                id: '4',
                nombre: 'MATRICULA EDUCACION ESCOLAR BASICA - CICLOS',
                descripcion: 'Se refiere a la cantidad de alumnos matriculados del 1.º al 9.º grado con sus correspondientes códigos identificatorios.'
            },
            {
                id: '5',
                nombre: 'MATRICULA EDUCACION INCLUSIVA',
                descripcion: 'Corresponde a la cantidad de matriculados por ciclo/niveles/programas especiales de educación inclusiva con sus correspondientes códigos identificatorios.'
            },
            {
                id: '6',
                nombre: 'MATRICULA EDUCACION PERMANENTE',
                descripcion: 'Se refiere a la cantidad de matriculados en las diferentes modalidades de educación permanente con sus correspondientes códigos identificatorios.'
            },
            {
                id: '7',
                nombre: 'MATRICULA EDUCACION SUPERIOR',
                descripcion: 'Se refiere a la cantidad de matriculados en las diferentes modalidades de educación superior con sus correspondientes códigos identificatorios.'
            },
            {
                id: '8',
                nombre: 'MATRICULA EDUCACION INICIAL',
                descripcion: 'Se refiere a la cantidad de matriculados en las etapas maternal, prejardín, jardín y preescolar con sus correspondientes códigos identificatorios.'
            },
            {
                id: '9',
                nombre: 'MATRICULA EDUCACION MEDIA',
                descripcion: 'Se refiere a la cantidad de matriculados del 1.º al 3er. curso en las diferentes modalidades de educación media con sus correspondientes códigos identificatorios.'
            },
            {
                id: '10',
                nombre: 'MATRICULA POR DEPARTAMENTO Y DISTRITO',
                descripcion: 'Se refiere a la cantidad total de matriculados por departamento/distrito según sector y zona.'
            },
            {
                id: '',
                nombre: '',
                descripcion: ''
            }
        ];
    }
});
