export type Album = {
  artist: string;
  album: string;
  release_date: string;
  genres: string[];
  cover_art_url: string;
  post_date: string;
  slug: string;
};

export type AlbumQueryData = {
  id: string; // "asunojokei-island.md";
  slug: string; //"asunojokei-island";
  body: string;
  collection: string; //"music";
  data: Album;
};