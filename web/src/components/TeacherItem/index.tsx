import React from "react";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/85643969?v=4" alt="Vinícius Martins" />
                <div>
                    <strong>Vinícius Martins</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores equações de matemática avançada.
                <br/> <br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
            </article>
    );
}

export default TeacherItem;