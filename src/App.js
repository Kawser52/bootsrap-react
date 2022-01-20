import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/Card/News/News';



function App() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=1fa405b431094ad7943e8d423b35a103')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))

  },[])
  return (
    <div className="App">
      {
        news.length===0 ? <Spinner animation="grow" /> : <Row xs={1} md={2} className="g-4">
        {
           news.map(nw=><News news={nw}></News>)
        }
        </Row>
      }
        
       
    </div>
  );
}

export default App;
