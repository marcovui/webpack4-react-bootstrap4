import { connect } from 'react-redux';
import Form from '.';
import {
  addArticle,
  importArticles
  // importArticlesAxios
} from '../../../../redux/actions/index';

const mapDispatchToProps = dispatch => ({
  addArticleDisp: article => dispatch(addArticle(article)),
  importArticlesDisp: () => dispatch(importArticles())
  // importArticlesAxiosDisp: () => dispatch(importArticlesAxios())
});


export default connect(null, mapDispatchToProps)(Form);