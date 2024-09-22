# @zenith-game/react-console

A React component that runs a Zenith text adventure game disc in a custom browser-based console.

## How to Use

It's pretty simple - you need to install the library as a runtime dependency:

```shell
npm i @zenith-game/react-console
yarn add @zenith-game/react-console
pnpm add @zenith-game/react-console
```

Then you need to have a Zenith game disc to load into the component. It won't work without a game disc! Make your own, or find a game that's been published.

Once you have the `ZenithConsole` component and your game disc, it's super easy to set up the component in your project.

> Important: Make sure you import the `ZenithConsole` CSS into your page!

Here's an example if you wanted to create a reusable template for loading different games on different pages:

```jsx
// GamePageTemplate.tsx
import { ZenithConsole } from '@zenith-game/react-console';
import '@zenith-game/react-console/dist/index.css';

function GamePageTemplate({ gameDisc }) {
    return <ZenithConsole gameDisc={gameDisc} />
}

// SolitairePage.tsx
import { GamePageTemplate } from '../templates';
import { SolitaireDisc } from '../games';

function SolitairePage() {
    return <GamePageTemplate gameDisc={SolitaireDisc} />;
}
```

Here's an example without the reusable template:

```jsx
// SolitairePage.tsx
import { ZenithConsole } from '@zenith-game/react-console';
import { SolitaireDisc } from '../games';
import '@zenith-game/react-console/dist/index.css';

function SolitairePage() {
    return <ZenithConsole gameDisc={SolitaireDisc} />;
}
```
