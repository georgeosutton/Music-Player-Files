import React from "react";
import LibarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Libary</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            song={song}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
