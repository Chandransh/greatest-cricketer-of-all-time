//Most runs column chart
AmCharts.makeChart( "mostRuns", {
  "type": "serial",
  "theme": "light",
  "addClassNames": true,
  "autoMargins": true,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider": [ {
    "player": 'Sachin Tendulkar',
    "runs": 18426
  }, {
    "player": 'Kumar Sangakkara',
    "runs": 14234
  }, {
    "player": 'Ricky Ponting',
    "runs": 13704
  }, {
    "player": 'Sanath Jayasuriya',
    "runs": 13430
  }, {
    "player": 'Mahela Jayawardene',
    "runs": 12650
  }],
  "valueAxes": [ {
    "axisAlpha": 0,
    "position": "left"
  } ],
  "startDuration": 1,
  "graphs": [ {
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[title]] by [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "Total Runs",
    "type": "column",
    "valueField": "runs",
    "dashLengthField": "dashLengthColumn"
  }],
  "categoryField": "player",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  }
});
//Wisdon top 3 column chart
AmCharts.makeChart( "topThree", {
  "type": "serial",
  "theme": "light",
  "addClassNames": true,
  "autoMargins": true,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },

  "dataProvider": [ {
    "player": 'Sachin Tendulkar',
    "ratings": 1137.3
  }, {
    "player": 'Viv Richards',
    "ratings":	1132.5
  }, {
    "player": 'Brian Lara',
    "ratings": 1040.9
  }],
  "valueAxes": [ {
    "axisAlpha": 0,
    "position": "left"
  } ],
  "startDuration": 1,
  "graphs": [ {
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[title]] for [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "Ratings",
    "type": "column",
    "valueField": "ratings",
    "dashLengthField": "dashLengthColumn",
    "fill": "red"
  }],
  "categoryField": "player",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  }
});
//for versus chart
AmCharts.makeChart("versus", {
  "type": "serial",
  "theme": "light",
  "legend": {
    "horizontalGap": 10,
    "maxColumns": 1,
    "position": "right",
    "useGraphSettings": true,
    "markerSize": 10
  },
  "dataProvider": [{
    "player": "Sachin Tendulkar",
    "wickets": 154,
    "catches": 140,
    "rating/innings": 40.12,
    "average": 44.83,
    "conversion rate": 33.79
  }, {
    "player": "Viv Richards",
    "wickets": 118,
    "catches": 100,
    "rating/innings": 40.25,
    "average": 47,
    "conversion rate": 19.64
  }],
  "valueAxes": [{
    "stackType": "regular",
    "axisAlpha": 0.3,
    "gridAlpha": 0
  }],
  "graphs": [{
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Wickets",
    "type": "column",
    "color": "#000000",
    "valueField": "wickets"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Catches",
    "type": "column",
    "color": "#000000",
    "valueField": "catches"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Ratings/innings",
    "type": "column",
    "color": "#000000",
    "valueField": "rating/innings"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Average",
    "type": "column",
    "color": "#000000",
    "valueField": "average"
  }, {
    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    "fillAlphas": 0.8,
    "labelText": "[[value]]",
    "lineAlpha": 0.3,
    "title": "Conversion rate to 100 after scoring 50",
    "type": "column",
    "color": "#000000",
    "valueField": "conversion rate"
  }],
  "categoryField": "player",
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  }
});