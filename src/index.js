import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import './App.css';
import reportWebVitals from './reportWebVitals';
import imgUrl from '../src/bc.png'


function App() {


    const show=()=>{

        let img1 = new Image(); // Image 构造器
        img1.src = imgUrl;
        img1.alt = 'alt';
        //document.body.appendChild(img1);
        let ctx = document.getElementById('canvas').getContext('2d');
        // let div = document.getElementsByClassName('cover')
        ctx.drawImage(img1,0,0,img1.width,img1.height);
    }


    return (
        <div className="App">
            <div className="cover">
                <canvas id="canvas" width='360' height='640'   >

                </canvas>
                <br></br>
                <button onClick={show} type="button" value="">

                    click
                </button>
            </div>
        </div>
    );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
