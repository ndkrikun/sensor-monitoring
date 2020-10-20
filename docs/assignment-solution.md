# Technical Assignment Solution

## Links

- [Assignment Description](https://bitbucket.org/sensatmapp/angular-take-home-test-1/src/master/README.md)
- [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md)
- [@ngrx/store](https://ngrx.io/guide/store)
- [Google Maps](https://developers.google.com/maps/documentation)

## Technical Decisions

### Frameworks and libraries

`Angular CLI` provides a great number of instruments from code generation commands to testing, deployment etc. It provides powerful instruments to design your app. While your application is growing, you may divide it's part by modules. Moreover, Angular.js is maid and maintained by Google, that ensures stable versions releases and high standards.

I decided to use `ngrx` store for managing data in my app. It's a best choice from the list of state management frameworks, as it's written specifically for Angular applications. Also, it's based on Redux pattern and RxJS library, and makes app's state immutable.

I wanted to save some time on creating the UI, so I used `angular material` components to display such elements as table, buttons, etc. It helped me to save time so I was able to complete extra tasks. Also, as I'm not a great designer, it helped me a lot to make my UI clean and user-friendly. As these modules are provided by angular, I was confident to them in my project.

In order to better navigate my app I decided to use `@angular/router`. It helped to better structure my project in terms of displaying the source data. Moreover, it gives a user an ability to share a link to particular data he/she is observing.

While implementing one of the additional tasks, I picked `Google Maps` to display coordinates on the map. It looked as the most obvious choice for me, however it took me a while to set up an API key for this service. It turned out that google requires now to create a separate project in google cloud platform and even set up a billing in account in order to use JavaScript Map API. However, I decided to stick with this approach.

### Structuring

I tried to move everything that could be reused by multiple components or modules to the services. It also helps with unit testing. As we need to make methods we are testing public, it's better too keep them in services. Otherwise, we will have a lot of public methods in components event if they are not used in the templates.

I structured reducers directory in the most comfortable way for a possible future scaling of the store. As we never now how far a project is going to grow, its better to make sure in advance that it's ready for scaling.

### Improvements

- Cover all created components and services with tests. All of the spec files are already created.

- Add validation for app routes that contain `boxId` or `sensorId`. Make sure those ids are valid and exist in the app state.

- Create a service for constructing the router urls. It will be more efficient and prevent developers from possible mistakes in router navigation methods.

- Use a real backend for fetching data required for a particular page. This will prevent the app from fetching unnecessary data and keeping it in the store.

- Finish all extra tasks

- Add an ability to add or edit existing sensors information.

- Update readings in a real time using ws-protocol requests.

- Write a CI script and deploy the app on github pages

### How to run the project

You will need Angular CLI version `Angular CLI: v10.1.7` and `Node: v12.16.3` to run this project.

#### Steps

- Make sure you have the right Node.js version
- `npm install -g @angular/cli@10.0.7`
- `npm install`
- `npm start`
- Navigate to `http://localhost:4200/`

## Functionality overview

### Main page

The main page `/boxes` displays all of the boxes deployed on the field. You can observe their unique ids and the number of available readings for each box.

From here you can you can navigate either to readings table `/boxes/{boxId}/readings` or sensors table `/boxes/{boxId}/sensors` available for each box.

Also you can click on the button and observe all boxes locations on the map:
