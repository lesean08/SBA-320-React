function CharacterButton(props) {
    const getNewShows = (evt) => {
        evt.preventDefault();
        props.showssearch(props.newShows);
    }

    return (
        <form onSubmit={getNewShows}>
            <button type='submit'>{props.newShows}</button>
        </form>
    );
}

export default CharacterButton;
