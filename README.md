# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Tweeter uses Jquery to dynamically create HTML for new tweets, and AJAX to render them on the page without any interruption in user experience. The app also implements responsive design for desktop and mobile users.

The app features all of the stretch goals for the project. Namely a slide down tweet box to compose and submit new tweets, as well a button to scroll to the top of the page, that will fade in and out depending on window position. 

Tweeter also uses SASS to organize CSS, through the use of variables and mixins.



- Desktop Page
![Screenshot of desktop page](https://github.com/xsavoie/tweeter/blob/master/docs/tweeter-desktop.png?raw=true)

- Mobile Page
![Screenshot of mobile page](https://github.com/xsavoie/tweeter/blob/master/docs/tweeter-mobile.png?raw=true)

- Composing a New Tweet
![Screenshot of composing a new tweet](https://github.com/xsavoie/tweeter/blob/master/docs/new-tweet.png?raw=true)

- Submitted New Tweet
![screenshot of submitted new tweet, ft. scrollTop btn](https://github.com/xsavoie/tweeter/blob/master/docs/submitted-new-tweet.png?raw=true)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
