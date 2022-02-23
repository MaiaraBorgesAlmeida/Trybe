// Chame o componente Image, de forma que seja mostrada esta imagem, ou o texto 'Cute cat staring', caso a imagem não consiga ser carregada
import './App.css';
import Image from './Image';

function App() {
  return (
    <main>
     <Image source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
    </main>
  );
}

export default App;