interface ServerResponse {
  resultCount: number;
  results: any;
}

interface ItemResponse {
  trackName: string;
  artistName: string;
  artworkUrl30: string;
  artistId: string;
}

interface Item {
  track: string;
  artist: string;
  thumbnail: string;
  artistId: string;
}
