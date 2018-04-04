# Design for Interactive Web Mapping

This course integrates the principles of geographic representation and web programming in order for students to develop high-quality interactive web maps. Students will design interactive web map projects that appropriately represent spatial data in order to serve end-user goals of map engagement and visual communication. The course will train students to compose interactive maps within the context of a coherent web page layout, including the development of supplementary content (such as text and metadata) to aid in visual storytelling.

## Lesson 01: Designing a mobile-first responsive web portfolio

The primary objective of this module is to guide you through creating a web portfolio for sharing all the fabulous maps you're creating in the New Maps Plus program. The lesson will introduce you to "responsive" design, which uses a "mobile-first" approach to ensure content displays optimally across browsers and devices of different sizes. We'll also explore the benefits and drawbacks of using an established CSS template or framework before moving on to employ Bootstrap for our purposes.


## Lesson 02: Toward Advanced User Interaction In Web Maps

In Module 9 of MAP672, we used an AJAX request to dynamically request a GeoJSON data file and load it into the script after the DOM had loaded. We then wrote functions to normalize and classify the data on the fly, appropriately color a choropleth map, and dynamically create a legend depicting the class ranges. Within this lesson, we extend this code to build a user interface (UI) element allowing the user to choose a new data attribute to dynamically update the map and legend.

* introduces Map Shaper client and command line for data preparation introduces the JQuery JavaScript library and DOM element selections
* instructs technique for asynchronously loading an external GeoJSON file using JQUERY/AJAX
* builds code allowing users to re-express the drawn data and update the legend using a UI widget
* utilizes more JQuery methods for the selection and manipulation of DOM elements
* considers layout options using CSS for visual enhancement of the user interface

## Lesson 03: Client-side data processing and UI enhancements

In previous modules, we used an asynchronous HTTP request to load our GeoJSON data into the script at runtime. Within this lesson, we consider a technique for making multiple asynchronous HTTP requests to load geometry and data into the map script as separate requests (i.e., separate files).

Once we do this, we use a nested looping structure to bind attribute data to geometries within the client's browser to create a choropleth map. We then build an HTML standards-compliant UI slider widget allowing the user to sequence through temporal data attributes and update the thematic map by dragging a slider widget.

* uses multiple asynchronous HTTP requests to load geometry and data into the map script
* builds nested looping structures to bind attribute data to geometries within the client browser at runtime
* builds a HTML standards-compliant UI slider widget allowing the user to sequence though temporal data attributes and update the thematic map
* considers additional UI adjustments to improve usability of the map

## Lesson 04: Mapping Workflow Part I – The User Experience

Modules 04 and 05 walk us through a typical web mapping process from start to finish. The goal is not to delineate the specific techniques one would always follow for making a web map, but rather to think through the design and development process at a more conceptual level. We want to highlight the points when design decisions are made and then about how to implement them technically when we build our web map.

* introduces user experience (UX) design through user-centered design, the use of personas and scenarios, and the element of the user experience
* considers the product objectives and user needs of an example case study
* covers the development of functional specifications and content requirements of a map product
* covers principles of applying interaction design and information architecture to map development (including data wrangling, building a boilerplate, and loading data into the map)

##  Lesson 05: Mapping Workflow Part II – Data Representation and Map Refinement

This lesson continues from Lesson 04 to guide us through a complete web mapping workflow. We left off in Lesson 04 with the data organized in a particular way and loaded into the script. The next step is to provide the code that will represent these data in a cartographically thematic way. However, choosing particular paths and moving forward through a mapping process does not always guarantee success.

* principles of cartographic interaction (what, why, when, to whom, where, and how)
* applying information design, interface design, and navigation design to map development
* developing a wireframe mockup and paper prototyping
* developing novel representation solutions
* providing user enablement to sequence through the data
* refining the sensory plane: CSS design


## Lesson 06: Web Mapping with CARTO.js
This lesson explores the JavaScript library supporting the CARTO Engine ecosystem, which expands the potential of CARTO's web editor for creating customized web maps and connects to their other mapping APIs and services.

* integrates a web-based database platform (CARTO) within the web mapping development and deployment process
* reviews extension of Leaflet’s API through the Cartodb.js library
* introduces CARTO's SQL library for querying data and updating a map
* integrates PostGIS functionality within a user-driven mapping scenario

## Lesson 07: Data-driven thematic web mapping with D3.js

D3 stands for Data-Driven Documents. It's a JavaScript library written by @mbostock, with the help of many other contributors. As Mike says:

> D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

In short, this means that you can take data and represent it within a web browser in all sorts of fun and effective ways.

* familiarizes students to D3.js through building a simple vector web map
* applies basic interaction to the D3 web map
* introduces queue.js for loading external files using AJAX
* introduces the TopoJSON data format
* plots point-level data from a CSV file
* creates a proportional symbol map from these points
* uses a range input slider to filter the data
* draws a projected choropleth map

## Lessons 08 – 10: Building your alpha map

MAP673 and the New Maps Plus Certificate culminate in an independent project of substantial work and quality. The goal of this final project is threefold:

* challenge you to synthesize a range of technical and conceptual knowledge gained throughout the New Maps Plus courses to produce a novel and effective web map
* provide you with a chance to procure your own data relating to a meaning topic of your choosing, and in doing so allow you to explore and experiment with additional mapping techniques not covered within course lessons
* give you a strong portfolio piece celebrating your skills and demonstrating your talent to employers, potential clients, and the wider geospatial community

Weekly deliverables include a written overview of the topic, a formal map proposal, a working prototype of the complete map, a beta version of the complete map (hosted and served over the web and available for peer review and critique), and the final map hosted within the student's personal web portfolio. Students also create a 5-minute video presentation of their beta map to share with their peers for a map critique exercise.
