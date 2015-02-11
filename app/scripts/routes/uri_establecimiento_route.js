Mec.UriEstablecimientoRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	datos: [
                    {
                        titulo: 'Periodo',
                        contenido: '2014'
                    },{
                        titulo: 'Código de Establecimiento',
                        contenido: '1702018'
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
                        titulo: 'Dirección',
                        contenido: ''
                    },{
                        titulo: 'Programa',
                        contenido: ''
                    },{
                        titulo: 'Proyecto 111',
                        contenido: ''
                    },{
                        titulo: 'Proyecto 822',
                        contenido: ''
                    }
                ],

                instituciones: [
                    {
                        codigo: '16272',
                        nombre: '17-22',
                        matriculados: '0'
                    },{
                        codigo: '3108',
                        nombre: '2483',
                        matriculados: '0'
                    }
                ]
        	}
        ];
    }
});