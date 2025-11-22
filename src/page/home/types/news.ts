export interface NewsItem {
  newsPk: number;
  title: string;
  url: string;
}

export interface NewsResponse {
  result: {
    display: number;
    items: NewsItem[];
    start: number;
    total: number;
  }

}

