# chart-js-example

> A static website powered by [React.js](http://facebook.github.io/react/)
> and [Webpack](http://webpack.github.io/).

### Features

&nbsp; &nbsp; ✓ Displays a list of User Cards retrieved from `users.json`<br>
&nbsp; &nbsp; ✓ Each card has the user's avatar, name, and occupation<br>
&nbsp; &nbsp; ✓ Each card has the sum of all conversions, impressions, and revenue collected from `logs.json`<br>
&nbsp; &nbsp; ✓ If an avatar isn't found, the first letter of the person's name is displayed instead (Works mostly)<br>
&nbsp; &nbsp; ✓ Uses SCSS instead of vanilla CSS<br>
&nbsp; &nbsp; ✓ Uses Facebook React for building the user interface<br>
&nbsp; &nbsp; ✓ Bundled and optimizated with Webpack<br>
&nbsp; &nbsp; ✓ Deploys easily to GitHub pages<br>

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /components/                # React components
├── /lib/                       # Libraries and utilities
├── /pages/                     # React.js-based web pages
│   ├── /about.js               # About Us page
│   └── /index.js               # Home page displaying the User Cards
├── /static/                    # Static files such as favicon.ico etc.
├── /tools/                     # Build automation scripts and utilities
│── app.js                      # The main JavaScript file (entry point)
│── config.js                   # Website configuration / settings
│── LICENSE.txt                 # License file
│── package.json                # Dev dependencies and NPM scripts
└── README.md                   # Project overview
```

### Getting Started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone https://github.com/osidenate/chart-js-example.git 
$ cd MyApp
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to GitHub Pages
```
