function UpdateButton (props) {


    const runUseEffect = (evt) => {
        evt.preventDefault();
        console.log(props);
        props.setUpdateShows(props.updateShows + 2);
    }

    return (
        <div>
            <form onSubmit={runUseEffect}>
                <input type='submit' value='Great TV Shows' />
            </form>
        </div>
    )
}

export default UpdateButton;