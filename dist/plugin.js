!function r(a,l,d){function s(t,e){if(!l[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=l[t]={exports:{}};a[t][0].call(i.exports,function(e){var n=a[t][1][e];return s(n||e)},i,i.exports,r,a,l,d)}return l[t].exports}for(var c="function"==typeof require&&require,e=0;e<d.length;e++)s(d[e]);return s}({1:[function(e,n,t){"use strict";var i=[],a=function(e,n){var t=document.head||document.getElementsByTagName("head")[0],o=i[i.length-1];if((n=n||{}).insertAt=n.insertAt||"bottom","top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),i.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}};n.exports={createLink:function(e,n){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("link");for(var i in o.href=e,o.rel="stylesheet",n)if(n.hasOwnProperty(i)){var r=n[i];o.setAttribute("data-"+i,r)}t.appendChild(o)},createStyle:function(e,n,t){t=t||{};var o=document.createElement("style");for(var i in o.type="text/css",n)if(n.hasOwnProperty(i)){var r=n[i];o.setAttribute("data-"+i,r)}o.sheet?(o.innerHTML=e,o.sheet.cssText=e,a(o,{insertAt:t.insertAt})):o.styleSheet?(a(o,{insertAt:t.insertAt}),o.styleSheet.cssText=e):(o.appendChild(document.createTextNode(e)),a(o,{insertAt:t.insertAt}))}}},{}],2:[function(e,n,t){var o=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva {\n  margin-bottom: 5px;\n}\n";e("browserify-css").createStyle(o,{href:"src\\css\\styles.css"},{insertAt:"bottom"}),n.exports=o},{"browserify-css":1}],3:[function(e,n,t){"use strict";e("../css/styles.css");var o="starter-kit",i="https://minerva-dev.lcsb.uni.lu/minerva-proxy/",r={selected:[],allBioEntities:[],pickedRandomly:void 0},a=void 0,l=void 0,d=function(e){var n;console.log("registering "+o+" plugin"),$(".tab-content").css("position","relative"),a=e,l=$(a.element),l.attr("id"),console.log("minerva object ",a),console.log("project id: ",a.project.data.getProjectId()),console.log("model id: ",a.project.data.getModels()[0].modelId),a.project.map.addListener({dbOverlayName:"search",type:"onSearch",callback:u}),(n=$('<div class="'+o+'-container"></div>').appendTo(l)).append('\n        <div class="panel panel-default panel-events">\n            <div class="panel-heading">Events (Select an element in the map)</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),n.append('<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>'),n.append('<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight</button>'),n.append("<hr>"),n.append('<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>'),n.append('\n        <div class="panel panel-default panel-randomly-picked">\n            <div class="panel-heading">Randomly picked object</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),n.append('<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>'),n.append('<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight</button>'),n.append("<hr>"),n.append("<h4>Query UniProt API</h4>"),n.append('<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block" title="Queries UniProt using the element selected from the map">Retrieve from UniProt</button>'),n.append('\n        <div class="panel panel-default panel-uniprot">\n            <div class="panel-heading">Uniprot records for the selected element</div>\n            <div class="panel-body">\n                <code></code>\n            </div>\n        </div>\n    '),n.append("<hr>"),n.append("<h4>Query Minerva API</h4>"),n.append('\n        <form class="form-horizontal">\n            <div class="form-group">\n                <label class="col-sm-2 control-label">Address</label>\n                <div class="col-sm-10">\n                    <input class="input-minerva-address form-control" value="https://minerva-dev.lcsb.uni.lu/minerva">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-sm-2 control-label">Project ID</label>\n                <div class="col-sm-10">\n                    <input class="input-minerva-projectid form-control" value="sample2">\n                </div>\n            </div>                        \n        </form>\n        <button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n        <div class="panel panel-default panel-minerva">\n            <div class="panel-heading">Names of elements</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),n.find(".btn-highlight").on("click",function(){return m()}),n.find(".btn-focus").on("click",function(){return b()}),n.find(".btn-pick-random").on("click",function(){return function(){function n(){r.pickedRandomly=r.allBioEntities[Math.floor(Math.random()*r.allBioEntities.length)];var e=r.pickedRandomly.constructor.name+" - ";"Alias"===r.pickedRandomly.constructor.name?e+=r.pickedRandomly.getElementId()+" - "+r.pickedRandomly.getName():e+=""+r.pickedRandomly.getReactionId(),l.find(".panel-randomly-picked .panel-body").html(e)}0<r.allBioEntities.length?n():a.project.data.getAllBioEntities().then(function(e){r.allBioEntities=e,n()})}()}),n.find(".btn-highlight-random").on("click",function(){return m(!0)}),n.find(".btn-focus-random").on("click",function(){return b(!0)}),n.find(".btn-uniprot").on("click",function(){return e=(e=l.find(".panel-events .panel-body").text()).substring(0,e.indexOf(" - ")),console.log(e),void $.ajax({type:"GET",url:"https://www.uniprot.org/uniprot/?query="+e+"&sort=score&columns=id,entry%20name,reviewed,protein%20names,3d,genes,organism,length&format=tab&limit=10"}).then(function(e){l.find(".panel-uniprot .panel-body code").text(e)});var e}),n.find(".btn-minerva").on("click",function(){return t=l.find(".input-minerva-address").val(),o=l.find(".input-minerva-projectid").val(),void $.ajax({type:"GET",url:i+"?url="+t+"/api/projects/"+o+"/models/",dataType:"json"}).then(function(e){console.log("Retrived models from "+i,e);var n=e[0].idObject;return $.ajax({type:"GET",url:i+"?url="+t+"/api/projects/"+o+"/models/"+n+"/bioEntities/elements/",dataType:"json"})}).then(function(e){console.log("Retrived elements from "+i,e);var n="";e.forEach(function(e){n+=e.name+"<br/>"}),l.find(".panel-minerva .panel-body").html(n)});var t,o})},s=function(){return console.log("unregistering "+o+" plugin"),a.project.map.removeAllListeners(),a.project.map.getHighlightedBioEntities().then(function(e){return a.project.map.hideBioEntity(e)})},c=function(){return o},p=function(){return"1.0.0"};function u(e){r.selected=e[0];var n="";0<r.selected.length&&r.selected.forEach(function(e){"Alias"===e.constructor.name&&(n+="<div>"+e.getName()+" - "+e.getElementId()+"</div>")}),l.find(".panel-events .panel-body").html(n)}function m(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],n=[];e?r.pickedRandomly&&n.push({element:{id:r.pickedRandomly.id,modelId:r.pickedRandomly.getModelId(),type:r.pickedRandomly.constructor.name.toUpperCase()},type:"SURFACE",options:{color:"#00FF00",opacity:.5}}):r.selected.forEach(function(e){n.push({element:{id:e.id,modelId:e.getModelId(),type:"ALIAS"},type:"ICON"})}),a.project.map.showBioEntity(n)}function b(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];function n(e){"Alias"===e.constructor.name?a.project.map.fitBounds({modelId:e.getModelId(),x1:e.getX(),y1:e.getY(),x2:e.getX()+e.getWidth(),y2:e.getY()+e.getHeight()}):a.project.map.fitBounds({modelId:e.getModelId(),x1:e.getCenter().x,y1:e.getCenter().y,x2:e.getCenter().x,y2:e.getCenter().y})}!e&&0<r.selected.length&&n(r.selected[0]),e&&r.pickedRandomly&&n(r.pickedRandomly)}minervaDefine(function(){return{register:d,unregister:s,getName:c,getVersion:p}})},{"../css/styles.css":2}]},{},[3]);
