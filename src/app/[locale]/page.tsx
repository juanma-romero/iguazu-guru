//import Main from './components/Main';
import VideoBackground from './components/Construccion'
 
export default function HomePage() {
  
  return (        
      //<Main />   
      <VideoBackground
        videoMp4="/videos/catas.mp4"        
        //posterImage="/costadoDerecho.jpg"
        title="En Construcción"
        subtitle="¡Volveremos pronto con algo genial!"
      /> 
  )
}