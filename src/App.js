import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';


const items = [
  {
    name: 'Abudl eto din ki korli', description: "Kita kiti bangladesh humayon aid kita kiti bangladesh", img: 'https://images.gr-assets.com/authors/1456905354p8/15050617.jpg'
  },{
    name: 'Abudl eto din ki korli', description: "Kita kiti bangladesh humayon aid kita kiti bangladesh", img: 'https://images.gr-assets.com/authors/1456905354p8/15050617.jpg'
  },{
    name: 'Abudl eto din ki korli', description: "Kita kiti bangladesh humayon aid kita kiti bangladesh", img: 'https://images.gr-assets.com/authors/1456905354p8/15050617.jpg'
  },{
    name: 'Abudl eto din ki korli', description: "Kita kiti bangladesh humayon aid kita kiti bangladesh", img: 'https://images.gr-assets.com/authors/1456905354p8/15050617.jpg'
  }
]

function App() {
  return (
     <div class="row row-cols-1 row-cols-md-2 g-4">
       {
         items.map(item=><Card
         item={item}
         >
         </Card>)
       }
    </div>
  );
}

export default App;
