import React, { Component } from 'react'

const User = props => {
    console.log(User)
    return (
        <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">{props.user.name}</div>
            <div className="card-body">
                <p className="card-text">Favorite Movie: {props.user.movie}</p>
                <p className="card-text">Favorite Game: {props.user.game}</p>
                <p className="card-text">Favorite Food: {props.user.food}</p>
                <p className="card-text">Favorite Song: {props.user.song}</p>
            </div>
        </div>
    )
}

export default User 