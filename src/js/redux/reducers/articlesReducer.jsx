import {
  ADD_ARTICLE,
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILED
} from '../constants/action-types';

const initialState = {
  articles: [
    { id: 1, title: 'item 1' },
    { id: 2, title: 'item 2' }
  ],
  loading: false
};
const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE:
      return { ...state, loading: true };
    case LOAD_ARTICLE_SUCCESS:
      return { ...state, articles: [...state.articles, ...action.payload], loading: false };
    case LOAD_ARTICLE_FAILED:
      return { ...state, loading: false };
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default articlesReducer;
