import React, { Component } from 'react'
import './App.css'
import { playAudio, loadAudioUrls } from 'play-web-audio'

class App extends Component {
  constructor(props) {
    super(props)
    const soundUrls = ['./sounds/squakk.mp3', './sounds/nock.mp3']
    loadAudioUrls(soundUrls, bufferList => {
      this.squakk = bufferList[0]
      this.nock = bufferList[1]
    })
  }

  playSquakk() {
    playAudio(this.squakk)
  }

  playNock() {
    playAudio(this.nock)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Web Audio API</h1>
        </header>
        <p className="App-intro">
          Demonstration of using the Web Audio API using React. Try this on
          iPhone/Safari (iOS), playback is instant!
        </p>
        <button
          onClick={() => {
            this.playSquakk()
          }}
        >
          Squakk
        </button>
        <button
          onClick={() => {
            this.playNock()
          }}
        >
          Nock
        </button>
      </div>
    )
  }
}

export default App
