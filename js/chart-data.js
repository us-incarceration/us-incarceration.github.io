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
      colors: ['#7401DF', '#666666', '#998866', '#556655'],
      credits: { enabled: false }
    });

    var data_input = eval("(" + $("#prisoner_rate_by_country").attr("data") + ")");
    var labels_input = eval("(" + $("#prisoner_rate_by_country").attr("labels") + ")");
    var title_input = $("#prisoner_rate_by_country").attr("title");
    var subtitle_input = $("#prisoner_rate_by_country").attr("subtitle");
    var credits_input = $("#prisoner_rate_by_country").attr("credits");
    $('#prisoner_rate_by_country').highcharts({
        chart: {
            type: 'bar',
            events: {
                load: function(){
                    var p = this.series[0].points[0];
                    this.tooltip.refresh(p);
                }
            }
        },
        title: {
            text: title_input
        },
        subtitle: {
            text: subtitle_input
        },
        xAxis: {
            categories: labels_input,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Prison Population Rate (per 100,000 national population)',
            },
            labels: {
                overflow: 'justify'
            },
            plotLines: [{
                color: '#FF6200',
                value: '90',
                width: '2',
                zIndex: 1,
                label: {
                    text: 'Western European Avg.: 90',
                    verticalAlign: 'bottom',
                    style: { color: 'black' },
                    textAlign: 'right',
                }
            }]
        },
        tooltip: {
            pointFormat: '<b>{point.x:}</b><strong>{point.y}</strong>'
        },
        series: [{
            showInLegend: false,
            data: data_input,
            color: '#A4A4A4',
        }]
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
