Mec.DatosRoute = Ember.Route.extend({
    model: function () {
        return [
            {
                id: '1',
            	nombre: 'ESTABLECIMIENTOS ESCOLARES',
            	descripcion: 'Contiene información sobre la ubicación geográfica de los establecimientos escolares tales como el departamento, distrito,barrio/localidad donde se encuentran asentados, además de la zona (urbana o rural) a la cual pertenecen, y los datos georreferenciadas como las coordenadas planas (en metros) y geograficas. El Sistema de informacion de Estadística Continua (SIEC) considera “Establecimiento Escolar” a la construcción que existe dentro de un predio (terreno) que se emplea para la enseñanza, donde puede funcionar una o más instituciones educativas con sus respectivos niveles/modalidades de educación.',
                diccionario: true,
                datos: true
            },
            {
                id: '2',
                nombre: 'DIRECTORIO DE INSTITUCIONES',
                descripcion: 'Contiene datos básicos acerca de las instituciones educativas, como el departamento, distrito y zona a la que pertenecen las mismas.',
                diccionario: true,
                datos: true
            },
            {
                id: '3',
                nombre: 'DATOS ESPECÍFICOS DE INSTITUCIONES EDUCATIVAS',
                descripcion: 'Contiene datos de los niveles/modalidades de educación ofertados por las instituciones educativas; región administrativa a la que pertenece la institución educativa; tipo de organización, participación comunitaria, dirección del establecimiento escolar, servicio disponible (internet, telefono, correo electronico, etc.). Una institución educativa puede poseer diferentes locales escolares ubicados en un mismo o en diferentes departamentos geográficos. El SIEC considera una misma institución cuando varios niveles o modalidades tienen una organización, gestión y administración única. Por ejemplo: Centro Regional de Educación Gral. Patricio Escobar de Encarnación, Colegio Santa Clara de Asunción.',
                diccionario: true,
                datos: true
            },
            {
                id: '4',
                nombre: 'MATRICULA EDUCACION ESCOLAR BASICA - CICLOS',
                descripcion: 'Se refiere a la cantidad de alumnos matriculados del 1.º al 9.º grado con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '5',
                nombre: 'MATRICULA EDUCACION INCLUSIVA',
                descripcion: 'Corresponde a la cantidad de matriculados por ciclo/niveles/programas especiales de educación inclusiva con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '6',
                nombre: 'MATRICULA EDUCACION PERMANENTE',
                descripcion: 'Se refiere a la cantidad de matriculados en las diferentes modalidades de educación permanente con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '7',
                nombre: 'MATRICULA EDUCACION SUPERIOR',
                descripcion: 'Se refiere a la cantidad de matriculados en las diferentes modalidades de educación superior con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '8',
                nombre: 'MATRICULA EDUCACION INICIAL',
                descripcion: 'Se refiere a la cantidad de matriculados en las etapas maternal, prejardín, jardín y preescolar con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '9',
                nombre: 'MATRICULA EDUCACION MEDIA',
                descripcion: 'Se refiere a la cantidad de matriculados del 1.º al 3er. curso en las diferentes modalidades de educación media con sus correspondientes códigos identificatorios.',
                diccionario: true,
                datos: true,
                mapa: true
            },
            {
                id: '10',
                nombre: 'MATRICULA POR DEPARTAMENTO Y DISTRITO',
                descripcion: 'Se refiere a la cantidad total de matriculados por departamento/distrito según sector y zona.',
                diccionario: true,
                datos: true
            },
            {
                id: '11',
                nombre: 'NOMINA DE FUNCIONARIOS DOCENTES',
                descripcion: ' Contiene todos los datos de la nómina de funcionarios docentes, conforme a lo establecido en la ley 5189/14. El formato de los datos sigue la recomendación propuesta por la Secretaría de la Función Pública.',
                diccionario: true,
                datos: true
            },
            {
                id: '12',
                nombre: 'NOMINA DE FUNCIONARIOS ADMINISTRATIVOS',
                descripcion: 'Contiene todos los datos de la nómina de funcionarios administrativos, conforme a lo establecido en la ley 5189/14. El formato de los datos sigue la recomendación propuesta por la Secretaría de la Función Pública.',
                diccionario: true,
                datos: true
            },
            {
                id: '13',
                nombre: 'NOMINA DE FUNCIONARIOS COMISIONADOS DEL MEC A OTROS ORGANISMOS DEL ESTADO',
                descripcion: 'Contiene todos los datos de la nómina de los funcionarios que fueron comisionados del MEC a otros organismos del Estado.',
                archivos: [
                    {
                        nombre: 'Nómina',
                        tipo: 'excel'
                    }
                ]
            },
            {
                id: '14',
                nombre: 'NOMINA DE FUNCIONARIOS COMISIONADOS AL MEC DESDE OTROS ORGANISMOS DEL ESTADO',
                descripcion: 'Contiene todos los datos de la nómina de los funcionarios que fueron comisionados desde otros organismos del Estado al MEC.',
                archivos: [
                    {
                        nombre: 'Nómina',
                        tipo: 'excel'
                    }
                ]
            },
            {
                id: '15',
                nombre: 'INVENTARIO DE BIENES',
                descripcion: 'Contiene todos los datos del inventario de bienes, muebles, inmuebles y vehículos con que cuenta el MEC.',
                archivos: [
                    {
                        nombre: 'Rodados e inmuebles',
                        tipo: 'zip'
                    },{
                        nombre: 'Muebles',
                        tipo: 'zip'
                    }
                ]
            },
            {
                id: '16',
                nombre: 'CONTRATACIONES',
                descripcion: 'Se refiere a los llamados para contrataciones de bienes y/o servicios del Ministerio de Educación y Cultura.',
                diccionario: true,
                datos: true
            },
            {
                id: '17',
                nombre: 'REGISTRO DE TITULOS',
                descripcion: 'Contiene datos de la nómina de personas cuyos títulos de grado y postgrado fueron registrados en el Ministerio de Educación y Cultura.',
                diccionario: true,
                datos: true
            },
            {
                id: '18',
                nombre: 'PLANILLAS DE ESTABLECIMIENTOS ESCOLARES PRIORIZADOS ELEGIBLES - FONACIDE',
                descripcion: 'Contiene información sobre establecimientos escolares priorizados y elegibles para la inversión de proyectos de infraestructura en educación a ser financiados con recursos provenientes del Fondo Nacional de Inversión Pública y Desarrollo (FONACIDE) transferidos a las Gobernaciones y Municipalidades, que han reportado sus requerimientos a través de la metodología de Microplanificación de la oferta educativa.',
                catalogo: true
            },
            {
                id: '19',
                nombre: 'ESTABLECIMIENTOS ESCOLARES PRIORIZADOS ELEGIBLES - FONACIDE: AULAS',
                descripcion: 'Corresponde a los requerimientos de contrucción, reparación o adecuación de aulas correspondientes a las instituciones educativas del país priorizadas por distrito y por período.',
                diccionario: true,
                datos: true
            },
            {
                id: '20',
                nombre: 'ESTABLECIMIENTOS ESCOLARES PRIORIZADOS ELEGIBLES - FONACIDE: SANITARIOS',
                descripcion: 'Corresponde a los requerimientos de construcción, reparación y/o adecuación de sanitarios correspondientes a las instituciones educativas del país priorizadas por distrito y por período.',
                diccionario: true,
                datos: true
            },
            {
                id: '21',
                nombre: 'ESTABLECIMIENTOS ESCOLARES PRIORIZADOS ELEGIBLES - FONACIDE: OTROS ESPACIOS',
                descripcion: 'Corresponde a los requerimientos de construcción, reparación y/o adecuación de otros espacios (distintos a aulas y sanitarios) correspondientes a las instituciones educativas del país priorizadas por distrito y por periodo.',
                diccionario: true,
                datos: true
            },
            {
                id: '22',
                nombre: 'ESTABLECIMIENTOS ESCOLARES PRIORIZADOS ELEGIBLES - FONACIDE: MOBILIARIOS',
                descripcion: 'Corresponde a los requerimientos de mobiliarios, muebles o equipamientos de aulas correspondientes a las instituciones educativas del país priorizadas por distrito y por período.',
                diccionario: true,
                datos: true
            },
            {
                id: '23',
                nombre: 'Servicios Básicos de los Establecimientos según FONACIDE',
                descripcion: 'Contiene datos generales de los establecimientos escolares, relacionados a la ubicación geográfica, servicios básicos e infraestructura.',
                diccionario: true,
                datos: true
            },
            {
                id: '24',
                nombre: 'Proyecto 111',
                descripcion: 'Contiene la datos del proyecto de "Ampliación y reposición de espacios escolares en 111 Establecimientos Educativos del MEC, en Asunción y 10 departamentos geográficos del país". Dicho proyecto tiene como propósito culminar las obras iniciadas en los años 2011 y 2012 –que cuentan con contratos vigentes– considerando los requerimientos pedagógicos y socioculturales. Las intervenciones consisten en ampliar la infraestructura edilicia escolar para aumentar la capacidad del servicio educacional, sin modificación de lo existente, así como la reposición que implica la renovación parcial o total de los espacios educativos existentes. El proyecto es financiado por el Fondo para la Excelencia de la Educación y la Investigación y totaliza una inversión de 6.663.596 dólares americanos (tipo de cambio: 4.500).',
                diccionario: true,
                datos: true
            },
            {
                id: '25',
                nombre: 'Proyecto 822',
                descripcion: 'Contiene datos del proyecto de “Ampliación y reposición de espacios escolares en 822 Establecimientos Educativos del MEC, en Asunción y los 17 departamentos geográficos del país”. Dicho proyecto busca mejorar la estructura edilicia de 822 establecimientos educativos según las normas estandarizadas de infraestructura escolar, acorde a los requerimientos pedagógicos actuales. Además de ampliar los espacios educativos, se proveerán de mobiliarios acorde con la demanda de la matrícula para asegurar las condiciones adecuadas para el desarrollo de las situaciones de enseñanza- aprendizaje en las instituciones educativas. El proyecto es financiado por el Fondo para la Excelencia de la Educación y la Investigación y totaliza una inversión de 42.791.803 dólares americanos (Tipo de cambio: 4.500).',
                diccionario: true,
                datos: true
            }
        ];
    }
});
