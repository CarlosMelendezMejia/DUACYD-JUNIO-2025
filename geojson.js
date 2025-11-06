// Inicialización del mapa con las mismas coordenadas
var map = L.map('map').setView([19.4745, -99.0455], 16);

// Capa de tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Datos GeoJSON con TODOS los dispositivos
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        // ========== INTERCOMUNICADORES (0-12) ==========
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 1",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04640215025374, 19.476081910531164],
                "type": "Point"
            },
            "id": 0
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 2",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04663671605454, 19.474543517953606],
                "type": "Point"
            },
            "id": 1
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 3",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04640039642254, 19.474161953122405],
                "type": "Point"
            },
            "id": 2
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 4",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04547291108781, 19.47492285428889],
                "type": "Point"
            },
            "id": 3
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 5",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04509494740493, 19.474940550869476],
                "type": "Point"
            },
            "id": 4
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 6",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04492283131489, 19.473606537883057],
                "type": "Point"
            },
            "id": 5
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 7",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04437485131831, 19.474557597574858],
                "type": "Point"
            },
            "id": 6
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 8",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04417191616065, 19.474035538672013],
                "type": "Point"
            },
            "id": 7
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 9",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04345550188582, 19.47454379368554],
                "type": "Point"
            },
            "id": 8
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 10",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04423213228168, 19.475152167907282],
                "type": "Point"
            },
            "id": 9
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 11",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04446909702715, 19.475831733307515],
                "type": "Point"
            },
            "id": 10
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 12",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04294351730591, 19.47530568864697],
                "type": "Point"
            },
            "id": 11
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "intercomunicador",
                "nombre": "Intercomunicador 13",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04213978813306, 19.47505144217274],
                "type": "Point"
            },
            "id": 12
        },
        
        // ========== BOTONES DE EMERGENCIA (13-29) ==========
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 1",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04657347528813, 19.474736089199098],
                "type": "Point"
            },
            "id": 13
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 2",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04499681508642, 19.475141381426326],
                "type": "Point"
            },
            "id": 14
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 3",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04515948791318, 19.474391089517283],
                "type": "Point"
            },
            "id": 15
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 4",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0436121918466, 19.474536552228997],
                "type": "Point"
            },
            "id": 16
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 5",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0436425313238, 19.47464734645962],
                "type": "Point"
            },
            "id": 17
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 6",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04373316571345, 19.474555017939167],
                "type": "Point"
            },
            "id": 18
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 7",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0437088936478, 19.4742918824048],
                "type": "Point"
            },
            "id": 19
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 8",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04515499522876, 19.475382284563025],
                "type": "Point"
            },
            "id": 20
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 9",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04613656961627, 19.476340378631377],
                "type": "Point"
            },
            "id": 21
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 10",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04465889211676, 19.474469500643323],
                "type": "Point"
            },
            "id": 22
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 11",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04358699001008, 19.47412869217908],
                "type": "Point"
            },
            "id": 23
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 12",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04577943270327, 19.474650404265972],
                "type": "Point"
            },
            "id": 24
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 13",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.044511074827, 19.474395825082198],
                "type": "Point"
            },
            "id": 25
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 14",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0440747062465, 19.47418392236598],
                "type": "Point"
            },
            "id": 26
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 15",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0441921809868, 19.473477183448253],
                "type": "Point"
            },
            "id": 27
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 16",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.0428099828538, 19.475317644490048],
                "type": "Point"
            },
            "id": 28
        },
        {
            "type": "Feature",
            "properties": {
                "tipo": "boton",
                "nombre": "Botón de Emergencia 17",
                "ubicacion": "Descripción de ubicación"
            },
            "geometry": {
                "coordinates": [-99.04225912667326, 19.474839037202827],
                "type": "Point"
            },
            "id": 29
        }
    ]
};

// Configuración de iconos personalizados
var iconoIntercomunicador = L.icon({
    iconUrl: 'ruta/a/icono-intercomunicador.png',  // CAMBIA ESTO
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

var iconoBoton = L.icon({
    iconUrl: 'ruta/a/icono-boton.png',  // CAMBIA ESTO
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

// Renderizar los marcadores en el mapa
L.geoJSON(geojsonData, {
    pointToLayer: function (feature, latlng) {
        // Seleccionar el icono según el tipo de dispositivo
        var icono = feature.properties.tipo === 'intercomunicador' ? iconoIntercomunicador : iconoBoton;
        
        // Crear el marcador con el icono correspondiente
        var marcador = L.marker(latlng, { icon: icono });
        
        // Agregar tooltip con la información al hacer hover
        var tooltipContent = '<strong>' + feature.properties.nombre + '</strong><br>' + 
                            feature.properties.ubicacion;
        
        marcador.bindTooltip(tooltipContent, {
            permanent: false,
            direction: 'top',
            offset: [0, -20]
        });
        
        return marcador;
    }
}).addTo(map);