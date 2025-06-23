ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([671085.627835, 5919624.032503, 677469.992368, 5922948.435336]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BarriosElegidos_1 = new ol.format.GeoJSON();
var features_BarriosElegidos_1 = format_BarriosElegidos_1.readFeatures(json_BarriosElegidos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BarriosElegidos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarriosElegidos_1.addFeatures(features_BarriosElegidos_1);
var lyr_BarriosElegidos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarriosElegidos_1, 
                style: style_BarriosElegidos_1,
                popuplayertitle: 'Barrios Elegidos',
                interactive: false,
                title: '<img src="styles/legend/BarriosElegidos_1.png" /> Barrios Elegidos'
            });
var format_PolgonoLagunaLasTresPascualas_2 = new ol.format.GeoJSON();
var features_PolgonoLagunaLasTresPascualas_2 = format_PolgonoLagunaLasTresPascualas_2.readFeatures(json_PolgonoLagunaLasTresPascualas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PolgonoLagunaLasTresPascualas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolgonoLagunaLasTresPascualas_2.addFeatures(features_PolgonoLagunaLasTresPascualas_2);
var lyr_PolgonoLagunaLasTresPascualas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolgonoLagunaLasTresPascualas_2, 
                style: style_PolgonoLagunaLasTresPascualas_2,
                popuplayertitle: 'Polígono Laguna Las Tres Pascualas',
                interactive: true,
                title: '<img src="styles/legend/PolgonoLagunaLasTresPascualas_2.png" /> Polígono Laguna Las Tres Pascualas'
            });
var format_AtractivosTursticos_3 = new ol.format.GeoJSON();
var features_AtractivosTursticos_3 = format_AtractivosTursticos_3.readFeatures(json_AtractivosTursticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AtractivosTursticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtractivosTursticos_3.addFeatures(features_AtractivosTursticos_3);
var lyr_AtractivosTursticos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtractivosTursticos_3, 
                style: style_AtractivosTursticos_3,
                popuplayertitle: 'Atractivos Turísticos',
                interactive: true,
                title: '<img src="styles/legend/AtractivosTursticos_3.png" /> Atractivos Turísticos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BarriosElegidos_1.setVisible(true);lyr_PolgonoLagunaLasTresPascualas_2.setVisible(true);lyr_AtractivosTursticos_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BarriosElegidos_1,lyr_PolgonoLagunaLasTresPascualas_2,lyr_AtractivosTursticos_3];
lyr_BarriosElegidos_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_PolgonoLagunaLasTresPascualas_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Tipo': 'Tipo', 'Barrio': 'Barrio', 'Coord. UTM': 'Coord. UTM', 'Precio': 'Precio', 'Horario': 'Horario', 'Video': 'Video', });
lyr_AtractivosTursticos_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Tipo': 'Tipo', 'Barrio': 'Barrio', 'Coord. UTM': 'Coord. UTM', 'Precio': 'Precio', 'Horario': 'Horario', });
lyr_BarriosElegidos_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_PolgonoLagunaLasTresPascualas_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Tipo': 'TextEdit', 'Barrio': 'TextEdit', 'Coord. UTM': 'TextEdit', 'Precio': 'TextEdit', 'Horario': 'TextEdit', 'Video': 'TextEdit', });
lyr_AtractivosTursticos_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Tipo': 'TextEdit', 'Barrio': 'TextEdit', 'Coord. UTM': 'TextEdit', 'Precio': 'TextEdit', 'Horario': 'TextEdit', });
lyr_BarriosElegidos_1.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'inline label - always visible', 'Area': 'hidden field', 'hab_m2': 'hidden field', 'Sum_Poblac': 'hidden field', 'av_hab': 'hidden field', 'Long_tLic': 'hidden field', 'Long_tNLic': 'hidden field', 'Suma_Trans': 'hidden field', 'porc_cober': 'hidden field', 'Distance': 'hidden field', 'LongcicloK': 'hidden field', 'Long_rvial': 'hidden field', });
lyr_PolgonoLagunaLasTresPascualas_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Tipo': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Coord. UTM': 'inline label - always visible', 'Precio': 'inline label - always visible', 'Horario': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_AtractivosTursticos_3.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Tipo': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Coord. UTM': 'inline label - always visible', 'Precio': 'inline label - always visible', 'Horario': 'inline label - always visible', });
lyr_AtractivosTursticos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});