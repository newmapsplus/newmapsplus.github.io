# MAP 672: Programming for Web Mapping

[NewMapsPlus.github.io](/)

## Course Description

This course introduces students to the fundamental concepts and techniques of web development and computer programming through web mapping. Students will become familiar with current web standards and proficient in manipulating the structural, stylistic and behavioral elements of web maps through programming. Students will translate these practices to achieve objectives in web cartography such as the display of a basemap, the thematic representation of data, and the employment of interaction to enhance visual communication and the presentation of information.

### Student Learning Outcomes

After completing this course, the student will be able to:

- Demonstrate proficiency in reading, writing, and debugging a programming language;
- Prepare a development environment suitable for producing web maps;
- Build a web map and interface using modern web standards;
- Integrate custom code with web mapping technology code libraries;
- Revise code to enhance a map and interface solution;
- Assess and apply online documentation to solve development problems;
- Use a distributed version control system (Git and GitHub) to retrieve, share, and distribute code and maps online; and
- Develop online web portfolios of code and related map products.

## General sketch of the topics and timeline

### Module 01: Learning Foundations of the Technology Stack: HTML, CSS, and JS

This lesson will provide you with an introduction to the foundational technology stack used in web map development. We will introduce you to 3 separate coding technologies (HTML, CSS, and JavaScript), which work together to produce a web page and map application. The module suggests that web map design is achieved using these three technologies to structure content (HTML), and give form (CSS) and behavior (JavaScript) to this content. Design is then the convergence of content, form, and behavior.

Additionally, we'll practice writing these technologies within our powerful text editor, Brackets, as well as using in browser development tools to inspect the Document Object Module (DOM) and debug our code.

* understanding the HTML document and Document Object Model (DOM)
* structuring content with HTML
* selecting and styling markup with CSS rules
* adding behavior with JavaScript
* using the in-browser development tools and JavaScript Console
* developing within a local host server environment


### Module 02: The Building Blocks of Programming: Statements, Expressions, Data Types, Operators, Variables, and Array Data Structures

In the previous module learned how to use HTML tags to structure our content within a webpage, and how to apply CSS style rules to modify the form of this content, or how that content looks (e.g., color, size, etc). These two elements, content and form, and the relationship between them, constitute two fundamental aspects of traditional design. Within the web environment we are able to introduce a third aspect to this classic understanding of design: that of behavior, which helps promote user interaction. In web mapping and web development in general today, the behavior of a web page or entities within it are controlled by the programming language JavaScript.

This module begins developing a foundation in computer programming using JavaScript. While we will quickly apply these practices to web mapping, you first need to gain an understanding of the basics of JavaScript, which can be largely applied to web development in general. If you already know a programming language, then you may find these easy to pick up, though you'll gain from learning the specific syntax with which we write JavaScript, as well as its nuances. If JavaScript is your first programming language, you'll be pleased to know that these programming fundamentals are not unique to JavaScript, but can be applied to the other programming languages as well.

* writing code: the atomic, building-block elements of JS programming:
  * statements
  * expressions
  * data types
  * operators
  * variables
* building and using an array data structure:
  * array construction
  * accessing array values
  * adding elements to arrays

### Module 03: JavaScript Control Structures

In the previous module, when we ran our script within our web browser (such as by hitting page refresh), our JavaScript executed from the top of the script to the bottom. This is to say, the "flow of program execution" moved in one direction, from top to bottom. However, often we want to interrupt this flow of execution in various ways. This is where the idea of control structures come into play. Within this lesson, we'll learn how we control of flow of our JavaScript program.

* understanding program flow
  * looping in JS programming
  * for loops
  * while loops
* conditional logic in JS programming (if/else statements)

### Module 04: JavaScript Functions

Often when we're programming, there are certain chucks of code (groups of JavaScript statements) that are all related and work together to accomplish specific functionality within the overall program. And often, we want to execute these at specific times, than once, or even repeatedly. Within this lesson, we'll learn how we make our programs more efficient through the use of functions. We'll first learn how we declare and define functions. Then we'll make functions more powerful by passing information to them and receiving information in return.

* mastering JavaScript functions:
  * declaring and calling custom functions
  * passing arguments and using function parameters
  * using return values
  * understanding function scope

### Module 05: JavaScript Objects and Methods

This lesson introduces you to another JavaScript data structure (a data type used for storing accessing, and updating various values): the JavaScript Object. You'll learn how to create these, populate them with key/value pairs, access these values, and update the object with new properties. We'll also learn how to loop through objects, as well as how objects make use of a special kind of function known as a method.

* using JavaScript objects:
  * creation of objects
  * accessing object properties
  * looping through a JavaScript object
  * using JavaScript methods (vs functions)

### Module 06: Introduction to Leaflet and Drawing SVG

This lesson will begin to get us acquainted with the Leaflet JavaScript mapping library. We'll learn how to read and understand the Leaflet API Reference documentation, which tells us how to access and use all the awesome Leaflet JavaScript functionality. We'll then work on creating a basic Leaflet map, including:

* providing initial options for how a map is displayed
* modifying these options after a map has been created
* providing a user with basic map interaction capabilities
* adding and switching between different tile set layers using a Leaflet map

Most importantly, we'll want to learn how Leaflet employs Scalable Vector Graphics (SVG) to draw representations of geographic features on a map.

* getting acquainted with the Leaflet JavaScript mapping library
* reading and understanding the Leaflet API Reference
* creating a basic Leaflet map, including:
  * providing initial options for how a map is displayed
  * modifying these options after a map has been created
  * providing a user with basic map interaction capabilities
  * adding and switching between different tile set layers using a * Leaflet map
* understanding how Leaflet employs SVG to draw features on a map
  * drawing Leaflet marker objects using options, events, and methods
  * drawing Leaflet's L.circle objects using options, events, and methods

### Module 07: Using GeoJSON Data

Within this lesson we sharpen our understanding of the GeoJSON specification and how data are encoded within it. We will use a useful web tool at http://geojson.io/ to create and display GeoJSON data, and then we'll use this GeoJSON-encoded data within Leaflet to draw new data layers. To better understand how to use GeoJSON in Leaflet, we go into more depth exploring the Leaflet options and methods available to a Leaflet GeoJson layer.

This week's lab will offer you a guided tutorial on storing GeoJSON data in an external file, loading it into the script, and representing those data thematically with Leaflet.

* understanding the GeoJSON specification and encoding data within it
* using geojson.io to create and display GeoJSON data
* using GeoJSON-encoded data within Leaflet to draw layers
* exploring the Leaflet options and methods available to a Leaflet GeoJson layer
* using external GeoJSON files in Leaflet
* storing GeoJSON data in an external file and loading into the script
* designing and developing a thematic proportional symbol map using Leaflet
* retrieving specific data values from point symbols

### Module 08: Mastering Leaflet's GeoJSON Methods and Layer Controls

This lesson continues our study of creating and using the Leaflet L.GeoJson object. Beyond the powerful options available when we create layers using this method (pointToLayer, filter, oneEachFeature), we're going to invoke Leaflet methods on layer groups and individual layers after creation. We'll create additional layers in support of making a bi-variate promotional symbol map. We'll also learn how to use a Leaflet layer control to manage multiple data layers, and practice setting universal styles and layer-specific styles using the L.GeoJson style option. We'll finish up by introducing some advanced techniques for code refactoring.

* creating and using Leaflet L.GeoJson layers
* using a layer control to manage multiple data layers
* setting universal styles and layer-specific styles using the L.GeoJson style option
* invoking Leaflet methods on layer groups and individual layers after creation
* creating a bi-variate map
* introduces advanced techniques for code refactoring and debugging

### Module 09: Creating a Dynamically Drawn Choropleth Map

This lesson will instruct you how to create a dynamically generated choropleth map in Leaflet with an accompanying legend. It also explains how to use the jQuery JavaScript library to load an external data file using AJAX.

* Using jQuery
* Dynamic loading data using jQuery's AJAX request
* Drawing data to the map
  * Choropleth mapping in Leaflet
  * Classifying data and coloring the map
* Scripting a Dynamic Legend for a Choropleth Map

### Module 10: Final project

As in MAP 671, let your creativity soar to new heights with a project of your choice. You will create an public, interactive mapping project in a new repository with a theme of your choice. Requirements will be detailed when the module is released.
