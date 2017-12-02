// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyC82IgL_OfUOOIGQ1hAsrAfVvD6ALkw34Q",
    authDomain: "machos-meetup.firebaseapp.com",
    databaseURL: "https://machos-meetup.firebaseio.com",
    projectId: "machos-meetup",
    storageBucket: "machos-meetup.appspot.com",
    messagingSenderId: "372475489039"
  }
};
