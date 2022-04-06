import {NewsSource} from './NewsSource';

export interface Article {
  source: NewsSource;
  author: string;
  title: string;
  descripton: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
