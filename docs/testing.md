# Testing

## Test Plan
A combination of testing methodologies aims to ensure that the application meets all functional and non-functional requirements.<br>
<br>
Below is a table of tests that will be run...<br>
<br>
| Test case     | Description   | Testing Approach | Prerequisites  | Test Data  |
| ------------- | ------------- | ---------------- | -------------- | -----------|
| UC1 -FR1.1    | The system should allow the user to find the nearest charger.| Manual testing | Access to the application, a browser with geolocation support|Testers' actual location coordinates
| UC1 - FR1.2   | The system should add markers for each charger on the map. | Automated unit testing  | Unit testing framework set up, map rendering functionality implemented|Mock charger data with known coordinates
| UC1 -FR1.3    | The system must query the database to get the charger coordinates.  | Automated unit and integration testing |Access to the database, database connection established| Mock charger data stored in the database
| UC1 - FR1.4   | The system should get permission to access user location via geolocation object. | Manual testing     |Access to the application, a browser with geolocation support| support	N/A (User interaction)
| UC2 -FR1.1    | The system should allow the user to find and filter chargers based on their type using UC2.  |Manual Testing| Access to the application, filtering functionality implemented|Testers' actual location coordinates, mock charger data
## Test Runs

Create a requirements traceability matrix to validate the completeness of the product.

| Use-Case ID | Requirement ID | Test Case | Status |
|-------------| -------------- | --------- | ------ |
|  UC1            |          |The system should allow the user to find the nearest charger|Pass|
|UC1 | |The system should add markers for each charger on the map |Pass|
|UC1 | |The system should get permission to access user location|Pass|
|UC1 | |The system must query the database to get the charger coordinates.|Pass|
|UC2 | |The system should allow the user to find and filter chargers based on their type|Not tested yet|
|UC3 | |The system should provide the user with link to directions to the charger using UC3|Not implemented yet|
|UC1 UC2 UC3 | |The source code should be accessable from GitHub (Maintainability).|Pass|
|UC1 UC2| |The app should return formatted data to the user within 5 seconds (Performance Efficiency).|Pass|
|UC1 UC2| |The app should work on different browsers e.g. Chrome and Safari. And the app should work on different types of devices e.g. Mobile and Desktop (Compatability).|Pass|



