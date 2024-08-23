function CharacterButton (props) {
    

    const getNewCharacterId = (evt) => {
        evt.preventDefault();
        props.characteridsearch(props.newCharacterId);
    }

    return (
        <form onSubmit={getNewCharacterId}>
            <input type='submit' value={props.newCharacterId}/>
        </form>
    )
}

export default CharacterButton;