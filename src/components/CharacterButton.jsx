function CharacterButton (props) {
    // const newMovie = 'Frozen';

    const getNewCharacter = (evt) => {
        evt.preventDefault();
        props.charactersearch(props.newCharacter);
    }

    return (
        <form onSubmit={getNewMovie}>
            <input type='submit' value={props.newMovie}/>
        </form>
    )
}

export default CharacterButton;