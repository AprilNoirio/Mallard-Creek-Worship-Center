import { useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'mcwc_music_state';

const playlist = [
  {
    title: 'God Do It Again For Me',
    src: '/assets/God_Do_It_Again_For_Me.mp3'
  },
  {
    title: 'God You Are So Good',
    src: '/assets/God_You_Are_So_Good.mp3'
  },
  {
    title: 'Still I Praise You',
    src: '/assets/Still_I_Praise_You.mp3'
  },
  {
    title: 'Healed By Your Grace - Tina Grace Music',
    src: '/assets/Healed_By_Your_Grace_Tina_Grace_Music.mp3'
  }
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

function readSavedState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function BackgroundMusic() {
  const audioRef = useRef(null);
  const saveTimerRef = useRef(null);
  const restoreStateRef = useRef(null);
  const isMutedRef = useRef(false);
  const requiresInteractionRef = useRef(false);
  const hasInteractedRef = useRef(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const [requiresInteraction, setRequiresInteraction] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const activeTrack = useMemo(() => playlist[trackIndex], [trackIndex]);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.preload = 'auto';

    const saved = readSavedState();
    const initialIndex =
      saved && Number.isInteger(saved.trackIndex) && saved.trackIndex >= 0 && saved.trackIndex < playlist.length
        ? saved.trackIndex
        : 0;
    const initialVolume =
      saved && typeof saved.volume === 'number' && saved.volume >= 0 && saved.volume <= 1 ? saved.volume : 0.65;
    const initialMuted = Boolean(saved?.muted);
    const initialMinimized = Boolean(saved?.minimized);
    const initialRequiresInteraction = Boolean(saved?.requiresInteraction);
    const initialHasInteracted = Boolean(saved?.hasInteracted);

    restoreStateRef.current = saved;
    audio.volume = initialVolume;
    audio.muted = initialMuted;

    setTrackIndex(initialIndex);
    setVolume(initialVolume);
    setIsMuted(initialMuted);
    setIsMinimized(initialMinimized);
    setRequiresInteraction(initialRequiresInteraction);
    hasInteractedRef.current = initialHasInteracted;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      if (restoreStateRef.current?.time) {
        const seekTime = Math.min(restoreStateRef.current.time, audio.duration || restoreStateRef.current.time);
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
        restoreStateRef.current = null;
      } else {
        setCurrentTime(audio.currentTime || 0);
      }
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onPlay = () => {
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      setTrackIndex((index) => (index + 1) % playlist.length);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      if (saveTimerRef.current) {
        window.clearInterval(saveTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    requiresInteractionRef.current = requiresInteraction;
  }, [requiresInteraction]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = activeTrack.src;
    audio.load();

    const tryAutoplay = async () => {
      try {
        audio.muted = hasInteractedRef.current ? isMutedRef.current : true;
        await audio.play();
        setRequiresInteraction(!hasInteractedRef.current);
      } catch {
        try {
          audio.muted = true;
          await audio.play();
          setRequiresInteraction(true);
        } catch {
          setRequiresInteraction(true);
        }
      }
    };

    tryAutoplay();
  }, [activeTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted || requiresInteraction;
  }, [volume, isMuted, requiresInteraction]);

  useEffect(() => {
    if (saveTimerRef.current) {
      window.clearInterval(saveTimerRef.current);
    }

    saveTimerRef.current = window.setInterval(() => {
      const audio = audioRef.current;
      if (!audio) return;
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          trackIndex,
          time: audio.currentTime,
          volume,
          muted: isMuted,
          minimized: isMinimized,
          requiresInteraction,
          hasInteracted: hasInteractedRef.current
        })
      );
    }, 1000);

    return () => {
      if (saveTimerRef.current) {
        window.clearInterval(saveTimerRef.current);
      }
    };
  }, [trackIndex, volume, isMuted, isMinimized, requiresInteraction]);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      hasInteractedRef.current = true;
      setRequiresInteraction(false);
      audio.muted = isMutedRef.current;
      await audio.play();
    } catch {
      setRequiresInteraction(true);
    }
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const goToTrack = (nextIndex) => {
    setTrackIndex((nextIndex + playlist.length) % playlist.length);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <aside
      className={`music-player glass-card ${isMinimized ? 'music-player-minimized' : ''}`}
      aria-label="Background worship music player"
    >
      {isMinimized ? (
        <>
          <div className="mini-player">
            <div className="mini-player-summary">
              <span className="mini-player-icon" aria-hidden="true">
                ♪
              </span>
              <div className="mini-player-text">
                <strong>{activeTrack.title}</strong>
                <span>{isPlaying ? 'Now Playing' : 'Paused'}</span>
              </div>
            </div>
            <div className="mini-player-actions">
              {isPlaying ? (
                <button className="nav-icon primary" type="button" onClick={pause} aria-label="Pause music">
                  Pause
                </button>
              ) : (
                <button className="nav-icon primary" type="button" onClick={play} aria-label="Play music">
                  Play
                </button>
              )}
              <button
                className="nav-icon player-collapse-button"
                type="button"
                onClick={() => setIsMinimized(false)}
                aria-label="Expand music player"
              >
                ^
              </button>
            </div>
          </div>

          {requiresInteraction ? (
            <button className="btn music-start music-start-compact" type="button" onClick={play}>
              Enable Worship Audio
            </button>
          ) : null}
        </>
      ) : (
        <>
          <div className="player-head">
            <div className="player-title-wrap">
              <strong>{activeTrack.title}</strong>
              <span>Persistent worship playlist</span>
            </div>
            <div className="player-head-actions">
              <span className="player-badge">{isPlaying ? 'Now Playing' : 'Paused'}</span>
              <button
                className="nav-icon player-collapse-button"
                type="button"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize music player"
              >
                -
              </button>
            </div>
          </div>

          <div className="player-progress">
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="1"
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              aria-label="Seek current track"
            />
          </div>

          <div className="player-controls">
            <div className="player-buttons">
              <button className="nav-icon" type="button" onClick={() => goToTrack(trackIndex - 1)} aria-label="Previous track">
                Prev
              </button>
              {isPlaying ? (
                <button className="nav-icon primary" type="button" onClick={pause} aria-label="Pause music">
                  Pause
                </button>
              ) : (
                <button className="nav-icon primary" type="button" onClick={play} aria-label="Play music">
                  Play
                </button>
              )}
              <button className="nav-icon" type="button" onClick={() => goToTrack(trackIndex + 1)} aria-label="Next track">
                Next
              </button>
            </div>
            <span className="player-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="player-volume">
            <button
              className="nav-icon"
              type="button"
              onClick={() => setIsMuted((muted) => !muted)}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              aria-label="Volume control"
            />
          </div>

          {requiresInteraction ? (
            <button className="btn music-start" type="button" onClick={play}>
              Enable Worship Audio
            </button>
          ) : null}
        </>
      )}
    </aside>
  );
}

export default BackgroundMusic;
