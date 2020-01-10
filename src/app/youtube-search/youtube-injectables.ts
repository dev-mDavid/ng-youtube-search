export const YoutubeInjectables: Array<any> =  [
  {provide: YouTubeSearchService , useClass: YouTubeSearchService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY}
];
