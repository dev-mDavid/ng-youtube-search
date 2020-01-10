import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) { }
}
