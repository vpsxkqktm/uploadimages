import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { imageDb } from './config';
import './App.css';
// Import the functions you need from the SDKs you need
import useWindowDimensions from './windowSize';
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, ref, listAll, uploadBytes } from 'firebase/storage';
import {v4} from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//const analytics = getAnalytics(app);


function App() {
  const [img,setImg] = useState('')
  const { height, width } = useWindowDimensions();
  const [imgUrl,setImgUrl] = useState([])
  const handleClick = () =>{
    console.log('hi?')
    if(img !== null){
      const imgRef = ref(imageDb,`files/${v4()}`)
      uploadBytes(imgRef,img).then(value=>{
        getDownloadURL(value.ref).then(url=>{
          setImgUrl(data=>[...data, url])
          
      })
      })
    }
  }

  useEffect (()=>{
    console.log("hi")
    if (img !==null){
      listAll(ref(imageDb,"files")).then(imgs=>{
        console.log(imgs)
        imgs.items.forEach(val=>{
          getDownloadURL(val).then(url=>{
              setImgUrl(data=>[...data, url])
              
          })
        })
      })
    }
  },[])
  

  
  return (
    <div className="App">
      <div>hi</div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])}/>
      <button onClick={handleClick}>Upload</button>
      {
        imgUrl.map(dataVal=>
          <div>
            <img src={dataVal} width={width * 0.8} height={height * 0.7} alt=''/>
    
            <br/>
          </div>)
      }
    </div>
  );
}

export default App;
