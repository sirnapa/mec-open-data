Mec.UriInstitucionRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	datos: [
                    {
                        titulo: 'Periodo',
                        contenido: '2012'
                    },{
                        titulo: 'Código de Establecimiento',
                        contenido: '1702018'
                    },{
                        titulo: 'Institución',
                        contenido: '6253 CHAMAQUEI CHIQUENO - LOCAL. ISLA AL'
                    },{
                        titulo: 'Departamento',
                        contenido: 'Alto Paraguay'
                    },{
                        titulo: 'Distrito',
                        contenido: 'Carmelo Peralta'
                    },{
                        titulo: 'Zona',
                        contenido: 'Rural'
                    },{
                        titulo: 'Barrio/Localidad',
                        contenido: 'COM INDIG CUCAANI'
                    },{
                        titulo: 'Sector',
                        contenido: 'Oficial'
                    },{
                        titulo: 'Región administrativa',
                        contenido: 'Alto Paraguay - Región 2'
                    }
                ],

                matriculaciones: [
                    {
                        nivel: 'MATRICULA EDUCACION ESCOLAR BASICA - CICLOS',
                        matriculados: '16'
                    },{
                        nivel: 'MATRICULA EDUCACION INCLUSIVA',
                        matriculados: '0'
                    },{
                        nivel: 'MATRICULA EDUCACION PERMANENTE',
                        matriculados: '0'
                    },{
                        nivel: 'MATRICULA EDUCACION SUPERIOR',
                        matriculados: '0'
                    },{
                        nivel: 'MATRICULA EDUCACION INICIAL',
                        matriculados: '6'
                    },{
                        nivel: 'MATRICULA EDUCACION MEDIA',
                        matriculados: '0'
                    }
                ]
        	}
        ];
    }
});