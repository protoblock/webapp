/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import ContentPage from '../ContentPage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';
import Footer from '../Footer';
import LeaderBoardPage from '../LeaderBoardPage';
import bootstrap from'../../../node_modules/bootstrap/dist/css/bootstrap.css';

const pages = { ContentPage, ContactPage, LoginPage, RegisterPage, NotFoundPage };

@withContext
@withStyles(styles)
@withStyles(bootstrap)

class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {

      case '/':
        component = <LeaderBoardPage />;
        break;
      case '/about':
      case '/privacy':
        let page = AppStore.getPage(this.props.path);
        component = React.createElement(pages[page.component], page);
        break;

      case '/contact':
        component = <ContactPage />;
        break;

      case '/login':
        component = <LoginPage />;
        break;

      case '/register':
        component = <RegisterPage />;
        break;
    }

    return component ? (
      <div className="wrapper">
        <Header />
        {component}
        <Footer />
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;
