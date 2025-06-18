ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([664884.321387, 5919708.421008, 687801.188228, 5932777.477600]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AtrcTurisLagTresPas_1 = new ol.format.GeoJSON();
var features_AtrcTurisLagTresPas_1 = format_AtrcTurisLagTresPas_1.readFeatures(json_AtrcTurisLagTresPas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AtrcTurisLagTresPas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtrcTurisLagTresPas_1.addFeatures(features_AtrcTurisLagTresPas_1);
var lyr_AtrcTurisLagTresPas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtrcTurisLagTresPas_1, 
                style: style_AtrcTurisLagTresPas_1,
                popuplayertitle: 'AtrcTurisLagTresPas',
                interactive: true,
                title: '<img src="styles/legend/AtrcTurisLagTresPas_1.png" /> AtrcTurisLagTresPas'
            });
var format_AtracTuris_2 = new ol.format.GeoJSON();
var features_AtracTuris_2 = format_AtracTuris_2.readFeatures(json_AtracTuris_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AtracTuris_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtracTuris_2.addFeatures(features_AtracTuris_2);
var lyr_AtracTuris_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AtracTuris_2, 
                style: style_AtracTuris_2,
                popuplayertitle: 'AtracTuris',
                interactive: true,
                title: '<img src="styles/legend/AtracTuris_2.png" /> AtracTuris'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AtrcTurisLagTresPas_1.setVisible(true);lyr_AtracTuris_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AtrcTurisLagTresPas_1,lyr_AtracTuris_2];
lyr_AtrcTurisLagTresPas_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AtracTuris_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AtrcTurisLagTresPas_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AtracTuris_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AtrcTurisLagTresPas_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AtracTuris_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AtracTuris_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});