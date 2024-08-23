function UpdateButton (props) {


    const runUseEffect = (evt) => {
        evt.preventDefault();
        console.log(props);
        props.setUpdateCharacterId(props.updateCharacterId + 2);
    }

    return (
        <div>
            <form onSubmit={runUseEffect}>
                <input type='submit' value='Super Heros' />
            </form>
        </div>
    )
}

export default UpdateButton;