
import axios from 'axios';
import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://localhost:3333';

export function importArticles() {
  return fetch('/data/articles.json', {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
}

export function importArticlesAxios() {
  return axios.get(`${BASE_URL}/api/articles`);
}