function CharacterDisplay ( {character} ) {


    const loaded = () => {
        return (
            <>
            <h1>{shows.q}</h1>
            <h2>{shows.tupe}</h2>
            <h3>{shows.info}</h3>
            <h4>shows.limit</h4>
            {
                shows.info.map (series => {
                    return(
                        <>
                        <h4>{type.Source}</h4>
                        <h4>{type.Value}</h4>
                        </>
                    )
                })
            }
            </>
        )
    }

    const loading = () => {
        return <h1>No Shows to Display</h1>
    }

    return (character ? loaded() : loading())
}

export default CharacterDisplay;