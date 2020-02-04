import React from 'react';
import {connect} from 'react-redux';
import {
     setCurrentPage,
     setToggleFollowingProgress, follow, unFollow
} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from "redux";
import {requestUsers} from "../../redux/UsersReducer";
import {
     getUsers,
     getCurrentPage,
     getFollowingInProgress,
     getIsFetching,
     getTotalUsersCount, getPageSize
} from "../../redux/Selectors/users-selectors";

class UsersContainer extends React.Component {
     componentDidMount() {
          this.props.requestUsers(this.props.currentPage, this.props.pageSize);
     }
     onPageChanged = (pageNumber) => {
          this.props.requestUsers(pageNumber, this.props.pageSize);
     }
     render() {
          // if (!this.props.isAuth) return <Redirect to={"/login"} />
           return <>
               {this.props.isFetching ? <Preloader/> : null}
               <Users
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}
               />
          </>
     }
}

/*const mapStateToProps = (state) => {
   return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
   }
};*/
const mapStateToProps = (state) => {
     return {
          users: getUsers(state),
          pageSize: getPageSize(state),
          totalUsersCount: getTotalUsersCount(state),
          currentPage: getCurrentPage(state),
          isFetching: getIsFetching(state),
          followingInProgress: getFollowingInProgress(state),
     }
};


const mapDispatchToProps = {
     follow,
     unFollow,
     setCurrentPage,
     setToggleFollowingProgress,
     requestUsers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(UsersContainer);