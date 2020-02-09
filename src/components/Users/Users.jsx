import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged} />
            <div>
                {users.map(user => <User
                                            key={user.id}
                                            user={user}
                                            followingInProgress={props.followingInProgress}
                                            unFollow={props.unFollow}
                                            follow={props.follow} />
                )}
            </div>
        </div>
    )
}

export default Users;