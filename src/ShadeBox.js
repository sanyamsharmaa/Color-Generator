import React from 'react'
import rgbToHex from './RGBtoHEX';
// import { useState } from 'react'
export default function ShadeBox(props) {
    // const [alert,setAlert]=useState(false)
    // let r=toString(rgb['rgb'][0]); 
    // let g=toString(rgb['rgb'][1]);
    // let b=toString(rgb['rgb'][2]);
    // let bgclr=`rgb(${r},${g},${b})`
    // let bgclr2=`rgb(${rgb['rgb'][0]},${rgb['rgb'][1]},${rgb['rgb'][2]})`
    let fclr=`rgb(${props.txtc},${props.txtc},${props.txtc}`
    // console.log('Text color',typeof(txtc),'fclr-',fclr)
    let bgclr2,per=props.idx*10;

    
      bgclr2=`rgb(${props.rgb[0]},${props.rgb[1]},${props.rgb[2]})` 
      const hexCode = rgbToHex(props.rgb[1],props.rgb[1],props.rgb[1]);
      // console.log(`Hex code: ${hexCode}`);
    
    

    // console.log(rgb['rgb'][0],'typeof(bgclr)',typeof(r))

  return (
    <>
    <div className="shd" style={{backgroundColor :`${bgclr2}`,color:`${fclr}`}}>
        <div className="per"></div>
        <div className="shh">
    <h5>{per}%</h5>
            <div>{bgclr2}</div>
            <div>{hexCode}</div>
        </div> 
    </div>
    </>
  )
}
