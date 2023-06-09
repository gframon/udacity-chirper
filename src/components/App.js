import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Nav from './Nav';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className='container'>
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/tweet/:id' element={<TweetPage />} />
            <Route path='/new' element={<NewTweet />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
