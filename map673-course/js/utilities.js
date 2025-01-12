const basemaps = {
    lexBounds: [
        [38.081334368, -84.572773848],
        [37.988291333, -84.453432028]
    ],
    kyBounds: [
        [39.25995919, -89.80883737],
        [36.09998597, -81.77646750]
    ],
    rrgBounds: [
        [37.90274153, -83.73821562],
        [37.714705672, -83.542881303]
    ],
    hill: {
        url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/ky-hillshade/{z}/{x}/{y}.jpg',
        options: {
            attribution: '&copy; UKy Geography',
            maxZoom: 14.4,
            minZoom: 2,
            bounds: [
                [39.25995919, -89.80883737],
                [36.09998597, -81.77646750]
            ]
        }
    },
    'st-trail': {
        url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/st-trail/{z}/{x}/{y}.png',
        // url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/ky_pop_density_2010/{z}/{x}/{y}.jpg',
        options: {
            attribution: '&copy; UKy Geography',
            maxZoom: 14.4,
            minZoom: 2,
            bounds: [
                [39.25995919, -89.80883737],
                [36.09998597, -81.77646750]
            ]
        }
    },
    dsm: {
        url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/dsm-lex-png/{z}/{x}/{y}.png',
        options: {
            attribution: '&copy; UKy Geography',
            maxZoom: 18.4,
            minZoom: 11,
            bounds: [
                [38.081334368, -84.572773848],
                [37.988291333, -84.453432028]
            ]
        }
    },
    loveletter: {
        url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/dsm-lex-png/{z}/{x}/{y}.png',
        options: {
            attribution: '&copy; UKy Geography',
            maxZoom: 18.4,
            minZoom: 11,
            bounds: [
                [38.081334368, -84.572773848],
                [37.988291333, -84.453432028]
            ]
        }
    },
    cartoNoLabels: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 18.4,
            opacity: 1
        }
    },
    cartoOnlyLabels: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
        options: {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 18.4
        }
    },
    topo: {
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
        options: {
            maxZoom: 14.4,
            attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
            opacity: 0.6
        }
    },
    img: {
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
        options: {
            maxZoom: 18.4,
            attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
            opacity: 0.3
        }
    },
    ky: {
        url: 'https://kyraster.ky.gov/arcgis/rest/services/ImageServices/Ky_USGS_Topographic_Maps_2016/MapServer/tile/{z}/{y}/{x}',
        options: {
            maxZoom: 18.4,
            attribution: 'Tiles courtesy of the <a href="',
            opacity: 0.3,
            crossOrigin: 'anonymous'
        }
    },
    aip: {
        url: 'http://{s}.tile.maps.openaip.net/geowebcache/service/tms/1.0.0/openaip_basemap@EPSG%3A900913@png/{z}/{x}/{y}.{ext}',
        options: {
            attribution: '<a href="https://www.openaip.net/">openAIP Data</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-NC-SA</a>)',
            ext: 'png',
            minZoom: 4,
            maxZoom: 14,
            tms: true,
            detectRetina: true,
            subdomains: '12'
        }
    },
    rrg: {
        url: 'https://nyc3.digitaloceanspaces.com/astoria/tiles/rrg/{z}/{x}/{y}.jpg',
        options: {
            attribution: '&copy; UKy Geography',
            maxZoom: 19.4,
            minZoom: 10,
            bounds: [
                [37.90274153, -83.73821562],
                [37.714705672, -83.542881303]
            ]
        }
    },
    'hill-img': {
        order: [
            ['hill', 1],
            ['img', 0.3]
        ],
        bounds: [
            [39.25995919, -89.80883737],
            [36.09998597, -81.77646750]
        ]
    },
    'hill-topo': {
        order: [
            ['hill', 1],
            ['topo', 0.5]
        ],
        bounds: [
            [39.25995919, -89.80883737],
            [36.09998597, -81.77646750]
        ]
    },
    'dsm-labels': {
        order: [
            ['cartoNoLabels', 1],
            ['dsm', 0.4],
            ['cartoOnlyLabels', 1]
        ],
        bounds: [
            [38.081334368, -84.572773848],
            [37.988291333, -84.453432028]
        ]
    },
    'rrg-topo': {
        order: [
            ['rrg', 1],
            ['topo', 0.5]
        ],
        bounds: [
            [37.90274153, -83.73821562],
            [37.714705672, -83.542881303]
        ]
    },

    geocache: {
        tiles: ['sanborn_1907_62', 'sanborn_1907_63', 'sanborn_1907_65','sanborn_1907_67', 'sanborn_1907_72', 'sanborn_1907_74', 'sanborn_1907_77'],
        options: {
            minZoom: 1,
            maxZoom: 21,
            opacity: 1.0,
            tms: true,
            bounds: [
                [38.081334368, -84.572773848],
                [37.988291333, -84.453432028]
            ],
            attribution: "<a href='https://uky-gis.github.io/'>UKy Geography</a>" // | &copy; <a href='https://openstreetmap.org'>OSM Contributors</a>
          }
    }
}

adjustHeight()

buildPage()

function buildPage() {
    let mapId
    for (m in basemaps) {
        if (document.querySelector(`#${m}`)) {
            mapId = `${m}`
            break
        }
    }

    console.log(mapId)
    if (mapId) {
        makeMap(mapId)
    }

    window.addEventListener('resize', () => {
        adjustHeight()
    })

    if (document.querySelector("#map-modal")) {
        makeMap('map-modal')
        adjustHeight()
    }
}

function adjustHeight() {
    const elements = ['#nav', '#singleTitle', '#footer']
    let height = 0
    elements.forEach(element => {
        if (document.querySelector(element)) {
            let size = document.querySelector(element)
            height += size.offsetHeight;
        }
    });

    if (document.querySelector("#fullHeight")) {
        let size = window.innerHeight - height
        let mapSize = document.querySelector("#fullHeight")
        mapSize.style.height = `${size}px`
    }

    if (document.querySelector(".scrollspy-example")) {
        let size = window.innerHeight - height
        let containerSize = document.querySelector(".scrollspy-example")
        containerSize.style.height = `${size - 20}px`
    }

    if (document.querySelector("#two-column")) {
        console.log(window.innerWidth)
        let size = window.innerHeight - height
        let containerSize = document.querySelector("#two-column")
        let mapSize = document.querySelector("#column-map")

        if (window.innerWidth >= 768) {
            containerSize.style.height = `${size}px`
            mapSize.style.height = `${size - 20}px`
        } else {
            containerSize.style.height = `${size/2}px`
            mapSize.style.height = `${size/2 - 20}px`
        }

    }
}

function makeMap(id) {

    const options = {
        zoomSnap: 0
    }

    const map = L.map(id, options);

    L.control.scale({
        imperial: true
    }).addTo(map);

    if (basemaps[id]) {
        console.log('we have a custom map', basemaps[id])

        if (basemaps[id].order) {
            for (j of basemaps[id].order) {
                basemaps[j[0]].options.opacity = j[1]
                L.tileLayer(basemaps[j[0]].url, basemaps[j[0]].options).addTo(map)
            }
            map.fitBounds(basemaps[id].bounds)

        } else if (basemaps[id].tiles) {
            const a = 'https://uky-gis.github.io/history/maps/'
            const b = '/{z}/{x}/{y}.png'
            for (j of basemaps[id].tiles) {
                L.tileLayer(`${a}${j}${b}`, basemaps[id].options).addTo(map)
            }
            // map.fitBounds(basemaps.lexBounds)

        } else if (basemaps[id]) {

            basemaps[id].options.className = 'fixImg'
            L.tileLayer(basemaps[id].url, basemaps[id].options).addTo(map)
            basemaps[id].options.className = ''
            L.tileLayer(basemaps[id].url, basemaps[id].options).addTo(map)
            map.fitBounds(basemaps[id].options.bounds)

        }
    } else {

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
            .addTo(map)
        map.fitBounds(basemaps.kyBounds)
    };

    map.on('zoom', () => {
        zoom = map.getZoom()
    })
    map.on('move', () => {
        // console.log(map.getBounds())
    })

    if (id == 'map-modal') {
        const myModalEl = document.getElementById('map-modal-content')
        // const myModalBu = document.getElementById('modal-button')

        // myModalBu.addEventListener('click', () => {
        //     kyBounds = map.getBounds()
        // })

        myModalEl.addEventListener('shown.bs.modal', () => {
            map.invalidateSize(true)
            if (id.startsWith('dsm')) {
                map.fitBounds(basemaps.lexBounds)
            } else {
                map.fitBounds(basemaps.kyBounds)
            }
        })
    }
    addData(map, id)

    // if (document.querySelector("#map-modal-button")) {
    //     addModal(document.querySelector("#map-modal-button"), map)
    // }
}

function addModal(button, map) {

    console.log(L.control())

    // create modal
    const modal = L.control({
        position: 'topright'
    });

    // when added
    modal.onAdd = function () {
        // get the element with id attribute of ui-controls
        return L.DomUtil.get("map-modal-button");
    }
    // add the control to the map
    modal.addTo(map);
    button.style.display = 'block'

}

function addData(map, id) {
    fetch('https://boydx.github.io/hugo-maps/data/kentucky.geojson')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
        .then(data => {
            const lex = {}
            const geojson = L.geoJson(data, {
                style: function (feature) {
                    return {
                        color: '#15397f',
                        weight: 0.8,
                        fill: false
                    };
                },
                onEachFeature: function (feature, layer) {
                    const f = feature.properties.NAME
                    if (f == 'Fayette') {
                        lex.loc = layer.getBounds()
                    }
                }
            }).addTo(map)
        })

        .then(() => {
            fetch('../../data/uk.geojson')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
        .then(uk => {
            const geojson = L.geoJson(uk, {
                style: function (feature) {
                    return {
                        color: '#009bda',
                        weight: 0.15,
                        fill: '#009bda',
                        fillOpacity: 0.2,
                        className: 'no-scale-stroke'
                    };
                },
                onEachFeature: function (feature, layer) {
                    const f = feature.properties
                    let popup = `<h2>University of Kentucky</h2>
                                    Lexington campus`
                    layer.bindPopup(popup)
                }
            })
            geojson.addTo(map)
        })
        })
        .then(() => {
            if (id == 'dsm' || id == 'hill') {
                fetch("../../data/environs.csv")
                .then((data) => {
                    return data.text()
                }).then((data) => {
                    const csvData = [];
                    const lines = data.split("\n");
                    let i = 0
                    lines.forEach(l => {
                        csvData[i] = l.split(",");
                        i += 1
                    })
                    updateLex(map, csvData)
                })
            }
        })
        // .then(() => {
        //     if (id == 'hill') {
        //         fetch("https://uky-gis.github.io/geo109/slides/01/locations.geojson")
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response)
        //                 return response.json()
        //             } else {
        //                 throw new Error(`HTTP error! status: ${response.status}`);
        //             }
        //         })
        //         .then((data) => {
        //             const geojson = L.geoJson(data, {
        //                 onEachFeature: function (feature, layer) {
        //                     const f = feature.properties
        //                     let popup = `<h3>${f.words}</h3>`
        //                     layer.bindPopup(popup)
        //                 }
        //             })
        //             geojson.addTo(map)
        //         })
        //     }
        // })
        // .then(() => {
        //     if (id == 'dsm') {
        //         fetch("../../data/lab-4.geojson")
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response)
        //                 return response.json()
        //             } else {
        //                 throw new Error(`HTTP error! status: ${response.status}`);
        //             }
        //         })
        //         .then((data) => {
        //             const geojson = L.geoJson(data, {
                        
        //                 style: function(feature) {
        //                     const color = `#${Math.floor((Math.random()*16777215)).toString(16)}`;
        //                     const r = [(Math.random() * 200), (Math.random() * 200), (Math.random() * 200)];
                            
        //                     console.log(r)

        //                     return {
        //                         color: rgb(r[0], r[1], r[2]),
        //                         weight: 2
        //                     }
        //                 }
        //             })
        //             geojson.addTo(map)
        //         })
        //     }
        // })
        // .then(() => {
        //     if (id == 'dsm') {
        //         fetch("../../data/210712_CelebMap/locations.geojson")
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response)
        //                 return response.json()
        //             } else {
        //                 throw new Error(`HTTP error! status: ${response.status}`);
        //             }
        //         })
        //         .then((data) => {
        //             const geojson = L.geoJson(data, {
        //                 pointToLayer: function(geoJsonPoint, latlng) {
        //                     const options ={
        //                         radius: 8,
        //                         fillColor: '#ff00ff',
        //                         color: '#ff00ff',
        //                         weight: 2
        //                     }
        //                     return L.circleMarker(latlng, options);
        //                 },
        //                 onEachFeature: function (feature, layer) {
        //                     const f = feature.properties
        //                     let popup = `<h3>${f.name}</h3>
        //                     <img src="../../data/210712_CelebMap/${f.photo}" width="300px"/>
        //                                 <p>${f.description}</p>`    

        //                     layer.bindPopup(popup)
        //                 }
        //             })
        //             geojson.addTo(map)
        //         })
        //     }
        // })
        // .then(() => {
        //     if (id == 'loveletter') {
        //         fetch("../../data/210810/locations.geojson")
        //         .then(response => {
        //             if (response.ok) {
        //                 console.log(response)
        //                 return response.json()
        //             } else {
        //                 throw new Error(`HTTP error! status: ${response.status}`);
        //             }
        //         })
        //         .then((data) => {
        //             const geojson = L.geoJson(data, {
        //                 pointToLayer: function(geoJsonPoint, latlng) {
        //                     const options ={
        //                         radius: 8,
        //                         fillColor: '#ff00ff',
        //                         color: '#ff00ff',
        //                         weight: 2
        //                     }
        //                     return L.circleMarker(latlng, options);
        //                 },
        //                 onEachFeature: function (feature, layer) {
        //                     const f = feature.properties
        //                     let popup = `<h3>${f.name}</h3>
        //                                 <a href='${f.link}' target='_blank'><img src='../../data/210810/${f.media}' width="300px"/></a>
        //                                 <p>${f.description}</p>`    

        //                     layer.bindPopup(popup)
        //                 }
        //             })
        //             geojson.addTo(map)
        //         })
        //     }
        // })
        // .then(() => {
        //     if (id == 'geocache') {
        //         geocache(map)
        //     }
        // })
}


function updateLex(map, csvData) {
    console.log(map, csvData)
    fetch('../../data/environs.geojson')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
        .then(environs => {
            geojson = L.geoJson(environs, {
                style: function (feature) {
                    return {
                        color: 'red',
                        weight: 2,
                        fill: 'red',
                        fillOpacity: 0.5,
                        className: 'no-scale-stroke'
                    };
                },
                onEachFeature: function (feature, layer) {
                    const f = feature.properties
                    let popup = `<h2>${f.name}</h2>`
                    csvData.forEach(d => {
                        if (d[0] == f.id) {
                            popup += `${d[2]}<br>${d[3]}<br>${d[4]}`
                        }
                    })
                    layer.bindPopup(popup)
                }
            })

            return geojson
        })
        .then((geojson) => {
            geojson.addTo(map)
            // map.flyToBounds(geojson.getBounds())

            // map.on('zoomend', function () {
            //     geojson.addTo(map)
            // });
        })
        
}

function geocache(map){

    const locations = {
        "features": [
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Thoroughbred Park", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.490400, 38.041601] ] } },
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Courthouse", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.495663, 38.046927] ] } },
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Limestone Curtain", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [-84.496743, 38.046258] ] } },
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Phoenix Park", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.497247,38.045936] ] } }, 
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "FifthThird", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.499451,38.047544] ] } }, 
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Triangle Park", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.500739, 38.048949] ] } }, 
            { "type": "Feature", "properties": { "amenity": "waterfountain.svg", "size": [45, 45], "name": "Chase", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -84.494685, 38.044567] ] } }, 
            { "type": "Feature", "properties": { "amenity": "rainbow.svg", "size": [80, 80], "name": "Old wise one, knobbly and gnarled", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [-84.500427, 38.032274] ] } }, 
            { "type": "Feature", "properties": { "amenity": "pizza.svg", "size": [100, 100], "name": "Bite me!", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [-84.503370, 38.043482] ] } }, 
            { "type": "Feature", "properties": { "amenity": "ky_2.svg", "size": [120, 120], "name": "UKy Department of Geography<br><span style='font-size:0.8em;'>History — <a href='https://uky-gis.github.io/history/slides/'>visit</a></span>", "pop_up": "#" }, "geometry": { "type": "MultiPoint", "coordinates": [ [-84.504280, 38.038659] ] } }
        ]
        };

    const icons = {}
    const bounds = new L.latLngBounds()

    for (i of locations.features){
        icons[i.properties.amenity] = L.icon({
            iconUrl: `/geo109/images/${i.properties.amenity}`,
            iconSize: i.properties.size
        });
        bounds.extend([i.geometry.coordinates[0][1], i.geometry.coordinates[0][0]])
    }

    L.geoJson(locations, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {
            icon: icons[feature.properties.amenity]
          });
        },

        onEachFeature: function (feature, layer) {
          layer.bindPopup('<h2>' + feature.properties.name + '</h2>');
        }

      }).addTo(map); 

      map.fitBounds(bounds, { 
          padding: [50, 50] 
        });

    const customLegend = document.querySelector('#custom-legend') 

    customLegend.addEventListener('click', function (e) {

        const x = document.getElementById('legend');
        if (x.style.height === '170px') {
            x.style.height = '0px';
        } else {
            x.style.height = '170px';
        }

        const z = document.getElementById('credit');
        if (z.style.bottom === '0px') {
            z.style.bottom = '-20px';
        } else {
            z.style.bottom = '0px';
        }
    });
      
      geoLocate(map)
}

function geoLocate(map) {
    const geolocate = L.control.locate({
        strings: {
            title: 'Geolocate',
            popup: '<h2>Here be dragons!</h2>'
        },
        icon: 'fa fa-location-arrow',
        position: 'topleft',
        locateOptions: {
            enableHighAccuracy: true,
            maxZoom: 21
        }
    }).addTo(map);

    geolocate.on('locationfound', function (e) {
        map.setView(e.latlng, e.zoom);
    });
}

