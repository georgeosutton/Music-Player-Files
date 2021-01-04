import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  currentSong,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        song.id === currentSong.id ? "selected" : ""
      } `}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
