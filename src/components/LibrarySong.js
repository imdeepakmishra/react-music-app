const LibrarySong = ({ song, songs, id, setCurrentSong }) => {
  const setSongHandler = () => {
    const setSong = setCurrentSong(song);
  };
  return (
    <div className="library-song" onClick={setSongHandler}>
      <img src={song.cover} alt=""></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
