# Technical Assignment Solution

## Links

- [Assignment Description](https://bitbucket.org/sensatmapp/angular-take-home-test-1/src/master/README.md)
- [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md)
- [@ngrx/store](https://ngrx.io/guide/store)
- [Google Maps](https://developers.google.com/maps/documentation)

## Technical Decisions

### Frameworks and libraries

`Angular CLI` provides a great number of instruments from code generation commands to testing, deployment etc. It provides powerful instruments to design your app. While your application is growing, you may divide its part by modules. Moreover, Angular.js is maid and maintained by Google, that ensures stable versions releases and high standards.

I decided to use `ngrx` store for managing data in my app. It's the best choice from the list of state management frameworks, as it's written specifically for Angular applications. Also, it's based on Redux pattern and RxJS library, and makes app's state immutable.

I wanted to save some time on creating the UI, so I used `angular material` components to display such elements as table, buttons, etc. It helped me to save time so I was able to complete extra tasks. Also, as I'm not a great designer, it helped me a lot to make my UI clean and user-friendly. As these modules are provided by angular, I was confident to them in my project.

In order to better navigate my app, I decided to use `@angular/router`. It helped to better structure my project in terms of displaying the source data. Moreover, it gives a user an ability to share a link to particular data he/she is observing.

While implementing one of the additional tasks, I picked `Google Maps` to display coordinates on the map. It looked as the most obvious choice for me, however, it took me a while to set up an API key for this service. It turned out that google requires now to create a separate project in google cloud platform and even set up a billing in account in order to use JavaScript Map API. However, I decided to stick with this approach.

### Structuring

I tried to move everything that could be reused by multiple components or modules to the services. It also helps with unit testing. As we need to make methods we are testing public, it's better to keep them in services. Otherwise, we will have a lot of public methods in components event if they are not used in the templates.

I structured the reducers directory in the most comfortable way for a possible future scaling of the store. As we never know how far a project is going to grow, it's better to make sure in advance that the store can be easily scaled.

### Improvements

- Cover all created components and services with tests. All of the spec files are already created.

- Add validation for app routes that contain `boxId` or `sensorId`. Make sure those ids are valid and exist in the app state.

- Create a service for constructing the router URLs. It will be more efficient and prevent developers from possible mistakes in router navigation methods.

- Use a real backend for fetching data required for a particular page. This will prevent the app from fetching unnecessary data and keeping it in the store.

- Finish all extra tasks

- Add an ability to add or edit existing sensors information.

- Update readings in a real-time using ws-protocol requests.

- Write a CI script and deploy the app on github pages

## How to run the project

You will need `Node.js: v12.16.3` and `Angular CLI: v10.1.7` to run this project.

Steps:

- Make sure you have the right version of node installed `node -v` (you can use nvm for an easy switching between the node versions)
- Install Angular CLI `npm install -g @angular/cli@10.1.7`
- Install project dependencies `npm install`
- Start the dev server `npm start`
- Navigate to `http://localhost:4200/`

## Functionality overview

### 1. The main page `/boxes`

The main page displays all of the boxes deployed on the field. You can observe their unique ids and the number of available readings for each box.

![Boxes list](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/boxes-list.png?raw=true)

From here you can you can navigate either to readings table `/boxes/{boxId}/readings` or sensors table `/boxes/{boxId}/sensors` available for each box.

Also you can click on the "Boxes map" button and observe all boxes locations on the map:

![Boxes map](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/boxes-map.png?raw=true)

### 2. Box's readings `/boxes/{boxId}/readings`

This page displays all readings made by all sensors for the particular box.

![Box all readings](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/box-all-readings.png?raw=true)

You can filter this data by sensor type using the selection component at the top of the page:

![Filter by sensor type](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/sensor-type-filter.png?raw=true)

You can sort the data at the table by clicking on either Type column title or TimeStamp column title:

![Sort by sensor type or time](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/sort-by-type-or-time.png?raw=true)

There is a bar at the bottom of the table that provides a pagination for the table.

### 3. Box's sensors `/boxes/{boxId}/sensors`

This page displays all sensors located in the particular box.

![Box sensors](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/box-sensors.png?raw=true)

From here you can you can navigate to sensor's readings page `/boxes/{boxId}/sensors/{sensorId}/readings` by clicking on the table rows.

### 4. Box sensor's readings `/boxes/{boxId}/sensors/${sensorId}/readings`

This page displays all readings from the particular sensor in the box.

![Box sensor readings](https://github.com/ndkrikun/sensor-monitoring/blob/master/docs/images/box-sensor-readings.png?raw=true)

This is a good place for plotting the graphic of readings changes during the period.
