import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/32994727?s=460&u=d0fc5653f26cf03d05e7fae73b50ea655ad7d0f8&v=4" alt="image"/>
                       <div>
                        <strong>Rafael Souza</strong>
                        <span>Filosofia</span>
                       </div>
                   </header>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and 
                   <br/> <br/>
                   typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                   </p>

                   <footer>
                       <p>
                           Preço/Hora
                           <strong>R$ 80,00</strong>
                       </p>
                       <button type="button">
                           <img src={whatsappIcon} alt="Whatsapp"/>
                           Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}

export default TeacherItem;