import React from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";


const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    {/*<Route path='/profile' component={Profile}/>*/}

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                               
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           component={Login}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer  />
            </Provider>
        </HashRouter>
    )

}
export default SamuraiJSApp;