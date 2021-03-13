# CHARITY FINDER

:construction: This application is under construction. :construction:

#### Description:

A website that provides a charity finder that uses the GlobalGiving.org public API to find nonprofit projects around the world that have as the main objective do good.

[GlobalGiving](https://globalgiving.org) is a global nonprofit that supports other nonprofits by connecting them to donors and companies.

#### GlobalGiving Public API

In folder `./src/config` we have the auth.ts.model file that provides a template where each programmer can put his GlobalGiving API credentials. After this, that file must be saved as auth.ts.


#### UI Components

In `./src/components` folder we have three components:

- Modal: This is a modal screen to use with warnings and things like that. In this project, I'm using this component until now only to show a welcome message.
- Pagination: Is a pagination component implemented using the Material-UI Pagination component.
- ResultCard: This is a simple card to show project information using the Material-UI Card component.


#### Countries List

Countries list is provided by a local JSON on `./src/data` folder. Basically, the file contains a list of countries with their names and a two-size geocode. The two-size geocode is used in the project searches.

#### Hooks

In this project we have three hooks:

- useAuth: Provides API authentication and gets the access token.
- useModal: Provides integration and state share with the Modal component.
- useSearch: Provides methods to prepare search controls (country/theme).

#### API Integration with Axios

In this project, we are using Axios library to provide integration with the GlobalGiving API. In the file `./src/services/api.ts` we have:

- A list of services provides by GlobalGiving API that has different objectives in terms of what kind of information they will return.
- A method that creates an Axios instance and sets up the base URL according to the service that you want to use.

#### Pages

This project is a single-page application, you will find only one page in `./src/pages/Home`.

Basically, this page is divided into three big parts:

- Header: To show the logo.
- Content: Divided into search controls, results, and pagination.
- Footer: Authoring and contact information.

#### Responsiveness

This project was built in the beginning using the "mobile-first" concept, which means that the layout was thought of using first the smallest interfaces. The objective was to keep good responsiveness for all kinds of devices, in special for mobile.

#### Things TODO

- General code refactor on the Home page to reduce the code lines and keep it simple.
- Componentize search block.
- Create a new option where users can filter Projects by Organization.
- Migrate to a Next.js project.
- Eliminate inline styles and create more UI components.
