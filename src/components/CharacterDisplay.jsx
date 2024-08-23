function CharacterDisplay ( {character} ) {


    const loaded = () => {
        return (
            <>
            <h1>{character-id.intelligence}</h1>
            <h2>{character-id.power}</h2>
            <img src={character-id.image} alt={character-id.combat}/>
            <h2>{character.id}</h2>
            <h3>Series</h3>
            {
                character.Series.map (series => {
                    return(
                        <>
                        <h4>{id.Source}</h4>
                        <h4>{id.Value}</h4>
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