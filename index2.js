// En HTML
// <script src="https://code.highcharts.com/highcharts.js"></script>
// <script src="https://code.highcharts.com/modules/data.js"></script>
// <script src="https://code.highcharts.com/modules/exporting.js"></script>



Highcharts.chart('container', {
  chart: {
      type: 'spline'
  },
  title: {
      text: 'Live Data (CSV)'
  },

  subtitle: {
      text: 'Data input from a remote CSV file'
  },

  data: {
      csvURL: 'https://demo-live-data.highcharts.com/time-data.csv',
      //csvURL: url,
      //enablePolling: true
      beforeParse: function (csv) {

  
        return csv;
        return csv.replace(/\n\n/g, '\n');
    }
  }
});


Highcharts.chart('container', {
  chart: {
      type: 'bar',
      marginLeft: 50,
      marginBottom: 90
  },
  data: {
    csvURL: url,
    beforeParse: function (csv) {
      console.log("Datos2", getSubarray(csv, 0, 10));
        //return csv.replace(/\n\n/g, '\n');
    }
  },
  xAxis: {
      categories: peliculas
  },
  yAxis: {
    min: 0,
    title: {
        text: 'Recaudación',
        align: 'high'
    },
    labels: {
        overflow: 'justify'
    }
},
  title: {
    text: 'Top 10 peliculas por genero'
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      data: datos
  }]
});