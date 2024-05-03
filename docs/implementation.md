# Implementation

## Introduction
FindByType.html utilises Bristol Open Data API and the Mapbox API to pinpoint nearby electric vehicle charging points. It presents charging points in a table which features name, location, model, and energy.


## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.
The main app is directed in the app folder. The index.html is the splash page. An experimental early version of the of the prototype can be found in the prototype folder.

├── app
│   ├── FindByDistance.html
│   ├── Index.html
│   └── FindByType.html
│   ├── script.js
│   └── StyleSheet.css
├── prototype
├── test
└── readme.md

## Software Architecture
The main app uses data from Bristol Open Data, and uses maps supplied by Mapbox. This is a service-orientated architecture.
![Insert your component Diagram here](images/EV2.png)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary
