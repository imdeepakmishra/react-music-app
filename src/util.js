import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Aabaad Barbaad Song",
      cover:
        "https://a10.gaanacdn.com/images/song/92/32368592/crop_175x175_1603263604.jpg",
      artist: "Arijit Singh",
      id: uuidv4(),
      active: false,
      song: "https://gaana.com/song/aabaad-barbaad-from-ludo",
      color: ["#F8EBCA", "#77340C"],
    },
  ];
}

export default chillHop;
