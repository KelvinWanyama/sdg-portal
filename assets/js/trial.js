//
// /*
// TODO:
// - Check data labels after drilling. Label rank? New positions?
// */
// var dataSourceURL=null;
// function updateAfricaMap(n){
//     if (n==411) {
//         $('#myModal').modal('hide');
//         //get the data source and update var. This is the data that loads.
//         dataSourceURL='assets/data/trial.json';
//         loadMap(1);
//
//     }
//     else if (412) {
//         $('#myModal').modal('hide');
//         //get the data source and update var. This is the data that loads.
//         dataSourceURL='assets/data/trial.json';
//         loadMap(1);
//     }
// }
// $( document ).ready(function() {
//     dataSourceURL='assets/data/trialNoData.json';
//     loadMap(1);
// });
//
// function loadMap(n){
// if(n==1){
//     var data = $.getJSON(dataSourceURL,function(data){
//
// // Create the chart
// Highcharts.mapChart('container', {
//     chart: {
//         map: 'custom/africa'
//     },
//
//     title: {
//         text: 'Africa'
//     },
//
//     // subtitle: {
//     //     text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/africa.js">Africa</a>'
//     // },
//
//     mapNavigation: {
//         enabled: true,
//         buttonOptions: {
//             verticalAlign: 'bottom'
//         }
//     },
//
//     colorAxis: {
//         min: 0,
//         minColor: '#E6E7E8',
//         maxColor: '#e5243b'
//     },
//
//     series: [{
//         data: data,
//         mapData: Highcharts.maps['custom/africa'],
//         joinBy: ['iso-a2', 'code'],
//         name: 'Random data',
//         states: {
//             hover: {
//                 color: '#BADA55'
//             }
//         },
//         dataLabels: {
//             enabled: true,
//             format: '{point.name}'
//         }
//     }]
// });
// });
// }
// if(n==2){
//  var chart = AmCharts.makeChart("container", {
//     "type": "serial",
//     "theme": "light",
//     "marginRight": 40,
//     "marginLeft": 40,
//     "autoMarginOffset": 20,
//     "mouseWheelZoomEnabled":true,
//     "dataDateFormat": "YYYY-MM-DD",
//     "valueAxes": [{
//         "id": "v1",
//         "axisAlpha": 0,
//         "position": "left",
//         "ignoreAxisWidth":true,
//         "title": "Y axis"
//     }],
//     "balloon": {
//         "borderThickness": 1,
//         "shadowAlpha": 0
//     },
//     "graphs": [{
//         "id": "g1",
//         "balloon":{
//           "drop":true,
//           "adjustBorderColor":false,
//           "color":"#ffffff"
//         },
//         "bullet": "round",
//         "bulletBorderAlpha": 1,
//         "bulletColor": "#FFFFFF",
//         "bulletSize": 5,
//         "hideBulletsCount": 50,
//         "lineThickness": 2,
//         "title": "red line",
//         "useLineColorForBulletBorder": true,
//         "valueField": "value",
//         "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
//     }],
//     "chartScrollbar": {
//         "graph": "g1",
//         "oppositeAxis":false,
//         "offset":30,
//         "scrollbarHeight": 80,
//         "backgroundAlpha": 0,
//         "selectedBackgroundAlpha": 0.1,
//         "selectedBackgroundColor": "#888888",
//         "graphFillAlpha": 0,
//         "graphLineAlpha": 0.5,
//         "selectedGraphFillAlpha": 0,
//         "selectedGraphLineAlpha": 1,
//         "autoGridCount":true,
//         "color":"#AAAAAA"
//     },
//     "chartCursor": {
//         "pan": true,
//         "valueLineEnabled": true,
//         "valueLineBalloonEnabled": true,
//         "cursorAlpha":1,
//         "cursorColor":"#258cbb",
//         "limitToGraph":"g1",
//         "valueLineAlpha":0.2,
//         "valueZoomable":true
//     },
//     "valueScrollbar":{
//       "oppositeAxis":false,
//       "offset":50,
//       "scrollbarHeight":10
//     },
//     "categoryField": "date",
//     "categoryAxis": {
//         "parseDates": false,
//         "dashLength": 1,
//         "minorGridEnabled": true,
//         "title":"X axis"
//     },
//     "export": {
//         "enabled": true
//     },
//     "dataProvider": [{
//         "date": "2012-07-27",
//         "value": 13
//     }, {
//         "date": "2012-07-28",
//         "value": 11
//     }, {
//         "date": "2012-07-29",
//         "value": 15
//     }, {
//         "date": "2012-07-30",
//         "value": 16
//     }, {
//         "date": "2012-07-31",
//         "value": 18
//     }, {
//         "date": "2012-08-01",
//         "value": 13
//     }, {
//         "date": "2012-08-02",
//         "value": 22
//     }, {
//         "date": "2012-08-03",
//         "value": 23
//     }, {
//         "date": "2012-08-04",
//         "value": 20
//     }, {
//         "date": "2012-08-05",
//         "value": 17
//     }, {
//         "date": "2012-08-06",
//         "value": 16
//     }, {
//         "date": "2012-08-07",
//         "value": 18
//     }, {
//         "date": "2012-08-08",
//         "value": 21
//     }, {
//         "date": "2012-08-09",
//         "value": 26
//     }, {
//         "date": "2012-08-10",
//         "value": 24
//     }, {
//         "date": "2012-08-11",
//         "value": 29
//     }, {
//         "date": "2012-08-12",
//         "value": 32
//     }, {
//         "date": "2012-08-13",
//         "value": 18
//     }, {
//         "date": "2012-08-14",
//         "value": 24
//     }, {
//         "date": "2012-08-15",
//         "value": 22
//     }, {
//         "date": "2012-08-16",
//         "value": 18
//     }, {
//         "date": "2012-08-17",
//         "value": 19
//     }, {
//         "date": "2012-08-18",
//         "value": 14
//     }, {
//         "date": "2012-08-19",
//         "value": 15
//     }, {
//         "date": "2012-08-20",
//         "value": 12
//     }, {
//         "date": "2012-08-21",
//         "value": 8
//     }, {
//         "date": "2012-08-22",
//         "value": 9
//     }, {
//         "date": "2012-08-23",
//         "value": 8
//     }, {
//         "date": "2012-08-24",
//         "value": 7
//     }, {
//         "date": "2012-08-25",
//         "value": 5
//     }, {
//         "date": "2012-08-26",
//         "value": 11
//     }, {
//         "date": "2012-08-27",
//         "value": 13
//     }, {
//         "date": "2012-08-28",
//         "value": 18
//     }, {
//         "date": "2012-08-29",
//         "value": 20
//     }, {
//         "date": "2012-08-30",
//         "value": 29
//     }, {
//         "date": "2012-08-31",
//         "value": 33
//     }, {
//         "date": "2012-09-01",
//         "value": 42
//     }, {
//         "date": "2012-09-02",
//         "value": 35
//     }, {
//         "date": "2012-09-03",
//         "value": 31
//     }, {
//         "date": "2012-09-04",
//         "value": 47
//     }, {
//         "date": "2012-09-05",
//         "value": 52
//     }, {
//         "date": "2012-09-06",
//         "value": 46
//     }, {
//         "date": "2012-09-07",
//         "value": 41
//     }, {
//         "date": "2012-09-08",
//         "value": 43
//     }, {
//         "date": "2012-09-09",
//         "value": 40
//     }, {
//         "date": "2012-09-10",
//         "value": 39
//     }, {
//         "date": "2012-09-11",
//         "value": 34
//     }, {
//         "date": "2012-09-12",
//         "value": 29
//     }, {
//         "date": "2012-09-13",
//         "value": 34
//     }, {
//         "date": "2012-09-14",
//         "value": 37
//     }, {
//         "date": "2012-09-15",
//         "value": 42
//     }, {
//         "date": "2012-09-16",
//         "value": 49
//     }, {
//         "date": "2012-09-17",
//         "value": 46
//     }, {
//         "date": "2012-09-18",
//         "value": 47
//     }, {
//         "date": "2012-09-19",
//         "value": 55
//     }, {
//         "date": "2012-09-20",
//         "value": 59
//     }, {
//         "date": "2012-09-21",
//         "value": 58
//     }, {
//         "date": "2012-09-22",
//         "value": 57
//     }, {
//         "date": "2012-09-23",
//         "value": 61
//     }, {
//         "date": "2012-09-24",
//         "value": 59
//     }, {
//         "date": "2012-09-25",
//         "value": 67
//     }, {
//         "date": "2012-09-26",
//         "value": 65
//     }, {
//         "date": "2012-09-27",
//         "value": 61
//     }, {
//         "date": "2012-09-28",
//         "value": 66
//     }, {
//         "date": "2012-09-29",
//         "value": 69
//     }, {
//         "date": "2012-09-30",
//         "value": 71
//     }, {
//         "date": "2012-10-01",
//         "value": 67
//     }, {
//         "date": "2012-10-02",
//         "value": 63
//     }, {
//         "date": "2012-10-03",
//         "value": 46
//     }, {
//         "date": "2012-10-04",
//         "value": 32
//     }, {
//         "date": "2012-10-05",
//         "value": 21
//     }, {
//         "date": "2012-10-06",
//         "value": 18
//     }, {
//         "date": "2012-10-07",
//         "value": 21
//     }, {
//         "date": "2012-10-08",
//         "value": 28
//     }, {
//         "date": "2012-10-09",
//         "value": 27
//     }, {
//         "date": "2012-10-10",
//         "value": 36
//     }, {
//         "date": "2012-10-11",
//         "value": 33
//     }, {
//         "date": "2012-10-12",
//         "value": 31
//     }, {
//         "date": "2012-10-13",
//         "value": 30
//     }, {
//         "date": "2012-10-14",
//         "value": 34
//     }, {
//         "date": "2012-10-15",
//         "value": 38
//     }, {
//         "date": "2012-10-16",
//         "value": 37
//     }, {
//         "date": "2012-10-17",
//         "value": 44
//     }, {
//         "date": "2012-10-18",
//         "value": 49
//     }, {
//         "date": "2012-10-19",
//         "value": 53
//     }, {
//         "date": "2012-10-20",
//         "value": 57
//     }, {
//         "date": "2012-10-21",
//         "value": 60
//     }, {
//         "date": "2012-10-22",
//         "value": 61
//     }, {
//         "date": "2012-10-23",
//         "value": 69
//     }, {
//         "date": "2012-10-24",
//         "value": 67
//     }, {
//         "date": "2012-10-25",
//         "value": 72
//     }, {
//         "date": "2012-10-26",
//         "value": 77
//     }, {
//         "date": "2012-10-27",
//         "value": 75
//     }, {
//         "date": "2012-10-28",
//         "value": 70
//     }, {
//         "date": "2012-10-29",
//         "value": 72
//     }, {
//         "date": "2012-10-30",
//         "value": 70
//     }, {
//         "date": "2012-10-31",
//         "value": 72
//     }, {
//         "date": "2012-11-01",
//         "value": 73
//     }, {
//         "date": "2012-11-02",
//         "value": 67
//     }, {
//         "date": "2012-11-03",
//         "value": 68
//     }, {
//         "date": "2012-11-04",
//         "value": 65
//     }, {
//         "date": "2012-11-05",
//         "value": 71
//     }, {
//         "date": "2012-11-06",
//         "value": 75
//     }, {
//         "date": "2012-11-07",
//         "value": 74
//     }, {
//         "date": "2012-11-08",
//         "value": 71
//     }, {
//         "date": "2012-11-09",
//         "value": 76
//     }, {
//         "date": "2012-11-10",
//         "value": 77
//     }, {
//         "date": "2012-11-11",
//         "value": 81
//     }, {
//         "date": "2012-11-12",
//         "value": 83
//     }, {
//         "date": "2012-11-13",
//         "value": 80
//     }, {
//         "date": "2012-11-14",
//         "value": 81
//     }, {
//         "date": "2012-11-15",
//         "value": 87
//     }, {
//         "date": "2012-11-16",
//         "value": 82
//     }, {
//         "date": "2012-11-17",
//         "value": 86
//     }, {
//         "date": "2012-11-18",
//         "value": 80
//     }, {
//         "date": "2012-11-19",
//         "value": 87
//     }, {
//         "date": "2012-11-20",
//         "value": 83
//     }, {
//         "date": "2012-11-21",
//         "value": 85
//     }, {
//         "date": "2012-11-22",
//         "value": 84
//     }, {
//         "date": "2012-11-23",
//         "value": 82
//     }, {
//         "date": "2012-11-24",
//         "value": 73
//     }, {
//         "date": "2012-11-25",
//         "value": 71
//     }, {
//         "date": "2012-11-26",
//         "value": 75
//     }, {
//         "date": "2012-11-27",
//         "value": 79
//     }, {
//         "date": "2012-11-28",
//         "value": 70
//     }, {
//         "date": "2012-11-29",
//         "value": 73
//     }, {
//         "date": "2012-11-30",
//         "value": 61
//     }, {
//         "date": "2012-12-01",
//         "value": 62
//     }, {
//         "date": "2012-12-02",
//         "value": 66
//     }, {
//         "date": "2012-12-03",
//         "value": 65
//     }, {
//         "date": "2012-12-04",
//         "value": 73
//     }, {
//         "date": "2012-12-05",
//         "value": 79
//     }, {
//         "date": "2012-12-06",
//         "value": 78
//     }, {
//         "date": "2012-12-07",
//         "value": 78
//     }, {
//         "date": "2012-12-08",
//         "value": 78
//     }, {
//         "date": "2012-12-09",
//         "value": 74
//     }, {
//         "date": "2012-12-10",
//         "value": 73
//     }, {
//         "date": "2012-12-11",
//         "value": 75
//     }, {
//         "date": "2012-12-12",
//         "value": 70
//     }, {
//         "date": "2012-12-13",
//         "value": 77
//     }, {
//         "date": "2012-12-14",
//         "value": 67
//     }, {
//         "date": "2012-12-15",
//         "value": 62
//     }, {
//         "date": "2012-12-16",
//         "value": 64
//     }, {
//         "date": "2012-12-17",
//         "value": 61
//     }, {
//         "date": "2012-12-18",
//         "value": 59
//     }, {
//         "date": "2012-12-19",
//         "value": 53
//     }, {
//         "date": "2012-12-20",
//         "value": 54
//     }, {
//         "date": "2012-12-21",
//         "value": 56
//     }, {
//         "date": "2012-12-22",
//         "value": 59
//     }, {
//         "date": "2012-12-23",
//         "value": 58
//     }, {
//         "date": "2012-12-24",
//         "value": 55
//     }, {
//         "date": "2012-12-25",
//         "value": 52
//     }, {
//         "date": "2012-12-26",
//         "value": 54
//     }, {
//         "date": "2012-12-27",
//         "value": 50
//     }, {
//         "date": "2012-12-28",
//         "value": 50
//     }, {
//         "date": "2012-12-29",
//         "value": 51
//     }, {
//         "date": "2012-12-30",
//         "value": 52
//     }, {
//         "date": "2012-12-31",
//         "value": 58
//     }]
// });
//
// chart.addListener("rendered", zoomChart);
//
// zoomChart();
//
// function zoomChart() {
//     chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
// }
//  }
// }
