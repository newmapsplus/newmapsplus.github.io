    // deterimine approximate screen size and zoom map accordingly (roughly)
    var w = window.innerWidth,
        zoomLevel;

    switch (true) {
        case (w >= 1366):
            zoomLevel = 5.1;
            break;
        case (w >= 1280):
            zoomLevel = 4.9;
            break;
        case (w >= 1024):
            zoomLevel = 4.6;
            break;
        case (w >= 800):
            zoomLevel = 4.2;
            break;

    }

    // create initial map object and use CartoDB's projection to reproject
    var map = L.map('map', {
        center: [40,-93],
        zoom: zoomLevel,
        minZoom: zoomLevel,
        maxZoom: zoomLevel,
        zoomControl: false,
        dragging: false,
        attributionControl: false,
        crs: cartodb.proj('+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=37.5 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs', '102003')
    });

    // load a graticule thnx to Bjørn Sandvik
    L.graticule({
        interval: 5,
        style: {
            color: '#777',
            opacity: .3,
            weight: 2
        }      
    }).addTo(map);

    // initial global variables
    var selectedAtt, 
        normAtt = 'rn0to10000', 
        normalized = 'norm',
        hexgrid, 
        breaks = {
            norm: [2,1,.5,.3], // encoded high to low
            compare: [1.6,1.3,1,.6,.3]
        },
        colorSchemes = {
            norm: ['#0868ac','#43a2ca','#7bcce4','#bae4bc','#f0f9e8'],
            normLabels: ['highly likely','likely','about average','unlikely','highly unlikely'],
            compare: ['#2166ac','#67a9cf','#d1e5f0','#f7f7f7','#fddbc7','#ef8a62','#b2182b'],
            compareLabels: ['highly more likely','more likely','slighly more likely','about equal', 'slightly more likely','more likely','highly more likely']
        },
        displayNames = {
            ale: 'ale',
            amberandale: 'amber and ale',
            amstel: 'Amstel',
            beerandlightorlite: 'light or lite',
            beer: 'beer',
            belgianandale: 'belgian ale',
            bluemoon: 'Blue Moon',
            brooklynandlager: 'Brooklyn Lager',
            budorbudweiserandlightorlite: 'Budwieser (Bud) Light',
            budorbudweiser: 'Budweiser (Bud)',
            chimay: 'Chimay',
            coorsandlightorlite: 'Coors Light',
            coors: 'Coors',
            corona: 'Corona',
            dogfish: 'Dogfish',
            dosequis: 'Dos Equis',
            duvel: 'Duvel',
            fattire: 'Fat Tire',
            gooseisland: 'Goose Island',
            gose: 'Gose',
            grainbelt: 'Grain Belt',
            grolsch: 'Grolsch',
            guinness: 'Guinness',
            hefeweizen: 'Hefeweizen',
            heineken: 'Heineken',
            ipaorindiaandpaleandale: 'India Pale Ale (IPA)',
            lager: 'lager',
            leinenkugel: 'Leinenkugel',
            magichat: 'Magic Hat',
            millerandlightorlite: 'Miller Lite (Light)',
            miller: 'miller',
            modeloandbeerorespecial: 'Modelo Especial',
            naturallight: 'Natural Light',
            oktoberfest: 'Oktoberfest',
            ommegang: 'Ommegang',
            pabstblueribbonorpbr: 'Pabst Blue Ribbon (PBR)',
            paleandale: 'Pale Ale',
            pils: 'Pils',
            porter: 'porter',
            pumpkinandale: 'pumkin ale',
            redandale: 'red ale',
            saisonorfarmhouseandale: 'Saison Farmhouse Ale',
            samadams: 'Sam Adams',
            shinerbock: 'Shiner Bock',
            sierranevadaandaleoripa: 'Sierra Nevada',
            stellaandbeerorartois: 'Stella Artois',
            stout: 'stout',
            tribel: 'tribel', // typo in data pull, should be tripel
            weissbier: 'Weissbier',
            westvleteren: 'Westvleteren',
            wheatandale: 'wheat ale',
            witbier: 'Witbier',
            yuengling: 'Yuengling'    
        },
        sumData,
        stats = $(".stats");

        // first load and display the land geometry so user has something to look at
        $.getJSON("data/land.json", function(land) {
            var landLayer = L.geoJson(land, {
                style: function(feature) {
                    return {                
                        stroke: false,
                        fill: true,
                        color: '#3f3f3f',
                        weight: 1,
                        fillOpacity: 1
                    }
                }
            }).addTo(map);
            
            // then load in the bigger data file
            $.getJSON("data/beer-hexgrid.json", function(data) {
                ready(data)
            })
        });

    function ready(data) {

        // get a list of the available property variables
        var beerTypes = Object.keys(data.features[0].properties);

        // populate UI with beer type variables (using pretty display names)
        buildUI(beerTypes);

        // set initial map view with 'beer' variable
        selectedAtt =  'beer';
        $("#brew").val('beer')

        // create a new object from data to hold summed values for normalizing
        sumData = JSON.parse(JSON.stringify(data.features[0].properties));

        // then ensure that all property values are zero
        for (var key in sumData) {
            sumData[key] = 0;   
        }

        // then loop through data and aggregate totals for each property
        data.features.forEach(function(f) {
           for(var p in f.properties) {
               sumData[p]+=f.properties[p]
           }   
        });

        // draw initial geometries layer 
        hexgrid = L.geoJson(data, {
            style: function(feature) {
                return {                
                    stroke: true,
                    fill: true,
                    color: '#3f3f3f',
                    weight: 1,
                    fillOpacity: 1

                }
            },
            filter: function(feature) {
                  // don't create the polygons with no data
                  for(var prop in feature.properties){
                      if(feature.properties[prop] > 0) {
                        return feature;   
                      }
                  }         
            },
            onEachFeature: function(feature,layer){
                // for each hex, determine the top 10 beers tweeted
                // and display on a mouseover event
                layer.on('mouseover', function() {                          
                    
                    var props = layer.feature.properties;

                    var sortArray = []
                    for (var beer in props ) {
                        var val = props[beer]; 

                        if(beer != normAtt) {
                            sortArray.push({'beer': beer, 'val': val});
                        }
                    }
                    sortArray = sortArray.sort(function (a, b) {
                        return b.val - a.val;
                    });

                    var html = '<h3>Top 10 Beer Tweets</h3><ul>';
                    for(var i=0; i < 10; i++) {
                        html+='<li>'+(i+1)+": "+displayNames[sortArray[i].beer]+'</li>';   
                    }
                    html+='</ul>';  
                    stats.html(html);
                });     

            }
        }).addTo(map);

        // info window UI functionality
        $(document).mousemove(function(e){
            // first offset from the mouse position of the info window
            stats.css({"left": e.pageX + 6, "top": e.pageY - stats.height() - 15}); 
            
            // if it crashes into the top, flip it lower right
            if(stats.offset().top < 4) {
                stats.css({"top": e.pageY + 15});
            }
            // do the same for crashing into the right
            if(stats.offset().left + stats.width() >= $(document).width() - 40) {
                console.log('hes');
                stats.css({"left": e.pageX - stats.width() - 30});
            }
        });
        
        // only show the info window when hovering over our hexgrid
        hexgrid.on('mouseover', function(e){
            stats.show();
        });

        hexgrid.on('mouseout', function(e){
            stats.hide();
        });

       // initial call to symbolize map
       updateMap();

        // create the legend
        drawLegend();
    } // end ready

    function updateMap() {       

        hexgrid.eachLayer(function(layer) {

            var props = layer.feature.properties;
            
            // calculate a value for each hex based on the selected beer attribute
            if(!props[normAtt]) {
                var val = (props[selectedAtt]/sumData[selectedAtt])/(1/sumData[normAtt]);
            } else {
                var val = (props[selectedAtt]/sumData[selectedAtt])/(props[normAtt]/sumData[normAtt]);
            }

            if(val != 0){
                // color the hex value based upon the current data value 
                layer.setStyle({
                    fill: true,
                    stroke: true,
                    fillColor: getColor(val)
                });   
            } else {
                // don't display the ones with no data for this attribute
                layer.setStyle({
                   fill: false,
                   stroke: false
                });
            }

        });

        updateLegend();

    }

    function getColor(val){

        if(normAtt == 'rn0to10000'){
            normalized = 'norm';
        } else {
            normalized = 'compare';
        }
        for (var i=0; i < breaks[normalized].length; i++) {
            if(val >= breaks[normalized][i]){
                return colorSchemes[normalized][i];
            }
            if(val < breaks[normalized][breaks[normalized].length-1]){
                 return colorSchemes[normalized][colorSchemes[normalized].length - 1]; 
            }
        } 
    }

    function buildUI(vars) {

        $('.stats').hide();            
        var select = $("#brew");
        var normalize = $("#normalize").append("<option value='rn0to10000'>Tweet Population (normalized) </option>");
        vars.forEach(function(v) {
            if(v != 'rn0to10000') {
                select.append("<option value="+v+">"+displayNames[v]+"</option>");
                normalize.append("<option value="+v+">"+displayNames[v]+"</option>");
            }
        });
        select.change(function(e) {
            selectedAtt = select.val();
            updateMap();
            $("#output").html("");
        });  
        normalize.change(function(e) {
            normAtt = normalize.val();
            updateMap();
            $("#output").html("");
        });

        $('#ui').fadeIn(2000);

    }

    function drawLegend() {

        var legend = L.control({position: 'bottomright'});
        legend.onAdd = function(map) {
            var div = L.DomUtil.create('div', 'legend');
            return div;
        };
        legend.addTo(map);
        updateLegend();
        $('.legend').fadeIn(2000);

    }

    function updateLegend(){
        var currentBeer = $("#brew").val();
        if(normAtt == 'rn0to10000') { 
            $('.legend').html('<h3>Probability of tweets<br> containing <span style="color:#48a3c8 ">"'+displayNames[currentBeer]+'"</span></h3><ul>');
            var labels = ['highly likely', 'likely', 'about average', 'unlikely', 'highly unlikely'];
        } else {
            $('.legend').html('<h3>Comparison of <span class="highly-unlikely">"'+displayNames[currentBeer]+'"</span>  vs <span class="highly-likely">"'+displayNames[normAtt]+'"</span></h3><ul>');
            var labels = ['highly more likely', 'more likely', 'slighly more likely', 'about equal', 'slightly more likely', 'more likely', 'highly more likely'];
        }

        for(var i=0; i<=colorSchemes[normalized].length-1;i++){

            $('.legend ul').append('<li><span style="background: '+colorSchemes[normalized][i]+'"></span>'+labels[i]+'</li>');

        }

        $('.legend ul').append('</ul>');

    }