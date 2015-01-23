Mec.DatosDiccionarioRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	nombre: 'AÑO',
            	descripcion: 'Se refiere al año de captura de los datos',
            	tipo: 'xsd:gYear',
            	restricciones: 'Sólo permite la carga de datos del año de su captura.',
            	ejemplo: '2012'
        	},{
            	nombre: 'CODIGO_ESTABLECIMIENTO',
            	descripcion: 'Código de establecimiento permite identificar en forma única los diferentes establecimientos educativos que se encuentran en el país.\nEl Sistema de informacion de Estadística Continua (SIEC) considera “Establecimiento Escolar” a la construcción que existe dentro de un predio (terreno) que se emplea para la enseñanza, donde puede funcionar una o más instituciones educativas con sus respectivos niveles/modalidades de educación.',
            	tipo: 'xsd:string',
            	restricciones: 'No más de 7 caracteres',
            	referencia: {
            			texto: 'Reglamento del Sistema de Información de Estadística Continua (SIEC)',
            			enlace: 'http://www.mec.gov.py/planificacion_educativa/Revistas/Reglamento_SIEC.pdf'
            		},
            	ejemplo: '0010001'
        	},{
            	nombre: 'CODIGO_DEPARTAMENTO',
            	descripcion: 'Corresponde al código asignado según la cartografía nacional al departamento geográfico donde esta localizado el establecimiento escolar.',
            	tipo: 'xsd:string',
            	restricciones: 'No más de 2 caracteres',
            	ejemplo: '00'
        	},{
            	nombre: 'NOMBRE_DEPARTAMENTO',
            	descripcion: 'Corresponde a la descripción del nombre del departamento geográfico correspondiente al código.',
            	tipo: 'xsd:string',
            	restricciones: 'No más de 40 caracteres',
            	ejemplo: 'ASUNCION'
        	},{
            	nombre: 'CODIGO_DISTRITO',
            	descripcion: 'Corresponde al código asignado al distrito del departamento geográfico donde esta localizado el establecimiento escolar.',
            	tipo: 'xsd:string',
            	restricciones: 'No más de 2 caracteres',
            	ejemplo: '00'
        	},{
            	nombre: 'NOMBRE_DISTRITO',
            	descripcion: 'Corresponde a la descripción del nombre del distrito correspondiente al código.',
            	tipo: 'xsd:string',
            	restricciones: 'No más de 40 caracteres',
            	ejemplo: 'ASUNCION'
        	}
        ];
    }
});