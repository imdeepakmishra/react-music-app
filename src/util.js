import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Aabaad Barbaad",
      cover:
        "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1808029649.jpg",
      artist: "Arijit Singh",
      id: uuidv4(),
      active: true,
      audio:
        "https://pagalsong.in/uploads/systemuploads/mp3/Ludo/Aabaad%20Barbaad%20-%20Ludo%20128%20Kbps.mp3",
      color: ["#F8EBCA", "#77340C"],
    },
    {
      name: "Hardum Humdum",
      cover:
        "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1931719253.jpg",
      artist: "Arijit Singh",
      id: uuidv4(),
      active: true,
      audio:
        "https://pagalsong.in/uploads/systemuploads/mp3/Ludo/Hardum%20Humdum%20-%20Ludo%20128%20Kbps.mp3",
      color: ["#9EA714", "#E9D961"],
    },
  ];
}

export default chillHop;
