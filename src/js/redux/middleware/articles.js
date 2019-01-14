import * as types from '../constants/action-types';
import {
  importArticlesSuccess,
  importArticlesFailed
} from '../actions';
import {
  importArticles
} from '../../../api';

export default store => next => (action) => {
  switch (action.type) {
    case types.LOAD_ARTICLE: {
      // const { emailAddress, password } = action;
      importArticles()
        .then(
          (response) => {
            if (response.status !== 200) {
              console.log(`Looks like there was a problem. Status Code: ${response.status}`);
              store.dispatch(importArticlesFailed());
              return next(action);
            }
            // Examine the text in the response
            response.json().then((res) => {
              console.log('import articles succes:' + res); // eslint-disable-line
              store.dispatch(importArticlesSuccess(res));
            });
            return next(action);
          }
        )
        .catch(
          (err) => {
            console.log('Fetch Error :-S', err);
            store.dispatch(importArticlesFailed());
            return next(action);
          }
        );
      break;
    }
    default:
      return next(action);
  }
  return false;
};
