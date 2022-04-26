import { Backdrop, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { getPrediction } from './services/URLService';
// import Result from './components/Result';
// import Header from './components/Header';

import { Header, InvalidURL, Result } from './components';

function App() {

  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalidURL, setInvalidURL] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if text is a valid url
    if (text.match(/^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) {
      setInvalidURL(false);
      setLoading(true);

      console.log(text);

      getPrediction(text)
        .then(res => {
          console.log(res);
          setResult(res.prediction);
          setLoading(false);
        })
    } else {
      setInvalidURL(true);
    }
  }

  if (loading) {
    return (
      <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <CircularProgress />
      </Backdrop>
    )
  }

  return (
    <>
      <Header />
      <div className="App">
        <form className="user-form" id="form" onSubmit={handleSubmit} >
          <input type="text" id="search" autoComplete='none' placeholder="Enter the URL here..." onChange={handleChange} />
        </form>

        {/* If invalidURL, then hide Result, otherwise hide invalidURL and show Result */}
        {invalidURL ? <InvalidURL /> : result && <Result value={result} />}

        {/* {invalidURL && <InvalidURL />}
        {result && <Result value={result} />} */}
      </div>
    </>
  )
}

export default App
