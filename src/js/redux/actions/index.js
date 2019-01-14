// src/js/actions/index.js
import axios from 'axios';
import {
  LOAD_ARTICLE,
  LOAD_ARTICLE_AXIOS,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILED
} from '../constants/action-types';

/* import articles */
export function importArticles() {
  return {
    type: LOAD_ARTICLE
  };
}

export function importArticlesAxios() {
  return {
    type: LOAD_ARTICLE_AXIOS
  };
}

export function importArticlesSuccess(payload) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    payload
  };
}

export function importArticlesFailed() {
  return {
    type: LOAD_ARTICLE_FAILED
  };
}

export function addArticle() {
  return false;
}
