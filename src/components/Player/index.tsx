import { useContext } from 'react'
import Image from 'next/image'

import { PlayerContext } from '../../contexts/PlayerContext'

import styles from './styles.module.scss'

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)

  const episode = episodeList[currentEpisodeIndex]

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Playing now" />
        <strong>Playing now</strong>
      </header>
      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Choose one podcast to hear</strong>
        </div>
      )}
      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>45:30</span>
        </div>
        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Shuffle" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Play previous" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Play" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Play next" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repeat" />
          </button>
        </div>
      </footer>
    </div>
  )
}
