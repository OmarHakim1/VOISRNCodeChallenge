import {Article} from './Article';

export interface ArticlesList {
  status: string;
  totalResults: Number;
  articles: Article[];
}
