Mec.IndexRoute = Ember.Route.extend({
    model: function () {
        return [
            {
            	titulo: 'Ejemplo 1',
            	descripcion: 'Este es un ejemplo de la galería',
                imagen: 'images/destacados/ejemplo1.png',
                thumbnail: 'images/thumbnails/ejemplo1.png',
                enlace: 'http://localhost/ejemplo1'
            },{
                titulo: 'Ejemplo 2',
                descripcion: 'Este es otro ejemplo de la galería',
                imagen: 'images/destacados/ejemplo2.png',
                thumbnail: 'images/thumbnails/ejemplo2.png',
                enlace: 'http://localhost/ejemplo2'
            },{
                titulo: 'Ejemplo 3',
                descripcion: 'Este es un ejemplo de la galería',
                imagen: 'images/destacados/ejemplo3.png',
                thumbnail: 'images/thumbnails/ejemplo3.png',
                enlace: 'http://localhost/ejemplo3'
            },{
                titulo: 'Ejemplo 4',
                descripcion: 'Este es otro ejemplo de la galería',
                imagen: 'images/destacados/ejemplo4.png',
                thumbnail: 'images/thumbnails/ejemplo4.png',
                enlace: 'http://localhost/ejemplo4'
            },{
                titulo: 'Ejemplo 5',
                descripcion: 'Este es un ejemplo de la galería',
                imagen: 'images/destacados/ejemplo5.png',
                thumbnail: 'images/thumbnails/ejemplo5.png',
                enlace: 'http://localhost/ejemplo5'
            },{
                titulo: 'Ejemplo 6',
                descripcion: 'Ejemplo de imagen pesada',
                imagen: 'http://graphics8.nytimes.com/images/2013/04/25/world/paraguay/paraguay-superJumbo.jpg',
                thumbnail: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-kTHfOi6pLrYxRlrk-ZT-AXI9BS6Z4ubk3g0JSqZIYWiWa_pw',
                enlace: 'http://graphics8.nytimes.com/images/2013/04/25/world/paraguay/paraguay-superJumbo.jpg'
            }
        ];
    }
});
