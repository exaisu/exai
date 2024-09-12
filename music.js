import "dotenv/config";
export const prerender = false;
export async function GET({ params }) {
  let apiKey = process.env.LFM_API;
  const username = "lauriers";
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${aiden}&api_key=${8fc7501e41b2f8c5ce88e8dfb496881a}&format=json`,
    {
      method: "GET",
    }
  );

  const data = await response.json();
  const lastTrackData = data.recenttracks.track[0];
  const lastTrack = {
    artist: lastTrackData.artist["#text"],
    trackName: lastTrackData.name,
    album: lastTrackData.album["#text"],
    url: lastTrackData.url,
    albumArt: lastTrackData.image[1]["#text"],
  };
  return new Response(JSON.stringify(lastTrack), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
