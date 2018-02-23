
# MAP671 - Introduction to New Mapping

## General sketch of the topics and timeline.

## Course Description

This course introduces students to both the social and technical aspects of digital mapping in the 21st century. Students will learn fundamental concepts and techniques in cartography and GIS, including file types, spatial databases, data manipulation, projections and coordinate reference systems, and analytical and spatial analysis techniques in a range of desktop, server, and web-based mapping platforms. In addition to providing the fundamental technical competencies necessary to create maps, students will develop the critical awareness required to effectively communicate complex social processes through maps.

## Course Objectives

After completing this course, the student will be able to:

* Learn a modern workflow for managing information-based projects
* Define and differentiate between variety of spatial data models and formats
* Explain and apply the basics of representation in GIS, including using vector and raster data formats, determining appropriate coordinate reference system for a given spatial data file and applying the appropriate projection to a mapping project
* Manipulate datasets (e.g. cleaning, joining, querying, extracting) using tool-based workflow and a spatial database workflow using Structured Query Language (SQL)
* Apply appropriate thematic map symbology to represent geographic phenomena
* Produce static map products that integrate multiple data types and analytical methods and publish those to a base web page
* Obtain geospatial data from a variety of online sources and integrate into mapping processes
* Integrate desktop GIS procedures and spatial databases with web-based mapping platforms

## Weekly Schedule

### Module 01: Setting up a Modern Mapping Environment and Workflow

As almost all the software involved in a modern web mapping workflow involves text-based files (data formats and coded scripts), the essential tools for a web mapper make handling these text files as easy as possible. In this lesson we will introduce two specific programs we'll be using throughout this course and beyond, and the process for using them.

* We'll begin with installing a code/text editor like [Atom](https://atom.io), [Brackets](https://brackets.io), or [Visual Studio Code](https://www.visualstudio.com/).
* [Git](https://git-scm.com/) and [GitHub](https://github.com/). Git itself is what's known as a "distributed version control system." It records changes to the various files in your project (a "repository" or "repo" for short, in Git speak) as you progress through your work. This allows you to track different versions and, if (or when!) you mess up, go back to a previous version. Git also facilitates better collaboration on web projects. GitHub is the web-based social platform for using Git and managing remote repositories.

This lesson will familiarize you with using these tools and establish a workflow we'll be using throughout the course and program:

* Installing a text editor
* Managing file/directory structures
* Installing and using a distributed version control system (GitHub)
* Getting to know the 'git' workflow:
  * creating remote repositories
  * cloning remote repos to your local machine
  * adding & changing files
  * making & reverting commits
  * syncing with remote (github.com) repositories
* Creating and publishing a basic web map


### Week 02: Introduction to New Maps Plus, Cartography and GIS, and Creating Maps in QGIS

This week provides a quick background discussion of cartography, mapping, and GIS. Our goals are to install our mapping toolkit containing QGIS and PostGIS, build a spatial database, and learn how to manage and prepare data for mapping,

* Gain a basic conceptual understanding of cartography, GIS, and mapping
* Gain familiarity with geographic data and information, and how it's encoded within computer files
* Install our main open-source GIS applications, [QGIS](https://qgis.org) and [PostGIS](https://postgis.net/)
* Gain a basic familiarity with the QGIS interface and creating spatial database queries in PostGIS using [SQL](https://www.w3schools.com/sql/)
* Gain awareness of spatial reference and projection issues
* Practice opening a variety of geographic data with QGIS and viewing their attributes within QGIS
* Query and extract data to a common web mapping format, the [GeoJSON](http://geojson.org/)
* Create and export a basic map as a static image file

### Week 03: Creating and Publishing Map Layouts

After we build mapping foundation, we publish our first static map to a web page. This is classic cartography.

* Gain applied understanding of map making and cartography
* Practice opening a variety of geographic data with QGIS and viewing their attributes within QGIS
* Perform basic map styling for different data types
* Create a thematic map that graduate the size of features based on attributes
* Learn the basic set of map elements that should be included in a map layout
* Create and export a map layout as a static image file
* Publish a web page that displays this static image file

### Week 04: Thematic Data Mapping With Table Joins

We explore table joins and a common analysis technique using quantitative, numerical data, the [choropleth map](https://en.wikipedia.org/wiki/Choropleth_map).

* Learn how to manipulate and classify feature attributes to properly symbolize them
* Identify and load a proper coordinate reference system (CRS) that uses an equal-area projection
* Create choropleth map or normalized data
* Adjust the legend to help the map tell a more clear story
* Load tabular CSV data into QGIS and performing a tabular join in PostGIS

### Module 05: Spatial Joins, Hex binning and Heat Mapping

Big data is increasingly available to download and use. The module focuses on massive point-level dataset and explores analysis techniques for their thematic representation in PostGIS.

* Map point data using the unique symbology and layering methods in QGIS
* Aggregate point data by polygons, a spatial join, and perform summary statistics on aggregated data
* Tesselate a hexagon grid of equally sized polygons to aggregate point data
* Perform kernel density function to produce raster heat maps
* Use PostGIS functions to intersect and aggregate features

### Module 06: Georeferencing Imagery and Digitizing New Vector Features

We'll explore process of georeferencing an image (either aerial, satellite, or a static image) to align it to real-world locations. In our lesson, we'll use a picture from a tethered balloon. A georeferenced image can be used as a raster layer in our GIS. The module explores techniques for creating and editing new vector geometries using this imagery.

* Load new base maps from third-party sources
* Use the GDAL Georeferencer to create new spatial data
* Create new vector features by digitizing and edit features in QGIS

### Module 07: OpenStreetMap Data, Geoprocessing Tools, and Publishing Raster Tiles

We explore how to harvest spatial data from [OpenStreetMap](https://www.openstreetmap.org) (OSM) perform spatial analysis using the geoprocessing functions like buffer, intersect, and union. We'll develop rule-based symbology to create a tiled web map in QGIS.

* Introduce the OpenStreetMap project
* Import OpenStreetMap with the QuickOSM plugin
* Apply rule-based symbology to OSM data that changes with scales
* Use geoprocessing tools to and find measure features within distance of other Features
* Ouptut a simple tiled web map from QGIS using the QTiles plugin


### Module 08: Integrating QGIS with CARTO

In this module we move away from purely-desktop GIS operations to the exciting land of the web and web mapping. We introduce a key player in the web mapping world: [CARTO](https://CARTO.com)

* Creating a CARTO account and exploring the documentation and interface
* Loading data into CARTO
* Using the QGIS CARTO plugin
* Pulling data down into QGIS for processing
* Pushing data back up to CARTO
* Making a thematic map in CARTO


### Module 09: Advanced Mapping Techniques with QGIS and CARTO

This lesson continues our exploration of CARTO. We'll use CARTO to symbolize point-level data of US Greenhouse Gas emissions as Graduated Symbols and use SQL in more depth. We'll then explore possibilities for bringing in another data layer and adjusting the visibility of these layers as the user zooms in and out of the map.

* Using SQL in CARTO
* Symbolizing point data and "Bubble Maps" in CARTO
* Creating an unclassed proportional symbol map in CARTO
* Using SQL and PostGIS to perform geoprocessing tasks in the browser

### Module 10: Final project

Let your creative spirit fly with a project of your choice. You will create q new mapping using a theme of your choice and publishing it to the web.
