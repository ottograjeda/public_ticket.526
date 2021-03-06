React-Native Monorepo: SimpleAuth
=================
"SimpleAuth" is sample code of authentication for web or app platforms.

This is upgrade work to [another monorepo](https://github.com/og-pr/public_ticket.524). The repos are examples for how to share code between different platforms (Web, Android, & iOS). They can be used as a template or starter-kit for React-Native & React-Native-Web. The key to code sharing is React-Native's [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions). The extensions are ```.native.js``` , ```.ios.js``` or ```.android.js``` and when used, the relevant platform file is compiled.

The main benefit of any monorepo is to share application logic. Another benefit is the rendering of individual components unique to each platform. Development is mobile-first AND then webapp.

Installation
============

* Get the repo
* From root directory, do ```yarn```
* Change root/android/local.properties as needed 
* From root/ios directory, do ```pod install``` (if needed)


**Required:** React-Native working per [Getting Started](https://facebook.github.io/react-native/docs/getting-started). If using React-Native ^0.60 , 
make sure    
you review the [blog post](https://facebook.github.io/react-native/blog/2019/07/03/version-60) & use the [upgrade guide](https://react-native-community.github.io/upgrade-helper/?from=0.59.8&to=0.60.4). As notes in those links, update these files
* Change root/android/build.gradle as needed 
* Change root/android/app/build.gradle as needed 
* Change root/android/gradle.properties as needed
* etc

Run
===

For each platform, from the root directory, do

### Web
* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --port 3001 --inline --hot --colors```
* Manually open a browser to localhost:3001 to see webapp 
* Inspect browser window = open console to see shared code working on button click

### Android
* ```react-native run-android -- --clear-cache```

### iOS
* ```react-native run-ios``` or open ```ios/SimpleAuth.xcodeproj``` with Xcode

Animated GIFs
===========
![Animated GIF - iOS](https://github.com/og-pr/public_ticket.526/blob/master/SimpleAuth/_docs/ezgif-720_ios.gif)
![Animated GIF - Web](https://github.com/og-pr/public_ticket.526/blob/master/SimpleAuth/_docs/ezgif-720_web.gif)
![Animated GIF - Android](https://github.com/og-pr/public_ticket.526/blob/master/SimpleAuth/_docs/ezgif-720_android.gif)



Notes - Development
===========
* To keep code simple, [Email verification](https://firebase.googleblog.com/2017/02/email-verification-in-firebase-auth.html) not used 
* Button is common CSS ; it is not a React Component
* [React Router](https://github.com/ReactTraining/react-router) aka 1 package used as Navigational Components 
* Social Logins for [web](https://www.robinwieruch.de/react-firebase-link-social-logins/) & [mobile](https://medium.com/@chrisbianca/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91)  and [Password Resets](https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password) , left as exercise to repo user
* Form Input Error checking is basic ; repo user can refactor for [web](https://codeburst.io/how-to-use-html5-form-validations-with-react-4052eda9a1d4) & [mobile](https://codeburst.io/react-native-and-forms-part-2-555ee4571550) as needed
* LocalStorage API for [Web](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) & Async-Storage API for [Mobile](https://github.com/react-native-community/async-storage) used in Firebase & Session Components

Notes - Miscellaneous 
=====
* Lerna or Yarn Workspaces is not used ; there is only 1 ```node_modules``` folder.
* To make code easy to use & follow, Redux is omitted. React state is used for [web](https://reactjs.org/docs/faq-state.html) / [mobile](https://facebook.github.io/react-native/docs/state).

Inspiration
===========
* [A Firebase in React Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/) (is for Web)
* [Integrating Firebase with React Native](https://blog.jscrambler.com/integrating-firebase-with-react-native/) (is for Mobile)

