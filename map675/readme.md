# MAP675: Collaborative Geovisualization

## Course Description

MAP 675 will enable students to build rich, user-centered web interfaces to promote the exploration and understanding of complex spatial datasets. Students will engage with a variety of open source tools and processes that enhance the data pipeline feeding the design of interactive and dynamic web maps. MAP 675 emphasizes building skills that will allow students to more effectively collaborate with other map designers and developers across the web using industry standards and best practices. Course assignments create leverage using command-line utilities, Node run-time environments, vector tilesets and styles, and principles from Web Cartography to further students' abilities to solve a variety of mapping problems.


### Module 01: Mapmaking beyond the GUI

Module 01 introduces you to the use of command-line processes to ease data processing and map development. You'll learn how to more effectively use your computer's command-line interface along with other useful GeoSpatial utility libraries such as GDAL/OGR and Mapshaper. The module's collaborative assignment challenges you and your class team member to use these command line tools to merge, generalize, and convert data from various sources for custom reprojection within a web map.

### Technical guidance: Running data through the command line

- what is the command line/terminal?
    - what kinds of things can we do with the terminal?
    - how do we move around in our file/directory structure?
    - how do we create/delete files/directories?
    - how do we copy or move files?
- how do we use Git via the command line?
- what's ogr/gdal?
- how do we use ogr/gdal in place of a GIS?


### Collaborative mapping assignment: Wrangling geodata via command line

This task begins with an existing example map made in Leaflet. Your task is to work with a class team member to create a new map using a different data set and geographical area of interest. An additional learning objective is to more effecitvely use Git for branching and collaboration with your partner to complete the map.

- integrate spatial datasets from the following sources and prep into GeoJSON format:
    - US Census Cartographic Boundary files
    - City Planning GIS data (traffic routes)
    - Something else
- begin with template starter project
- how to create projected Leaflet map with these files?
- implementing the plugin


### Module 02: Geoprocessing with Node

Module 02 introduces you to Node.js, a server-side run-time environment. You'll learn how to install Node and npm, a "package manager" for the world's largest collection of open source geospatial JavaScript resources. You'll practice writing basic Node scripts to process data and automate your workflow. The module's collaborative assignment challenges you and your class team member to construct a npm-enabled GitHub repository hosting a project demonstrating a range of useful GIS tasks for a web map endpoint.

### Technical guidance

- what is Node?
- how do we install it?
- what's npm?
- how do we install npm and additional new packages?
- how do we run terminal scripts with npm?
- how do we write and run a 'hello world' script with Node?
- how do we run some basic scripts with Node? Examples:
  - how do we read a file from the system into the Node environment with fs?
  - how do we parse CSV data into GeoJSON with babyParse?
  - how do we parse CSV data into GeoJSON with csv2geojson?
  - how do we parse CSV data into JSON with csvtojson?
- using npm global commands
    - how do we use mapshaper to pre-process our geospatial data?
    - how do we use topojson to pre-process our geospatial data?
- how do we use package.json to help build and manage a development project?
- what's the difference between dependences and devDependencies?
- how do we automate a build process with npm scripts?
- how do we bundle our Node code for the browser with browserify?

### Collaborative task: Project management with npm packages

Build a sharable Git repo using Node and nmp to complete.


#### additional learning outcomes:

- how do we understand and use GitHub repos that use npm?

Task: using (Leaflet) plugins.

## Module 03: Geospatial processing with Turf.js

Module 03 introduces you to Turf.js, a JavaScript library designed for advanced geospatial analysis and data manipulation. You'll learn how to employ Turf's API within a web browser (client), as well as within a Node environment (server) for processing larger and more complex datasets. The module's collaborative assignment challenges you and your class team member to use Turf to create a "hex map" of aggregated point data that will integrate with a coordinated visualization using D3.js.

### Technical guidance

- what is Turf.js and what geoprocessing tasks can we use it with Node to accomplish?
- how do we use Turf in the browser for simple processing?
- how do we use Turf with Node for larger geocomputational tasks?
- when do we run Turf in the browser vs. with a Node script?

### Collaborative task: Data pipelines for GeoVizualization

* end product: hex map of aggregated points with coordinated vizualization

Make the map using D3.js

### Module 04: Mapping big data with vector tiles

Module 04 introduces you to the next generation solution to mapping big data in a web environment: vector tiles. You'll learn about the open Mapbox Vector Tile Specification and how to create vector tiles from a variety of geospatial data sources. The module then covers techniques for loading vector data into Mapbox Studio, a browser-based design environment for creating and styling tilesets. The module's collaborative assignment challenges you and your class team member to create a new tileset and design a style from original data sources.

### Technical guidance

- what are vector tiles?
- what are the advantages of vector tiles over raster or GeoJSON?
- how do we make vector tiles?
- how do we styles vector tiles?
- how are vector tiles rendered in the browser?
- how do we host/serve vector tiles?
- for what things do we use Mapbox Studio?
- is raster dead or are there advantages to using raster?

### Collaborative task: Tiles and styles in Mapbox Studio

### Module 05: UX/UI design with Mapbox GL JS 

Module 05 explores the use of Mapbox GL JS, a JavaScript library for dynamically manipulating vector tiles and Mapbox styles within the client's browser. The module's collaborative assignment challenges you and your class team member to complete an original map using Mapbox GL JS and a range of useful plugins for expanding the native functionality of the library.

### Technical guidance


### Collaborative task: Expanding maps with plugins

- template: web mapping starter kit?
