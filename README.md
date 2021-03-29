## DESIGN

Landing page where players input names and land count
-  Limited to 60 land
-  One input for each land type
-  Valiation before game start
-  Start game button that will go to the actual game page
   -  Need to pass forward:
      -  Number of players
      -  Name and deck composition for each player

Game page
- Should contain one player interface for each player
  - Start with one for POC
  - Stretch: Add second instance with button to flip interface orientation vertically (e.g. for two players playing on a tablet)
Player Interface
- Life counter
  - Starts at 24
  - Increment and decrement buttons
- Battlefield zone to hold token creature cards
- Land zone to hold lands in play
- Library zone to hold land deck
  - Randomized at game start
  - Clicking should transfer card from libary to hand
  - Stretch: Tutor modal for when specific lands need to be searched out of deck
  - Stretch: Button to shuffle
- Hand zone to hold drawn lands
  - Clicking a land in the hand should transfer it to the land zone
- Mana pool tracker
  - Manually increment/decrement mana of each color + colorless via buttons
  - Clear pool button
  - Stretch: have tapping lands automatically add the correct mana to the pool
- Momir Vig button to call API and add token creature to battlefield
- Graveyard for discarded/destroyed lands
- Stretch: Create token modal
  - Inputs: Name, power, toughness, quantity, stretch: abilities
  - Ability to click a button to show modal where generated tokens (e.g. from Myr Battlesphere or Deranged Hermit) can be searched for and created
  - Should search API based on parameters and create N tokens where N is quantity


Reusable Components
- CardZone
  - Hand, Lands in Play, Battlefield
  - All cards face up
- CardStack
  - Library, Graveyard
  - Top card could be revealed or not
  - Clicking should expand contents to enable zone transfer
    - e.g. tutor: Library -> Hand or Oracle or Library -> Lands in Play
- PlayerInterface 
  - Replicated for each player

All Cards
- Click should toggle tap/untap and rotate the card image 90 degrees clockwise/counter-clockwise respectively
- Contain an image of the card
Token Creatures
- Need to have button that destroys on click
Land
- Need to be able to transfer from one zone to another
- Can have static front/back images for each basic land type


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
