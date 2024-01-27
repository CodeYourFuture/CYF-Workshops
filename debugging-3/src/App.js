import React, {useState, useEffect} from 'react';
import './App.css';

function EmailInput() {
    const [email, setEmail] = useState(null);

    function valid(val) {
        return val && val.indexOf('@') !== '-1'
    }

    return <div>
        <label htmlFor='email'>Email:</label>
        <input
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
                if (!valid(email)) {
                    alert('Email not valid')
                }
            }
            }
            id="email" type='text' value={email}/>
    </div>
}

function SelectTvShow() {
    const [show, setShow] = useState(84);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/show/${show}/episodes`).then((response) => {
            return response.json()
        }).then((data) => {
            setEpisodes(data)
        }).catch(() => {

        })
    }, [])


    return <div>
        <label htmlFor='tvshows'>Episode:</label>
        <select id='tvshows'>
            <option>Please Select:</option>
            {episodes && episodes.map((e) => {
                return <option>{e.name}</option>
            })}
        </select>
    </div>
}

function Rating() {
    const [value, setValue] = useState(null);
    let values = ['Bad', 'Ok', 'Good', 'Great', 'Amazing']
    return <div>
        <label htmlFor='rating'>Rating:</label>
        <select
            id="rating"
            onChange={
                (e) => {
                    setValue(e.target.value)
                    alert(`Rating ${e.target.value}`)
                }
            }
        >
            <option>Please Select:</option>
            {values.map((e) => {
                return <option value={e}>{e}</option>
            })}
        </select>
    </div>
}

function App() {
    return (
        <>
            <form>
                <h1>Family Guy Episodes</h1>
                <div className="App">
                    <EmailInput/>
                    <SelectTvShow/>
                    <Rating/>
                </div>
            </form>
        </>
    )
        ;
}

export default App;
