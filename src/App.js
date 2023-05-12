// import thing from ./place.jsx
import{Routes, Route, Link, useParams, useSearchParams} from 'react-router-dom';

const Home = (props) => {
  return (
    <h1 className='mt-3'>Welcome</h1>
  );
}

const DisplayInfo = (props) => {
  const {info} = useParams();
  const {color1} = useParams();
  const {color2} = useParams();
  if (isNaN(info)){
    if (color1 != undefined && color2 != undefined){
      return(
        <h1 className='mt-3' style={{color: color1, backgroundColor: color2}}>The word is: {info}</h1>
      )
    }
    return(
      <h1 className='mt-3'>The word is: {info}</h1>
    );
  }
  return(
    <h1 className='mt-3'>The number is: {info}</h1>
  )
}

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:info' element={<DisplayInfo/>}/>
        <Route path='/:info/:color1' element={<DisplayInfo/>}/>
        <Route path='/:info/:color1/:color2' element={<DisplayInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
