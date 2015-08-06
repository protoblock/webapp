/*! Based on react-structured-filter  | BSD | https://github.com/SummitRoute/react-structured-filter */

import React, { PropTypes } from 'react';
import Griddle from 'griddle-react';
import GriddleWithCallback from '../GriddleWithCallback';
import { TypeaheadTokenizer } from 'react-typeahead';
import styles from './FilterTable.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class FilterTable extends React.Component {
  getInitialState(){
    return {
      filter: ''
    };

  }
  render() {
    return (
      <table>
        <tr>
          <td>It Worked!</td>
        </tr>
      </table>
    );
  }

}

export default FilterTable;
