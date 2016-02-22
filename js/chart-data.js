$(function () {
    Highcharts.setOptions({
      lang: {
          thousandsSep: ','
      },
      chart: {
          style: {
              fontFamily: "'Source Sans Pro', sans-serif"
          },
      },
      colors: ['#FF6200'],
      credits: { enabled: false }
    });

    var data_input = eval("(" + $("#fed_state_prisoners_1925_2014").attr("data") + ")");
    var title_input = $("#fed_state_prisoners_1925_2014").attr("title");
    var credits_input = $("#fed_state_prisoners_1925_2014").attr("credits");
    $('#fed_state_prisoners_1925_2014').highcharts({
        chart: {
            type: 'area',
            events: {
                load: function(){
                    var p = this.series[0].points[89];
                    this.tooltip.refresh(p);  
                }
            }
        },
        title: {
            text: title_input
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: { text: ''},
            labels: {
                formatter: function () {
                    return this.value / 1000000 + 'MM';
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{point.x:}</b><strong>{point.y}</strong>'
        },
        plotOptions: {
            area: {
                pointStart: 1925,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            showInLegend: false,               
            data: data_input
        }]
    });
});
