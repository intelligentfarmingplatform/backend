## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

You can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── README.md
├── CHANGELOG.md
├── babel.config.js
├── cypress.json
├── jest.config.js
├── now.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vuetify.svg
│   ├── components
│   │   └── base
│   │       ├── Card.vue
│   │       ├── Item.vue
│   │       ├── ItemGroup.vue
│   │       ├── ItemSubGroup.vue
│   │       ├── MaterialAlert.vue
│   │       ├── MaterialCard.vue
│   │       ├── MaterialChartCard.vue
│   │       ├── MaterialSnackbar.vue
│   │       ├── MaterialStatsCard.vue
│   │       ├── MaterialTabs.vue
│   │       ├── MaterialTestimony.vue
│   │       ├── Subheading.vue
│   │       └── VComponent.vue
│   ├── i18n.js
│   ├── locales
│   │   └── en.json
│   ├── main.js
│   ├── plugins
│   │   ├── base.js
│   │   ├── chartist.js
│   │   ├── vee-validate.js
│   │   └── vuetify.js
│   ├── router.js
│   ├── sass
│   │   ├── main.scss
│   │   ├── overrides.sass
│   │   └── vuetify-material
│   │       └── _sidebar.sass
│   ├── store.js
│   └── views
│       └── dashboard
│           ├── Charts.vue
│           ├── Dashboard.vue
│           ├── Index.vue
│           ├── Widgets.vue
│           ├── component
│           │   ├── Buttons.vue
│           │   ├── Grid.vue
│           │   ├── Icons.vue
│           │   ├── Notifications.vue
│           │   ├── Tabs.vue
│           │   └── Typography.vue
│           ├── components
│           │   └── core
│           │       ├── AppBar.vue
│           │       ├── Drawer.vue
│           │       ├── Footer.vue
│           │       ├── Settings.vue
│           │       └── View.vue
│           ├── maps
│           │   └── GoogleMaps.vue
│           ├── pages
│           │   └── UserProfile.vue
│           └── tables
│               └── RegularTables.vue
├── tests
│   ├── e2e
│   │   ├── plugins
│   │   │   └── index.js
│   │   ├── specs
│   │   │   └── test.js
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├── vue.config.js
```
