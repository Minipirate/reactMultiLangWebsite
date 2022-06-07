import React, { useContext } from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import ItalianFlag from '../../assets/italia.svg'
import './ToggleLangs.css'
import { Context } from '../../context/langContext'


export default function ToggleLangs() {

    const { toggleLang } = useContext(Context)
    console.log(toggleLang);

    return (
        <div className='container-langs'>

            <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="French flag" />
            <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="Spanish flag" />
            <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="English flag" />
            <img onClick={() => toggleLang('IT')} src={ItalianFlag} alt="Italian flag" />


        </div>
    )
}
