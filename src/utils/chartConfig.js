var chartFormat = {
  chart: {
    type: 'spline',
    zoomType: 'x',
    resetZoomButton: {
      position: {
        x: 0,
        y: -60
      }
    },
    marginRight: 60,
    marginTop: 70,
    style: {
      fontFamily: 'Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif'
    },
    events: {
      click: function (e) {

      },
      selection: function (e) {

      }
    }
  },
  boost: {
    useGPUTranslations: true
  },
  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}</span>:{point.y}<br/>'
  },
  options: {
    lang: {
      loading: 'loading',
      noData: 'no-data'
    },
    tooltip: {
      valueSuffix: '',
      shared: true,
      crosshairs: [{
        width: 1,
        dashStyle: 'solid',
        color: '#898989'
      }]
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      borderWidth: 0
    },
    yAxis: [{
      title: {
        text: ''
      },
      label: {
        format: ''
      }
    }, {
      title: {
        text: ''
      },
      label: {
        format: ''
      }
    }]
  },
  plotOptions: {
    series: {
      fillOpacity: 0.1,
      cursor: 'pointer',
      marker: {
        enabled: false,
        symbol: 'circle'
      },
      animation: false,
      events: {
        show: function () {
        },
        hide: function () {
        }
      }
    }
  },
  loading: false,
  noData: false,
  title: {
    text: '',
    align: 'center'
  },
  xAxis: [{
    startOnTick: false,
    tickPixelInterval: 100,
    title: {
      text: ''
    },
    plotBands: [{
      from: -1000,
      to: -1000,
      color: '#FCFFC5',
      label: {
        text: 'Life Cycle',
        style: {
          color: '#999999'
        },
        y: 180
      },
      borderColor: '#F1C40F',
      borderWidth: 0,
      zIndex: -999
    }],
    plotLines: [],
    tickmarkPlacement: 'on',
    allowDecimals: false,
    events: {
      setExtremes: function (e) {

      }
    },
    labels: {
      formatter: function () {
        return this.value
      },
      useHTML: true
    }
  }],
  yAxis: [{
    min: 0,
    title: {
      text: '',
      align: 'high',
      rotation: 0,
      offset: -35,
      y: -12
    }
  }, {
    min: 0,
    title: {
      text: '',
      align: 'high',
      rotation: 0,
      offset: -20,
      y: -12
    },
    opposite: true
  }],
  series: [],
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  }
}
export default chartFormat
