# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.
Testing for the Car Charger Finder application will utilise both manual and automated approaches to ensure comprehensive coverage. Manual testing will involve real user scenarios to validate features like finding the nearest charger and filtering based on type. Automated testing will focus on unit tests for specific functions and integration tests to ensure seamless component interaction. Performance, compatibility, and security testing will also be conducted to assess efficiency, cross-device functionality, and system robustness. This combination of testing methodologies aims to ensure that the application meets all functional and non-functional requirements, providing users with a reliable and user-friendly experience.<br>
<br>
Below is a table of tests that will be run...<br>
<br>
| Test case     | Description   | Testing Approach | Prerequisites  | Test Data  |
| ------------- | ------------- | ---------------- | -------------- | -----------|
| UC1 -FR1.1    | The system should allow the user to find the nearest charger.| Manual testing | Access to the application, a browser with geolocation support
| UC1 - FR1.2   | The system should add markers for each charger on the map. | Automated unit testing  | Unit testing framework set up, map rendering functionality implemented
| UC1 -FR1.    | The system must query the database to get the charger coordinates.  | Automated unit and integration testing |
| UC1 - FR1.2   | The system should get permission to access user location via geolocation object. | Manual testing     |
| UC2 -FR1.1    | The system should allow the user to find and filter chargers based on their type using UC2.  | Content Cell     |
| UC1 - FR1.2   | Content Cell  | Content Cell     |
## Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.

| Use-Case ID | Requirement ID | Test Case | Status |
| UC1         | -------------- | --------- | ------ |

TODO: Add rows for each test, current status is eg. pass/fail
