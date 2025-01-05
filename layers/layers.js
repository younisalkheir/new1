var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Jaz_localities_1 = new ol.format.GeoJSON();
var features_Jaz_localities_1 = format_Jaz_localities_1.readFeatures(json_Jaz_localities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaz_localities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaz_localities_1.addFeatures(features_Jaz_localities_1);
var lyr_Jaz_localities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaz_localities_1, 
                style: style_Jaz_localities_1,
                popuplayertitle: 'Jaz_localities',
                interactive: true,
                title: '<img src="styles/legend/Jaz_localities_1.png" /> Jaz_localities'
            });
var format_Jaz_pop_2 = new ol.format.GeoJSON();
var features_Jaz_pop_2 = format_Jaz_pop_2.readFeatures(json_Jaz_pop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaz_pop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaz_pop_2.addFeatures(features_Jaz_pop_2);
var lyr_Jaz_pop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaz_pop_2, 
                style: style_Jaz_pop_2,
                popuplayertitle: 'Jaz_pop',
                interactive: true,
                title: '<img src="styles/legend/Jaz_pop_2.png" /> Jaz_pop'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Jaz_localities_1.setVisible(true);lyr_Jaz_pop_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Jaz_localities_1,lyr_Jaz_pop_2];
lyr_Jaz_localities_1.set('fieldAliases', {'Id': 'Id', 'اسم_ا': 'اسم_ا', 'Area': 'Area', 'Loc_Name': 'Loc_Name', });
lyr_Jaz_pop_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'St_Name': 'St_Name', 'St_Code': 'St_Code', 'LOC_Code': 'LOC_Code', 'LOC_Name': 'LOC_Name', 'AU_Code': 'AU_Code', 'AU_Name': 'AU_Name', 'PAU_Code': 'PAU_Code', 'PAU_Name': 'PAU_Name', 'Elec': 'Elec', 'Phone': 'Phone', 'WC': 'WC', 'Age00_04M': 'Age00_04M', 'Age00_04F': 'Age00_04F', 'Age05_14M': 'Age05_14M', 'Age05_14F': 'Age05_14F', 'Age15_24M': 'Age15_24M', 'Age15_24F': 'Age15_24F', 'Age25_44M': 'Age25_44M', 'Age25_44F': 'Age25_44F', 'Age45_OveM': 'Age45_OveM', 'Age45_OveF': 'Age45_OveF', 'ToT_Pop': 'ToT_Pop', 'TOT_HHS': 'TOT_HHS', 'ToT_Pop_EA': 'ToT_Pop_EA', 'ORIG_FID': 'ORIG_FID', });
lyr_Jaz_localities_1.set('fieldImages', {'Id': 'Range', 'اسم_ا': 'TextEdit', 'Area': 'TextEdit', 'Loc_Name': 'TextEdit', });
lyr_Jaz_pop_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'St_Name': 'TextEdit', 'St_Code': 'TextEdit', 'LOC_Code': 'TextEdit', 'LOC_Name': 'TextEdit', 'AU_Code': 'TextEdit', 'AU_Name': 'TextEdit', 'PAU_Code': 'TextEdit', 'PAU_Name': 'TextEdit', 'Elec': 'TextEdit', 'Phone': 'TextEdit', 'WC': 'TextEdit', 'Age00_04M': 'TextEdit', 'Age00_04F': 'TextEdit', 'Age05_14M': 'TextEdit', 'Age05_14F': 'TextEdit', 'Age15_24M': 'TextEdit', 'Age15_24F': 'TextEdit', 'Age25_44M': 'TextEdit', 'Age25_44F': 'TextEdit', 'Age45_OveM': 'TextEdit', 'Age45_OveF': 'TextEdit', 'ToT_Pop': 'TextEdit', 'TOT_HHS': 'TextEdit', 'ToT_Pop_EA': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Jaz_localities_1.set('fieldLabels', {'Id': 'no label', 'اسم_ا': 'inline label - visible with data', 'Area': 'no label', 'Loc_Name': 'no label', });
lyr_Jaz_pop_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'St_Name': 'hidden field', 'St_Code': 'hidden field', 'LOC_Code': 'no label', 'LOC_Name': 'hidden field', 'AU_Code': 'hidden field', 'AU_Name': 'no label', 'PAU_Code': 'hidden field', 'PAU_Name': 'inline label - visible with data', 'Elec': 'hidden field', 'Phone': 'hidden field', 'WC': 'hidden field', 'Age00_04M': 'hidden field', 'Age00_04F': 'hidden field', 'Age05_14M': 'hidden field', 'Age05_14F': 'hidden field', 'Age15_24M': 'hidden field', 'Age15_24F': 'hidden field', 'Age25_44M': 'hidden field', 'Age25_44F': 'hidden field', 'Age45_OveM': 'hidden field', 'Age45_OveF': 'hidden field', 'ToT_Pop': 'hidden field', 'TOT_HHS': 'hidden field', 'ToT_Pop_EA': 'hidden field', 'ORIG_FID': 'hidden field', });
lyr_Jaz_pop_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});