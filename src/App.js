import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import Saved from "./components/Saved/Saved";
import Viewed from "./components/Viewed/Viewed";
import Payment from "./components/Payment/Payment";
import Help from "./components/Help/Help";
import Settings from "./components/Settings/Settings";
import Feedback from "./components/Feedback/Feedback";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ListingContainer from "./components/Listing/ListingContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./common/preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";
const HomeContainer = React.lazy(() => import('./components/Home/HomeContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar state={this.props.store.getState().menu}/>
                <div id="page-wrap" className="app-wrapper-content">
                    <Route path="/home" render={withSuspense(HomeContainer)}/>
                    <Route path="/listing" render={() => <ListingContainer/>}/>
                    <Route path="/findProfiles" render={withSuspense(UsersContainer)}/>
                    <Route path="/messages" render={() => <MessagesContainer/>}/>
                    <Route path="/saved" component={Saved}/>
                    <Route path="/viewed" component={Viewed}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/feedback" component={Feedback}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter,
    connect(mapStateToProps,
        {initializeApp}))(App);
