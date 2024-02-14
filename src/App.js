import './App.css';
import Values from 'values.js'
import { useState } from 'react';
import ShadeBox from './ShadeBox';
// import rgbToHex from './RGBtoHEX';

function App() {

  const [color, setcolor] = useState('')
  const [shades, fillshades] = useState([])
  const [err, hndlerror] = useState(false)
  // const [frmt,setclrfrmt]=useState(0)
  // const [tc,setxtvalue]=useState(0)
  const tc = [];
  for (let i = 0; i < 20; i++) {
    tc.push(i * 11.8);
  }
  // let cft=document.getElementsByClassName('form-select')[0]
  // console.log('cft value-',cft.value)
  // let ttc=210;
  const GenerateColor = () => {
    console.log('generating color')
    let i = document.getElementsByTagName('input')[0];
    // console.log('frmt',frmt,typeof(frmt))
    // let hexcode;
    // if((frmt==='1' ) || (frmt==='2' )){
      // console.log('color[0]',color[0]) && color[0]==='r'
      try {
        // if(frmt==='2'){
        //   console.log('rgb input-',color,typeof(color))
          
        //   let rgbString = color.slice(4, -1);
        //   const values =rgbString.split(",");
        //   const r = parseInt(values[0].trim(), 10);
        //   const g = parseInt(values[1].trim(), 10);
        //   const b = parseInt(values[2].trim(), 10);
        //   // console.log('rgbToHex(r,g,b)',rgbToHex(r,g,b))
        //   hexcode=rgbToHex(r,g,b)
        //   // console.log('hexcode-',hexcode)
        // }
        // setcolor(hexcode);
        // console.log('generated hexclr-',color)

        let clr = new Values(color).all(11)
        fillshades(clr)
        // console.log('shades',shades)
        // console.log(shades[0]['rgb'])
        i.classList.remove('ercls')
         }
      catch (error) {
      i.classList.add('ercls');
      // console.log(i.classList)
      hndlerror(true)
      alert('Incorrect color code,try again', err)
      }
    // }
    // else{
    //   i.classList.add('ercls');
    //   alert('Please select format of color')}

  }

  console.log({ color })
  return (
    <>
      <div className="inp">
        <h2>
      <img src="https://i.pinimg.com/564x/c6/e1/7d/c6e17d251675fb3bfb42d00a7e3be6e0.jpg" width={'40px'} height={'40px'} alt="" />
          Color-generator</h2>
        <form action="submit">
        {/* input-group */}
          <div class=" frmt m-75 mb-3">  
            {/* <select class="form-select" aria-label="Default select example" onChange={(e)=>{setclrfrmt(e.target.value)}}>
              <option selected>Select format</option>
              <option value="1" >Hexcode</option>
              <option value="2" >RGB</option>
            </select> */}
            <input type="text" className="form-control kkk " onChange={(e) => { setcolor(e.target.value) }} placeholder="Enter color for shades" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary button-addon2" type="button" id="livetoastBtn" onClick={GenerateColor}>Generate</button>
          </div>
        </form>
      </div>
      <section className='sdpk'>
        {shades.map((c, idx) => {
          const idxTc = tc[idx];
          // console.log('c in shades-',typeof(c['rgb'][0]),c['rgb'][0],c['rgb'])
          // <ShadeBox />;
          // console.log('idx-', idx)
          // console.log('tc-', tc, '^^', (idx * 11.8).toFixed(2))
          return (<ShadeBox rgb={c['rgb']} wght='10' idx={idx} txtc={idxTc} />)
        }
        )}
      </section>
    </>
  );
}

export default App;
