import React from 'react'
import LogOut from './LogOut'

export default (props) => {
    const { name, email } = props.user

    if (props.displayMenu) {
        console.log("HIT Return Menu")
        return (
            <div className='menu-pop-out modal-styles'>
                <div>
                    <button
                        className='modal-close-button'
                        onClick={props.onClick}>
                        X
                    </button>
                </div>
                <div>
                    user: {name}
                </div>
                <div>
                    email: {email}
                </div>
                <div className='menu-logout'>
                    <LogOut></LogOut>

                </div>
            </div>
        )
    } else {
        return null
    }
}