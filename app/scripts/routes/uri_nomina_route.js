Mec.UriNominaRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	datos: [
                    {
                        titulo: 'Periodo',
                        contenido: '2014'
                    },{
                        titulo: 'Mes',
                        contenido: 'Diciembre'
                    },{
                        titulo: 'Nro de documento',
                        contenido: '3989726'
                    },{
                        titulo: 'Nombre completo',
                        contenido: 'ABDON ABEL BENVENISTE GRECO'
                    },{
                        titulo: 'Antigüedad docente',
                        contenido: '1 año y 11 meses'
                    },{
                        titulo: 'Antigüedad administrativa',
                        contenido: '6 años y 1 mes'
                    },{
                        titulo: 'Número matriculación',
                        contenido: ''
                    }
                ],

                asignaciones: [
                    {
                        concepto: 'Sueldos',
                        dependencia: 'DEPARTAMENTO DE ASUNTOS PENDIENTES',
                        cargo: 'ACTUARIO/A',
                        categoriarubro: 'GE1',
                        asignacioncategoriarubro: '1.824.055 ',
                        cantidad: '1',
                        asignacion: '1.658.232',
                        devuelto: ''
                    }
                ]
        	}
        ];
    }
});