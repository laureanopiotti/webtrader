define(["indicator_base","highstock"],function(a){var b={},c={};return{init:function(){!function(a,d,e){function f(a,d){{var f=this;f.chart}for(var g in c)if(c[g]&&c[g].options&&c[g].options.data&&c[g].options.data.length>0&&b[g].parentSeriesID==f.options.id){var h=f.options.data,i=b[g].period,j=e.findDataUpdatedDataPoint(h,a);if(j>=1){var k=0;if(j>=i){for(var l=0,m=0,n=j,o=1;n>0&&i>=o;n--,o++){var p=e.extractPrice(h,n-1),q=e.extractPrice(h,n);q>p&&(l+=q-p),p>q&&(m+=p-q)}l/=i,m/=i;var r=l/m;k=0==m?100:100-100/(1+r)}k=e.toFixed(k,2),d?c[g].options.data.length<h.length?c[g].addPoint([h[j].x||h[j][0],k]):c[g].data[j].update([h[j].x||h[j][0],k]):c[g].addPoint([h[j].x||h[j][0],k])}}}a&&!a.Series.prototype.addRSI&&(a.Series.prototype.addRSI=function(a){var f=this.options.id;a=d.extend({period:14,stroke:"red",strokeWidth:2,dashStyle:"line",levels:[],parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(h&&h.length>0){for(var i=[],j=0;j<h.length;j++)if(j>=a.period){for(var k=0,l=0,m=j,n=1;m>0&&14>=n;m--,n++){var o=e.extractPrice(h,m-1),p=e.extractPrice(h,m);p>o&&(k+=p-o),o>p&&(l+=o-p)}k/=a.period,l/=a.period;var q=k/l,r=0==l?100:100-100/(1+q);isFinite(r)&&!isNaN(r)&&i.push([h[j].x||h[j][0],e.toFixed(r,2)])}else i.push([h[j].x||h[j][0],0]);var s=this.chart;b[g]=a,s.addAxis({id:"rsi"+g,title:{text:"RSI("+a.period+")",align:"high",offset:0,rotation:0,y:10,x:50},lineWidth:2,plotLines:a.levels},!1,!1,!1),e.recalculate(s);var t=this;c[g]=s.addSeries({id:g,name:"RSI("+a.period+")",data:i,type:"line",dataGrouping:t.options.dataGrouping,yAxis:"rsi"+g,opposite:t.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle},!1,!1),d(c[g]).data({isIndicator:!0,indicatorID:"rsi",parentSeriesID:a.parentSeriesID,period:a.period}),s.redraw()}return g},a.Series.prototype.removeRSI=function(a){var d=this.chart;b[a]=null,d.get(a).remove(!1),d.get("rsi"+a).remove(!1),c[a]=null,e.recalculate(d),d.redraw()},a.wrap(a.Series.prototype,"addPoint",function(a,c,d,g,h){a.call(this,c,d,g,h),e.checkCurrentSeriesHasIndicator(b,this.options.id)&&f.call(this,c)}),a.wrap(a.Point.prototype,"update",function(a,c,d,g){a.call(this,c,d,g),e.checkCurrentSeriesHasIndicator(b,this.series.options.id)&&f.call(this.series,c,!0)}))}(Highcharts,jQuery,a)}}});