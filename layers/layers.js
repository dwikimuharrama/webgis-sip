var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        var lyr_GoogleImagery_1 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OSMHumanitarian_2 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });var format_PenggunaanLahan_3 = new ol.format.GeoJSON();
var features_PenggunaanLahan_3 = format_PenggunaanLahan_3.readFeatures(json_PenggunaanLahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PenggunaanLahan_3.addFeatures(features_PenggunaanLahan_3);var lyr_PenggunaanLahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_3, 
                style: style_PenggunaanLahan_3,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_3_0.png" /> Air Tawar/Sungai<br />\
    <img src="styles/legend/PenggunaanLahan_3_1.png" /> Bangunan/Fasilitas  Umum<br />\
    <img src="styles/legend/PenggunaanLahan_3_2.png" /> Hutan<br />\
    <img src="styles/legend/PenggunaanLahan_3_3.png" /> Kebun<br />\
    <img src="styles/legend/PenggunaanLahan_3_4.png" /> Lahan Terbuka/Rumput<br />\
    <img src="styles/legend/PenggunaanLahan_3_5.png" /> Permukiman<br />\
    <img src="styles/legend/PenggunaanLahan_3_6.png" /> Sawah<br />\
    <img src="styles/legend/PenggunaanLahan_3_7.png" /> Semak/Belukar<br />\
    <img src="styles/legend/PenggunaanLahan_3_8.png" /> Tegalan/Ladang<br />'
        });var format_PolaPeruntukanLahan_4 = new ol.format.GeoJSON();
var features_PolaPeruntukanLahan_4 = format_PolaPeruntukanLahan_4.readFeatures(json_PolaPeruntukanLahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaPeruntukanLahan_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PolaPeruntukanLahan_4.addFeatures(features_PolaPeruntukanLahan_4);var lyr_PolaPeruntukanLahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolaPeruntukanLahan_4, 
                style: style_PolaPeruntukanLahan_4,
    title: 'Pola Peruntukan Lahan<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_0.png" /> Kaw. Cagar Budaya<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_1.png" /> Kaw. Hutan Lindung<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_2.png" /> Kaw. Hutan Rakyat<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_3.png" /> Kaw. Lindung Spiritual<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_4.png" /> Kaw. Per. Hutan Produksi<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_5.png" /> Kaw. Per. Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_6.png" /> Kaw. Per. Industri<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_7.png" /> Kaw. Per. Pariwisata<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_8.png" /> Kaw. Per. Pertambangan<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_9.png" /> Kaw. Per. Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_10.png" /> KCP2B<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_11.png" /> Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_12.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_13.png" /> Sekitar Mata Air<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_14.png" /> Sekitar Waduk<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_15.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PolaPeruntukanLahan_4_16.png" /> TPA<br />'
        });var lyr_RekomendasiLokasiIndustriBaru_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rekomendasi Lokasi Industri Baru",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RekomendasiLokasiIndustriBaru_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12329600.329006, -778919.119375, 12353940.990586, -738114.107469]
                            })
                        });var format_Sungai_6 = new ol.format.GeoJSON();
var features_Sungai_6 = format_Sungai_6.readFeatures(json_Sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sungai_6.addFeatures(features_Sungai_6);var lyr_Sungai_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_6, 
                style: style_Sungai_6,
                title: '<img src="styles/legend/Sungai_6.png" /> Sungai'
            });var format_JalanSetapak_7 = new ol.format.GeoJSON();
var features_JalanSetapak_7 = format_JalanSetapak_7.readFeatures(json_JalanSetapak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanSetapak_7.addFeatures(features_JalanSetapak_7);var lyr_JalanSetapak_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanSetapak_7, 
                style: style_JalanSetapak_7,
                title: '<img src="styles/legend/JalanSetapak_7.png" /> Jalan Setapak'
            });var format_JalanLingkungan_8 = new ol.format.GeoJSON();
var features_JalanLingkungan_8 = format_JalanLingkungan_8.readFeatures(json_JalanLingkungan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkungan_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLingkungan_8.addFeatures(features_JalanLingkungan_8);var lyr_JalanLingkungan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLingkungan_8, 
                style: style_JalanLingkungan_8,
                title: '<img src="styles/legend/JalanLingkungan_8.png" /> Jalan Lingkungan'
            });var format_JalanLokal_9 = new ol.format.GeoJSON();
var features_JalanLokal_9 = format_JalanLokal_9.readFeatures(json_JalanLokal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLokal_9.addFeatures(features_JalanLokal_9);var lyr_JalanLokal_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLokal_9, 
                style: style_JalanLokal_9,
                title: '<img src="styles/legend/JalanLokal_9.png" /> Jalan Lokal'
            });var format_JalanKolektor_10 = new ol.format.GeoJSON();
var features_JalanKolektor_10 = format_JalanKolektor_10.readFeatures(json_JalanKolektor_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanKolektor_10.addFeatures(features_JalanKolektor_10);var lyr_JalanKolektor_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanKolektor_10, 
                style: style_JalanKolektor_10,
                title: '<img src="styles/legend/JalanKolektor_10.png" /> Jalan Kolektor'
            });var format_JalanArteri_11 = new ol.format.GeoJSON();
var features_JalanArteri_11 = format_JalanArteri_11.readFeatures(json_JalanArteri_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanArteri_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanArteri_11.addFeatures(features_JalanArteri_11);var lyr_JalanArteri_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanArteri_11, 
                style: style_JalanArteri_11,
                title: '<img src="styles/legend/JalanArteri_11.png" /> Jalan Arteri'
            });var format_admkeckudus_12 = new ol.format.GeoJSON();
var features_admkeckudus_12 = format_admkeckudus_12.readFeatures(json_admkeckudus_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admkeckudus_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_admkeckudus_12.addFeatures(features_admkeckudus_12);var lyr_admkeckudus_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admkeckudus_12, 
                style: style_admkeckudus_12,
                title: '<img src="styles/legend/admkeckudus_12.png" /> adm kec kudus'
            });var format_KesesuaianLokasiIndustri_13 = new ol.format.GeoJSON();
var features_KesesuaianLokasiIndustri_13 = format_KesesuaianLokasiIndustri_13.readFeatures(json_KesesuaianLokasiIndustri_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianLokasiIndustri_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_KesesuaianLokasiIndustri_13.addFeatures(features_KesesuaianLokasiIndustri_13);var lyr_KesesuaianLokasiIndustri_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KesesuaianLokasiIndustri_13, 
                style: style_KesesuaianLokasiIndustri_13,
    title: 'Kesesuaian Lokasi Industri<br />\
    <img src="styles/legend/KesesuaianLokasiIndustri_13_0.png" /> Sesuai<br />\
    <img src="styles/legend/KesesuaianLokasiIndustri_13_1.png" /> Tidak Sesuai<br />'
        });
var group_Administrasi = new ol.layer.Group({
                                layers: [lyr_Sungai_6,lyr_JalanSetapak_7,lyr_JalanLingkungan_8,lyr_JalanLokal_9,lyr_JalanKolektor_10,lyr_JalanArteri_11,lyr_admkeckudus_12,],
                                title: "Administrasi"});
var group_LandUse = new ol.layer.Group({
                                layers: [lyr_PenggunaanLahan_3,lyr_PolaPeruntukanLahan_4,lyr_RekomendasiLokasiIndustriBaru_5,],
                                title: "Land Use"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleImagery_1,lyr_OSMHumanitarian_2,],
                                title: "Basemaps"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_OSMHumanitarian_2.setVisible(true);lyr_PenggunaanLahan_3.setVisible(false);lyr_PolaPeruntukanLahan_4.setVisible(false);lyr_RekomendasiLokasiIndustriBaru_5.setVisible(false);lyr_Sungai_6.setVisible(true);lyr_JalanSetapak_7.setVisible(true);lyr_JalanLingkungan_8.setVisible(true);lyr_JalanLokal_9.setVisible(true);lyr_JalanKolektor_10.setVisible(true);lyr_JalanArteri_11.setVisible(true);lyr_admkeckudus_12.setVisible(true);lyr_KesesuaianLokasiIndustri_13.setVisible(true);
var layersList = [group_Basemaps,group_LandUse,group_Administrasi,lyr_KesesuaianLokasiIndustri_13];
lyr_PenggunaanLahan_3.set('fieldAliases', {'PENGGUNAAN': 'PENGGUNAAN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_PolaPeruntukanLahan_4.set('fieldAliases', {'RNCNA_REV2': 'RNCNA_REV2', 'POLA_RUANG': 'POLA_RUANG', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_Sungai_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JalanSetapak_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLingkungan_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLokal_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanKolektor_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanArteri_11.set('fieldAliases', {'NAMRJL': 'Keterangan', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_admkeckudus_12.set('fieldAliases', {'NAMA_KEC': 'NAMA_KEC', 'NAMA_KAB': 'NAMA_KAB', });
lyr_KesesuaianLokasiIndustri_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_pola_r': 'FID_pola_r', 'RNCNA_REV2': 'Peruntukan', 'POLA_RUANG': 'POLA_RUANG', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'FID_Indust': 'FID_Indust', 'id': 'id', 'Nama_Indus': 'Nama', 'Alamat': 'Alamat', 'Luas': 'Luas (m2)', 'foto': 'foto', 'html_exp': 'Gambar', 'Industri': 'Industri', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kesesuaian': 'Kesesuaian', });
lyr_PenggunaanLahan_3.set('fieldImages', {'PENGGUNAAN': 'TextEdit', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'ACRES': 'Hidden', 'HECTARES': 'Hidden', });
lyr_PolaPeruntukanLahan_4.set('fieldImages', {'RNCNA_REV2': 'TextEdit', 'POLA_RUANG': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Sungai_6.set('fieldImages', {'NAMOBJ': 'Hidden', 'JNSSNG': 'Hidden', 'KLSSNG': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'NAMWS': 'Hidden', 'NAMDAS': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_JalanSetapak_7.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLingkungan_8.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLokal_9.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanKolektor_10.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanArteri_11.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_admkeckudus_12.set('fieldImages', {'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', });
lyr_KesesuaianLokasiIndustri_13.set('fieldImages', {'OBJECTID': 'Hidden', 'FID_pola_r': 'Hidden', 'RNCNA_REV2': 'TextEdit', 'POLA_RUANG': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'ACRES': 'Hidden', 'HECTARES': 'Hidden', 'FID_Indust': 'Hidden', 'id': 'Hidden', 'Nama_Indus': 'TextEdit', 'Alamat': 'TextEdit', 'Luas': 'TextEdit', 'foto': 'Hidden', 'html_exp': 'ExternalResource', 'Industri': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Kesesuaian': 'TextEdit', });
lyr_PenggunaanLahan_3.set('fieldLabels', {});
lyr_PolaPeruntukanLahan_4.set('fieldLabels', {});
lyr_Sungai_6.set('fieldLabels', {});
lyr_JalanSetapak_7.set('fieldLabels', {});
lyr_JalanLingkungan_8.set('fieldLabels', {});
lyr_JalanLokal_9.set('fieldLabels', {});
lyr_JalanKolektor_10.set('fieldLabels', {});
lyr_JalanArteri_11.set('fieldLabels', {});
lyr_admkeckudus_12.set('fieldLabels', {});
lyr_KesesuaianLokasiIndustri_13.set('fieldLabels', {'RNCNA_REV2': 'inline label', 'Nama_Indus': 'inline label', 'Alamat': 'inline label', 'Luas': 'inline label', 'html_exp': 'header label', 'Kesesuaian': 'inline label', });
lyr_KesesuaianLokasiIndustri_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});