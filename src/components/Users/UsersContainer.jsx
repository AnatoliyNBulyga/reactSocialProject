import React from 'react';
import {connect} from 'react-redux';
import {
     follow,
     setUsers,
     unfollow,
     setCurrentPage,
     setTotalUsersCount,
     setToggleFetching,
     setToggleFollowingProgress
} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {userAPI as usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
     componentDidMount() {
          this.props.setToggleFetching(true);
          usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
               this.props.setToggleFetching(false);
               this.props.setUsers(data.items);
               this.props.setTotalUsersCount(data.totalCount);
          });
     }
     onPageChanged = (pageNumber) => {
          this.props.setToggleFetching(true);
          this.props.setCurrentPage(pageNumber);
          usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
               this.props.setToggleFetching(false);
               this.props.setUsers(data.items);
          });
     }
     render() {
          return <>
               {this.props.isFetching ? <Preloader/> : null}
               <Users
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setToggleFollowingProgress={this.props.setToggleFollowingProgress}
               />
          </>
     }
}

const mapStateToProps = (state) => {
   return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
   }
};
const mapDispatchToProps = {
     follow,
     unfollow,
     setUsers,
     setCurrentPage,
     setTotalUsersCount,
     setToggleFetching,
     setToggleFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);