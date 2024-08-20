function CharacterDisplay ( {character} ) {
    // we are using {movie} instead of props so that we can access it 
    // by just using movie, instead of props.movie

    // in order to both have my code be cleaner and to 
    // ensure that we don't try to render with null values
    // I am going to add two functions
    // loaded() and loading()

    const loaded = () => {
        return (
            <>
            <h1>{character.Name}</h1>
            <h2>{character.description}</h2>
            <img src={character.comics} alt={character.Name}/>
            <h2>{character.id}</h2>
            <h3>Series</h3>
            {
                character.Series.map (series => {
                    return(
                        <>
                        <h4>{series.Source}</h4>
                        <h4>{series.Value}</h4>
                        </>
                    )
                })
            }
            </>
        )
    }

    const loading = () => {
        return <h1>No Character to Display</h1>
    }

    return (character ? loaded() : loading())
}

export default CharacterDisplay;