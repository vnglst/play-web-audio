# Play Web Audio

## Install

```sh
yarn add play-web-audio
```

## Usage

```js
import { playAudio, loadAudioUrls } from 'play-web-audio'

let squakk
const soundUrls = ['./sounds/squakk.mp3']

loadAudioUrls(this.soundUrls, bufferList => {
  squakk = bufferList[0]
})

playAudio(squakk) // plays the audio file
/*
    N.B. on many devices autoplay is not allowed. In that case the play function must be initiated by a user interaction, i.e. a mouse click or finger tap.

*/
```

## Example

Demonstration of using the Web Audio API using React. See folder `example`. Try this on iPhone/Safari (iOS), playback is instant! Now compare it with the implementation using the `<audio>` HTML tag... long delay on iPhone.

Ergo: use the Web Audio API instead.

https://play-it.now.sh

## Credits

- Source sounds: https://freesound.org/people/yawfle/packs/367/
- More on Web Audio API: https://www.html5rocks.com/en/tutorials/webaudio/intro/#toc-play
- Even more on Web Audio API: https://css-tricks.com/introduction-web-audio-api/
