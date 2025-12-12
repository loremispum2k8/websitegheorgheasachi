import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'

function Testimonies({id,elementRef,elementStyles}){

    const testimony1 = useRef()
    const testimony2 = useRef()
    const testimony3 = useRef()
    const testimony4 = useRef()
    const testimony5 = useRef()
    const testimony6 = useRef()
    const testimony7 = useRef()
    const testimony8 = useRef()

    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()
    const dot4 = useRef()
    const dot5 = useRef()
    const dot6 = useRef()
    const dot7 = useRef()
    const dot8 = useRef()


    const [testimonialsIndex,setTestimonialsIndex] = useState(1)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTestimonialsIndex(prev => prev === 8 ? 1 : prev + 1)
        },27000)

        return ()=> clearInterval(interval)
    },[])


    useEffect(() => {

        const testimonials = [testimony1, testimony2, testimony3, testimony4, testimony5, testimony6, testimony7, testimony8]
        const dots  = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8]
        testimonials.forEach(testimony => {
            testimony.current.classList.remove("showTestimony")
            testimony.current.classList.add("hideTestimony")
        })

        dots.forEach(dot => dot.current.classList.remove("activeTestimonyDot"))
        testimonials[testimonialsIndex-1].current.classList.add("showTestimony")
        testimonials[testimonialsIndex-1].current.classList.remove("hideTestimony")

        dots[testimonialsIndex-1].current.classList.add("activeTestimonyDot")

    }, [testimonialsIndex])

    
    function changeTestimony(e){
        const id = Number(e.target.id)
        setTestimonialsIndex(id)
    }


    return(
        <div ref={elementRef} id={id} className={`testimoniesContainer ${elementStyles}`}>
            <h1 className='testimoniesTitle'>Testimoniale</h1>
            <div className='allTestimonies'>
                <div id='testimony1' ref={testimony1} className="testimony showTestimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceul Teoretic Gheorghe Asachi mi-a oferit curajul de a transforma ideile în realitate."</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Iacuțevici Valeria</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>Iacuțevici Valeria, elevă în clasa a XII-a „B” și președinta Consiliului Elevilor 2024, a coordonat peste 70 de activități și proiectele „RadioVox”, prin care a creat un club de radio și a dotat cabinetul cu echipamente, și „Tinerii în acțiune”, care a amenajat un teren de baschet, contribuind la o comunitate școlară activă, unită și motivată.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/d5kcL9C.jpeg" alt="" /></div>
                </div>
                <div id='testimony2' ref={testimony2} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Educația din Liceul Teoretic Gheorghe Asachi nu umple un vas, ci aprinde o lumină.”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Angheluș Marta</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>Experiența ei ca profesoară de istorie s-a integrat în identitatea sa. Ea apreciază că meseria îi permite să conecteze generații și epoci, folosind metode interactive și discuții vii. Observă cum elevii își dezvoltă gândirea și capacitatea de argumentare. Relația cu copiii îi oferă satisfacție, simțind că îi sprijină și inspiră. Profesia o provoacă și o împlinește în fiecare zi.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/DJCplGs.jpeg" alt="" /></div>
                </div>
                <div id='testimony3' ref={testimony3} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>În Liceul Gheorghe Asachi - Vocea ta contează, argumentul tău schimbă”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Iachimovschii Luminița</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>Doamna Iachimovschi Sorina consideră că Clubul de Dezbateri Democratice al I.P.L.T. „Gh. Asachi”, creat în noiembrie 2023, este un spațiu unde ideile capătă voce, iar tinerii își dezvoltă gândirea critică. Ea afirmă că clubul a luat naștere pentru a oferi elevilor libertatea de a discuta argumentat teme importante, văzând dezbaterea ca un exercițiu de respect, colaborare și responsabilitate civică.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/fQscNXA.jpeg" alt="" /></div>
                </div>
                <div id='testimony4' ref={testimony4} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceului Teoretic Gheorghe Asachi este locul în care mi-am conturat primele repere academice și personale, cele mai înalte vise."</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Evelina Covalschi</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>Pentru ea, Liceul Teoretic „Gheorghe Asachi” a exercitat o influență esențială în formarea identității sale academice și personale. Aici și-a definit primele repere, aspirații și valori, într-un climat construit prin dăruirea neobosită a profesorilor. Considerând acest liceu drept „casa sufletului”, el va rămâne mereu sursa care îi va orienta pașii spre noi orizonturi de excelență.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/2b6zG4I.jpeg" alt="" /></div>
                </div>
                <div id='testimony5' ref={testimony5} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceul Gheorghe Asachi mi-a oferit disciplina și oportunitățile de care aveam nevoie.”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Ana-Maria Dinu</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>După patru ani în care a coordonat proiecte locale și a fost președinte al Clubului de Informatică la Liceul „Gheorghe Asachi”, Ana-Maria a continuat să sprijine generațiile tinere. Experiența de elev activ a inspirat-o să-și urmeze drumul în educație și comunitate.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/XwEDcgf.png" alt="" /></div>
                </div>
                <div id='testimony6' ref={testimony6} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceul Gheorghe Asachi mi-a oferit disciplina și oportunitățile de care aveam nevoie.”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Ana-Maria Dinu</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>După patru ani în care a coordonat proiecte locale și a fost președinte al Clubului de Informatică la Liceul „Gheorghe Asachi”, Ana-Maria a continuat să sprijine generațiile tinere. Experiența de elev activ a inspirat-o să-și urmeze drumul în educație și comunitate.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/XwEDcgf.png" alt="" /></div>
                </div>
                <div id='testimony7' ref={testimony7} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceul Gheorghe Asachi mi-a oferit disciplina și oportunitățile de care aveam nevoie.”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Ana-Maria Dinu</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>După patru ani în care a coordonat proiecte locale și a fost președinte al Clubului de Informatică la Liceul „Gheorghe Asachi”, Ana-Maria a continuat să sprijine generațiile tinere. Experiența de elev activ a inspirat-o să-și urmeze drumul în educație și comunitate.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/XwEDcgf.png" alt="" /></div>
                </div>
                <div id='testimony8' ref={testimony8} className="testimony">
                    <div className='testimonyText'>
                        <h1 className='testimonyTitle'>Liceul Gheorghe Asachi mi-a oferit disciplina și oportunitățile de care aveam nevoie.”</h1>
                        <div className='testimonyNameContainer'>
                            <p className='testimonyName'>Ana-Maria Dinu</p>
                        </div>
                        <div className='testimoNline'></div>
                        <h2 className='testimonySuccesses'>După patru ani în care a coordonat proiecte locale și a fost președinte al Clubului de Informatică la Liceul „Gheorghe Asachi”, Ana-Maria a continuat să sprijine generațiile tinere. Experiența de elev activ a inspirat-o să-și urmeze drumul în educație și comunitate.</h2>
                        <img className='testimonyQuote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
                    </div>
                    <div className='testimonyimage'><img src="https://i.imgur.com/XwEDcgf.png" alt="" /></div>
                </div>
            </div>


            <div className='testimoniesDotsContainer'>
                <div ref={dot1} onClick={changeTestimony} id='1' className='testimonyDot activeTestimonyDot'></div>
                <div ref={dot2} onClick={changeTestimony} id='2' className='testimonyDot'></div>
                <div ref={dot3} onClick={changeTestimony} id='3' className='testimonyDot'></div>
                <div ref={dot4} onClick={changeTestimony} id='4' className='testimonyDot'></div>
                <div ref={dot5} onClick={changeTestimony} id='5' className='testimonyDot'></div>
                <div ref={dot6} onClick={changeTestimony} id='6' className='testimonyDot'></div>
                <div ref={dot7} onClick={changeTestimony} id='7' className='testimonyDot'></div>
                <div ref={dot8} onClick={changeTestimony} id='8' className='testimonyDot'></div>
            </div>
        </div>
    )
}

export default Testimonies