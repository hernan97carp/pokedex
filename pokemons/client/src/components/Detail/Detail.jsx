
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/Action/action';
import './detail.css'
import random from '../../images/random.png'
import loading from '../../images/loang.gif'
import style from './Detail.module.css'


import heartImg from '../../images/cards/health.png'
import attackImg from '../../images/cards/sword.png'
import shield from '../../images/cards/shield.png'
import speed from '../../images/cards/run.png'
import happy from '../../images/cards/happy.png'
import pokedex from '../../images/cards/pokedex.png'
import height from '../../images/cards/height.svg'
import weight from '../../images/cards/weight.svg'
//useParams, that returns an object with all variables inside your route

function Detail(props){
const dispatch = useDispatch()
const myPokemon = useSelector( state => state.detail)
console.log(myPokemon[0])

 const {id} = useParams()
useEffect(()=>{
 dispatch(getDetail(id))

},[dispatch])
console.log(id)
return(
    <>
   
    {
 //si es 1 pasa a    si id depoke == al id de params
 myPokemon.length && myPokemon[0].id == id?
 <div className='conteinerGeneral'>
{/*show name, pokedex numero, imagen, types  */}

<div className="titulopokemon">
    <h1>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1>
     <p>Pokedex N°{myPokemon[0].id}</p>

</div>
{
   <img src={myPokemon[0].img} alt="imagen" className="imagenPokemon" />
}

<div className="types">
  {  myPokemon[0].types? myPokemon[0].types.map((type)=>{
    return(
        <img src={`../../images/types/${type}.png`} key={type} alt="img type"/>
    )

    })
    :
    <span>not found</span>
    
    
    }
</div>

<div className='stats'> 
  
   <h1 className="details">Details</h1>
 
  

  {/* health */}
  <div className='bar'>
    <div className='info'>
    <span><img src={heartImg}/> Hp</span>
    </div>
    <div className='progress'><span>{myPokemon[0].hp} %</span></div>
  </div>


{/* attack */}
  <div className='bar'>
    <div className='info'>
    <span><img src={attackImg}/>Attack</span>
    </div>
    <div className='progress'><span>{myPokemon[0].attack} %</span></div>
  </div>

{/* defense*/}
  <div className='bar'>
    <div className='info'>
    <span><img src={shield}/>Defense</span>
    </div>
    <div className='progress'><span>{myPokemon[0].defense} %</span></div>
  </div>


{/*speed */}
<div className='bar'>
    <div className='info'>
    <span><img src={speed}/>Speed</span>
    </div>
    <div className='progress'><span>{myPokemon[0].speed} %</span></div>
  </div>


{/*happy*/}

<div className='bar'>
    <div className='info'>
    <span><img src={happy}/>Happy</span>
    </div>
    <div className='progress'><span>{myPokemon[0].happiness} %</span></div>
  </div>

{/* weight */}


  <div className='bar'>
    <div className='info'>
    <span><img src={weight}/>Weight</span>
    </div>
    <div className='progress'><span>{myPokemon[0].weight} kg</span></div>
  </div>

{/*height*/}

<div className='bar'>
    <div className='info'>
    <span><img src={height}/>height</span>
    </div>
    <div className='progress'><span>{myPokemon[0].height} m</span></div>
  </div>


{/* description */}

<div className='bar'>
    <div className='info'>
    <span><img src={pokedex}/>Description:</span>
    </div>
    <div className='progress description'><span>{myPokemon[0].description}</span></div>
  </div>




  {/* div de stats  abajo*/}
  </div> 

 </div>:
 //loading
 
 <div className='loading'>
 <img src={loading}></img>

 </div>


     
            }

    
    </>
)



};

export default Detail;














// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDetail } from '../../redux/Action/action';
// import random from '../../images/random.png'
// import loading from '../../images/loading.gif'
// import style from './Detail.module.css'


// import sword from '../../images/cards/sword.png'
// import speed from '../../images/cards/run.png'

// export default function Detail (props){
    
//     const dispatch = useDispatch();
// const {id} = useParams()
//     useEffect( () => {
//         dispatch(getDetail(id));
//     },[dispatch])

//     const myPokemon = useSelector( state => state.detail)

//     const [section, setSection] = useState(1);

//     useEffect( () => {
//         if(myPokemon[0] && myPokemon[0].createdInDb){
//             setSection(2)
//         }
//     }, [myPokemon, setSection]);


//     function handleSection(e){
//         if(e.target.innerHTML === 'About' && !myPokemon[0].createdInDb){
//             setSection(1); 
//         } else if(e.target.innerHTML === 'Base Stats'){
//             setSection(2)
//         } else if(e.target.innerHTML === 'Evolution' && !myPokemon[0].createdInDb){
//             setSection(3)
//         }
//     }


//     return(
//         <div>
//             {
//                 myPokemon.length && myPokemon[0].id == id ? 
//                 <div className={style.grid} style={{maxHeight:'100vh'}}> 
//                     <Link to='/home' className={style.home}><button className={style.homebtn}>Back</button></Link>
                
//                     {/* caratula (name, img, id, types) */}
                
//                     <div className={style.visual}>
//                         <div className={style.encabezado}> 
//                             <h1 className={style.name}>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1> 
//                             <p className={style.idd}>Pokedex N° {myPokemon[0].id}</p>
//                         </div>
//                         {
//                             <img src={myPokemon[0].img ? myPokemon[0].img : random} className={style.img}/>
//                         }
                        
//                         <div className={style.types}>
//                             {
//                                 myPokemon[0].types ? myPokemon[0].types.map( el => {
//                                     return(
//                                         <img src={`../../images/types/${el}.png`} alt="Types" height="160px" key={el}/>
//                                     )
//                                 }
//                                 ) :
//                                 <span>Types not found</span>
//                             }
//                         </div>
//                     </div>
//                         <h1 className={style.details}>Details</h1>
//                         <h2 className={style.statss}>Stats</h2>
//                         <div className={style.stats}>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><i className="fas fa-heartbeat"></i> Hp</span>
//                             </div>
//                             <div className={style.progress} ><span style={{width:myPokemon[0].hp > 100 ? '100%' : myPokemon[0].hp +'%'}} per={`${myPokemon[0].hp}`} className={style.hp}></span></div>  
//                         </div>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><img src={sword} alt='Attack' height='16px' width='16px'/> Attack</span>
//                             </div>
//                             <div className={style.progress} style={{animationDelay:'0.1s'}}><span style={{width:myPokemon[0].attack > 100 ? '100%' : myPokemon[0].attack +'%'}} per={`${myPokemon[0].attack}`} className={style.attack}></span></div>  
//                         </div>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><i className="fas fa-shield-alt"></i> Defense</span>
//                             </div>
//                             <div className={style.progress} style={{animationDelay:'0.2s'}}><span style={{width:myPokemon[0].defense > 100 ? '100%' : myPokemon[0].defense+'%'}} per={`${myPokemon[0].defense}`} className={style.defense}></span></div>  
//                         </div>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><img src={speed} alt='Speed' height='16px' width='16px'/> Speed</span>
//                             </div>
//                             <div className={style.progress} style={{animationDelay:'0.3s'}}><span style={{width:myPokemon[0].speed > 100 ? '100%' : myPokemon[0].speed +'%'}} per={`${myPokemon[0].speed}`} className={style.speed}></span></div>
//                         </div>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><img src={'../../images/cards/weight.svg'} alt='Weight' height='16px' width='16px'/> Weight(Kg)</span>
//                             </div>
//                             <div className={style.progress} style={{animationDelay:'0.5s'}}><span style={{width:myPokemon[0].weight > 100 ? '100%' : myPokemon[0].weight +'%'}} per={`${(myPokemon[0].weight)/10}`} className={style.weight}></span></div>
//                         </div>
//                         <div className={style.bar}>
//                             <div className={style.info}>
//                                 <span><img src={'../../images/cards/height.svg'} alt='Height' height='16px' width='16px'/> Height(M)</span>
//                             </div>
//                             <div className={style.progress} style={{animationDelay:'0.6s'}}><span style={{width:myPokemon[0].height > 100 ? '100%' : myPokemon[0].height +'%'}} per={`${(myPokemon[0].height)/10}`} className={style.height}></span></div>
//                         </div>
                        
//                     </div>
//                 </div> :
//                 <div className={style.loading}> 
//                     <img src={loading} alt="Loading.." width='250px'/>
//                     <p className={style.loadingtext}>Loading...</p>
//                 </div>
//             }
//         </div>
        
//     )








//         }



