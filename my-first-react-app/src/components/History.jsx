import { useRef, useEffect, useState } from 'react'

const images = [
    "history1.webp",
    "history2.webp",
    "https://i.imgur.com/4RuOdsy.jpeg",
    "https://i.imgur.com/FHs88Ft.jpeg",
    "https://i.imgur.com/9cBpcYb.jpeg"
];

function History({id,elementRef,elementStyles}){

    const [historyIndex,setHistoryIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setHistoryIndex(prev => prev === images.length -1 ? 0 : prev + 1)
        },5000)

        return ()=> clearInterval(interval)
    },[])
    
    function changeHistory(index){
        setHistoryIndex(index)
    }


    return(
        <div ref={elementRef} id={id} className={`historyContainer ${elementStyles}`}>
            <h1 className='historyTitle'>Istoria liceului</h1>
            <div className='historyContentGrid'>
                <div className='historyImages'>
                    <div className='historyImagesContainer'>
                        {images.map((i, index) => (
                            <div key={index} className={`historyImage ${historyIndex == index ? "showHistoryImage" : "hideHistoryImage"}`}>
                                <img src={i} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="historyDotsContainer">
                         {images.map((_, index) => (
                            <div key={index} 
                            onClick={() => changeHistory(index)} 
                            className={`historyDot ${historyIndex == index ? "activeHistoryDot" : ""}`}></div>
                        ))}
                    </div>
                </div>

                <p className='historyTextOne'><span>În anul 1991, în or. Ungheni, a fost dată în exploatare şcoala care poartă numele iluministului Gheorghe Asachi.</span> Au fost înscrişi 991 elevi, coordonaţi de 75 cadre didactice. În anul 1998, şcoala a primit statutul de liceu teoretic. Mai târziu,în anul 2013 Liceul Teoretic “Gheorghe Asachi” devine instituţie publică. Clădirea liceului este amplasată în cartierul Tineretului, mun. Ungheni.</p> <p className='historyTextTwo'> Această clădire are o capacitate de 1276 elevi, cu o infrastructură alcătuită din 48 de cabinete,  2 săli de sport, sală specializată de şah, centru de Resurse pentru educaţie incluzivă, bibliotecă şcolară, cantină şcolară, sală pentru festivităţi. <span>Sălile de clasă sunt dotate cu mobilierul necesar şi o serie de materiale didactice, cum ar fi 5 table interactive, 23 televizoare, 33 de calculatoare dintre care 22 se află în cele 2 cabinete de informatică. În cadrul instituţiei, mai activează o bibliotecă – filiala bibliotecii raionale “Dimitri Cantemir”.</span> <br /><br />În anul şcolar 2019-2020, în liceu sunt înmatriculaţi 870 elevi, distribuiţi în 32 de clase – 12 clase primare, 14 clase gimnaziale şi 6 clase liceale. La fel, din acest an activează şi Centrul de Resurse pentru educaţie incluzivă. <span>Din anul 2013, liceul este centrul de desfăşurare a examenului de BAC.</span></p>

            </div>
        </div>
    )
}

export default History
