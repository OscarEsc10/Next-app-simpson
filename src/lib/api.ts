import { API_BASE_URL, API_PATHS } from '../utils/constants';

export class SimpsonsAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async fetch(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`);
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    return res.json();
  }

  // Quotes
  public fetchQuotes() {
    return this.fetch(API_PATHS.QUOTES);
  }

  // Characters
  public fetchCharacters() {
    return this.fetch(API_PATHS.CHARACTERS);
  }

  // Episodes
  public fetchEpisodes() {
    return this.fetch(API_PATHS.EPISODES);
  }

  // Locations
  public fetchLocations() {
    return this.fetch(API_PATHS.LOCATION);
  }

  // Iconic Phrases
  public fetchIconicPhrases() {
    return this.fetch(API_PATHS.ICONIC_PHRASES);
  }
};