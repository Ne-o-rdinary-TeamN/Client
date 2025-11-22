export interface NewsItem {
  newsPk: number;
  title: string;
  url: string;
}

export interface NewsResponse {
  result: {
    display: number;
    newsList: NewsItem[];
    start: number;
    total: number;
  }

}

