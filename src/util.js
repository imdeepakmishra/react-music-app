import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Aabaad Barbaad Song",
      cover:
        "https://a10.gaanacdn.com/images/song/92/32368592/crop_175x175_1603263604.jpg",
      artist: "Arijit Singh",
      id: uuidv4(),
      active: true,
      audio:
        "https://pagalsongs.site/files/sfd5/2213/Aabaad%20Barbaad(PaglaSongs).mp3",
      color: ["#F8EBCA", "#77340C"],
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
