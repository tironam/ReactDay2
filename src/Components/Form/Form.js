import React, { Component } from 'react'

const Form = props => {
    return (
        <form>
            <p>
                <label htmlFor="Name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={props.handleInputChange}
                    value={props.name}
                />
            </p>
            <p>
                <label htmlFor="Movie">Movie</label>
                <input
                    type="text"
                    name="movie"
                    id="movieName"
                    onChange={props.handleInputChange}
                    value={props.movie}
                />
            </p>
            <p>
                <label htmlFor="Game">Game</label>
                <input
                    type="text"
                    name="game"
                    id="gameName"
                    onChange={props.handleInputChange}
                    value={props.game}
                />
            </p>
            <p>
                <label htmlFor="Food">Food</label>
                <input
                    type="text"
                    name="food"
                    id="foodName"
                    onChange={props.handleInputChange}
                    value={props.food}
                />
            </p>
            <p>
                <label htmlFor="Song">Song</label>
                <input
                    type="text"
                    name="song"
                    id="songName"
                    onChange={props.handleInputChange}
                    value={props.song}
                />
            </p>
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default Form