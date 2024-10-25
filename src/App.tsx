import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { slides } from './data'
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Images from './Images';



function App() {
  const [index,setIndex] = useState<number>(-1)

  return (
    <>
   <Images
    data={slides} 
    onClick={(currentIndex)=> setIndex(currentIndex)}/>;


   <Lightbox 
    plugins={[Captions,Download,Fullscreen,Thumbnails,Zoom]}
    captions={{showToggle:true}} 
    index={index}
    open={index >= 0}
    close={() => setIndex(-1)}
    slides={slides}/>
    </>
  )
}

export default App
