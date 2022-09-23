import React from "react";

import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível quer você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            >

            </PageHeader>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={ [
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                            {value: 'História', label: 'História'},
                            {value: 'Filosofia', label: 'Filosofia'},
                            {value: 'Química', label: 'Química'},
                        ] }
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                    
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" >
                            + Novo horário
                        </button>
                    </legend>
                    <div className="schedule-item">
                        <Select 
                            name="week_day" 
                            label="Dia da semana"
                            options={ [
                                {value: '0', label: 'Doming'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado'},                            
                            ] }
                        />
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time"/>
                    </div>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button" >
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;