import React from 'react'
import UserCardWrapper from './UserCardWrapper'
import UsersInformation from './UsersInformation'

const UserContainer = () => {
    return (
        <div className="container">
            <UserCardWrapper />
            <UsersInformation />
        </div>
    )
}

export default UserContainer
