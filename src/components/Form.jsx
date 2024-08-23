import {useState} from 'react';

function Form (props) {
    const [formData, setFormData] = useState({
        searchterm: '',
    
    })

    const handleChange = (event) => {
        console.log('in handleChange');
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.characteridsearch(formData.searchterm);
    }
    
    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input 
                    type='text'
                    name='searchterm'
                    onChange={handleChange}
                    value={formData.searchterm}
                />

                <input type="submit" value='submit'/>
            </form>
            <p>Search for Characters by typing Characters Name</p>
        </div>
    )
}

export default Form;