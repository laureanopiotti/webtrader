define(["jquery","jquery-ui","websockets/binary_websockets","common/menu","jquery-growl","common/util"],function(a,b,c,d){"use strict";function e(b){require(["charts/chartWindow"],function(c){var d=a("#instrumentsDialog").dialog("option","title"),e=a("#instrumentsDialog").data("symbol");c.addNewWindow(e,d,b,isTick(b)?"line":"candlestick"),a("#instrumentsDialog").dialog("close")})}function f(b){var c=function(){var c=b.data("delay_amount");a("#instrumentsDialog").dialog("option","title",b.find("a").text()).data("symbol",b.data("symbol")).data("delay_amount",c).dialog("open"),a("#instrumentsDialog").find("button").each(function(){var b=a(this),d=convertToTimeperiodObject(b.attr("id")).timeInSeconds()<60*c?"disable":"enable";b.button(d)})};0==a("#instrumentsDialog").length?require(["text!instruments/instruments.html"],function(b){a(b).css("display","none").appendTo("body"),a("#standardPeriodsButtonContainer").find("button").click(function(){e(a(this).attr("id"))}).button(),a("#instrumentsDialog").dialog({autoOpen:!1,resizable:!1,width:270,height:250,my:"center",at:"center",of:window,buttons:[]}),c()}):c(),a(document).click()}var g=[];return{init:function(){a.isEmptyObject(g)&&(require(["css!instruments/instruments.css"]),c.cached.send({trading_times:(new Date).toISOString().slice(0,10)}).then(function(b){g=d.extractChartableMarkets(b);var c=a("<ul>").appendTo(a("#nav-menu").find(".instruments"));d.sortMenu(g),d.refreshMenu(c,g,f)})["catch"](void 0))},getMarketData:function(){return g},isMarketDataPresent:function(b,c){var d=!1;c||(c=g);var e=this;return a.each(c,function(c,f){return f.submarkets||f.instruments?d=e.isMarketDataPresent(b,f.submarkets||f.instruments):a.trim(f.display_name)==a.trim(b)&&(d=!0),!d}),d},getSpecificMarketData:function(b,c){var d={};c||(c=g);var e=this;return a.each(c,function(c,f){return f.submarkets||f.instruments?d=e.getSpecificMarketData(b,f.submarkets||f.instruments):a.trim(f.display_name)==a.trim(b)&&(d=f),a.isEmptyObject(d)}),d}}});