# Implementation

## Introduction

INDEX.html is the landing page and provides an entry point to the application along with a small description of the app and how to navigate it.
FindNearestCharger.html utilises Bristol Open Data API and the Mapbox API to pinpoint nearby electric vehicle charging points. It presents charging points in a table which features name, location, model, and energy.
FilterCharger.html collects user input to filter charger results. It asks for charger type, speed and availability then saves user input so what when "NEXT" is clicked the FilterByType.html page provides filtered charger results.
FilterByType.html uses the same method as FindNearestCharger and provides table of EV charging points; filtering out locations which are not to the users needs (as specified on the previous FilterCharger.html page).
The dataset is obtained from the Bristol Open Data API. Unecessary information regarding electric vehicle charging points are filtered out.


## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.
In the "App" directory of the project, we have several files dedicated to facilitating users in finding electric vehicle charging stations conveniently. "FilterCharger.html" enables users to filter charging stations based on their preferences, while its corresponding stylesheet "FilterChargerStyle.css" ensures a visually appealing interface. Similarly, "FindNearestCharger.html" assists users in locating the nearest charging stations, with its associated stylesheet "FindNearestChargerStyle.css" providing the necessary visual design. These files collectively form the user interface components of the application, streamlining the process of accessing electric vehicle charging infrastructure. Additionally, "INDEX.html" serves as a landing page, providing users with an entry point to the application.

├── app<br>
│   ├── INDEX.html<br>
|   ├── INDEXstyle.css<br>
│   ├── FindNearest.html<br>
|   ├── FindNearestStyle.css
│   ├── FilterPage.html<br>
│   ├── FilterPageStyle.css<br>
│   ├── FindByType.html<br>
|   └── FindByTypeStyle.css<br>


## Software Architecture
The main app uses data from Bristol Open Data, and uses maps supplied by Mapbox. This is a service-orientated architecture.
![Insert your component Diagram here](images/EV2.png)

## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary
