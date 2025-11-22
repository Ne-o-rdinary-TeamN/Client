export interface NewsItem {
  title: string;
  link?: string;
  originallink?: string;
  description?: string;
  pubDate?: string;
}

export interface NewsResponse {
  result: {
    display: number;
    items: NewsItem[];
    start: number;
    total: number;
  }

}

