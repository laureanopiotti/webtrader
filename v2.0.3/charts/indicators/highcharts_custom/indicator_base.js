define(["jquery"],function(a){var b={OPEN:0,HIGH:1,LOW:2,CLOSE:3,isOHLCorCandlestick:function(a){return"candlestick"==a||"ohlc"==a},recalculate:function(b){var c=1,d=b.yAxis.length;d--,d--;var e=Math.round(45/d),f=0;0>=d?b.yAxis[0].update({top:"0%",height:"100%"},!1):a.each(b.yAxis,function(a,b){0==a?(b.update({top:"0%",height:"50%"},!1),f+=50):b.options&&b.options.id&&-1!=b.options.id.toLowerCase().indexOf("navigator")||(b.update({top:f+c+"%",height:(f+c+e>100?100-f-c:e)+"%",offset:0},!1),f+=c+e)})},appliedPriceString:function(a){var c="CLOSE";switch(a){case b.OPEN:c="OPEN";break;case b.HIGH:c="HIGH";break;case b.LOW:c="LOW";break;case b.CLOSE:c="CLOSE"}return c},extractPriceForAppliedTO:function(a,c,d){var e=0;switch(a){case b.OPEN:e+=c[d].open||c[d][1];break;case b.HIGH:e+=c[d].high||c[d][2];break;case b.LOW:e+=c[d].low||c[d][3];break;case b.CLOSE:e+=c[d].close||c[d][4]}return e},extractPrice:function(a,b){return a[b][4]||a[b].close||a[b][1]||a[b].y},toFixed:function(b,c){return a.isNumeric(b)&&(b=Math.round(b*Math.pow(10,c))/Math.pow(10,c)),b},checkCurrentSeriesHasIndicator:function(b,c){var d=!1;return b&&c&&a.each(b,function(a,b){return b&&b.parentSeriesID==c?(d=!0,!1):void 0}),d},findDataUpdatedDataPoint:function(a,b){for(var c=-1,d=a.length-1;d>=1;d--)if(a[d][0]===b[0]||a[d].x===b[0]){c=d;break}return c},isDoji:function(a){if(a&&a.open&&a.high&&a.low&&a.close)var b=a.open==a.close,c=Math.abs(a.open-a.high),d=Math.abs(a.open-a.low),e=Math.abs(a.low-a.high),f=(b||.1*e>=Math.abs(a.open-a.close))&&d>c,g=(b||.1*e>=Math.abs(a.open-a.close))&&c>d;return{isBull:g,isBear:f}}};return b});