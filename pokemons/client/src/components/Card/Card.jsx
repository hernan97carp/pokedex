


import React from 'react';
import style from './Card.module.css'

export default function Card({ name, types, image, id, weight, height}){

    let sprite;
    if(id >= 1 && id <= 100){
        sprite = true
    }


    return(
        <div className={style.card}>
            <span className={style.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            {
                <img src={image} alt="Img not found" height="190px" className={style.img}/>
            }
            <span className={`${style.typetitle}`}>Types</span>
            <div className={style.types}>
                {
                    types ? types.map( el => {
                        return(
                            <img src={`images/types/${el}.png`} alt="Types" height="50px" key={el}/>
                        )
                    }
                    ) :
                    <span>Types not found</span>
                }
            </div>
            <span className={`${style.aboutitle}`}>About</span>
            <div className={style.about}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <img src={'images/cards/weight.svg'} alt='Weight Icon'/>
                        <span className={style.pokweight}>{weight / 10}kg</span>
                    </div>
                    <span className={style.weight}>Weight</span>
                </div>
                <div style={{display:'flex', flexDirection:'column', paddingLeft:'24%'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <img src={'images/cards/height.svg'} alt='Height Icon'/>
                        <span className={style.pokheight}>{height / 10}m</span>
                    </div>
                    <span className={style.height}>Height</span>    
                </div>
            </div>
            
        </div>
    )
}



























// import React from 'react';
// import "./card.css"

// export default function Card({ name, types, image, id, weight, height}){

//     let sprite;
//     if(id >= 1 && id <= 100){
//         sprite = true
//     }


//     return(
//         <div className="card">
//             <span className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
//             {
//                 <img src={image} alt="Img not found" height="190px" className="img"/>
//             }
//             <span className="typetitle">Types</span>
//             <div className="types">
//                 {
//                     types ? types.map( el => {
//                         return(
//                             <img src={`../images/types/${el}.png`} alt="Types" height="65px" key={el}/>
//                         )
//                     }
//                     ) :
//                     <span>Types not found</span>
//                 }
//             </div>
//             <span className="aboutitle">About</span>
//             <div className="about">
//                 <div style={{display:'flex', flexDirection:'column'}}>
//                     <div style={{display:'flex', flexDirection:'row'}}>
//                         <img src={'../images/cards/weight.svg'} alt='Weight Icon'/>
//                         <span className="pokweight">{weight / 10}kg</span>
//                     </div>
//                     <span className="weight">Weight</span>
//                 </div>
//                 <div style={{display:'flex', flexDirection:'column', paddingLeft:'24%'}}>
//                     <div style={{display:'flex', flexDirection:'row'}}>
//                         <img src={'../images/cards/height.svg'} alt='Height Icon'/>
//                         <span className="pokheight">{height / 10}m</span>
//                     </div>
//                     <span className="height">Height</span>    
//                 </div>
//             </div>
            
//         </div>
//     )
// }