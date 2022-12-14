import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";

import './styles.css'

function TeacherList() {

    const [ teachers, setTeachers ] = useState( [] );

    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');

    function searchTeachers( e:FormEvent ) {
        e.preventDefault();

        api.get( 'classes', {
            params: {
                subject,
                week_day,
                time
            }
        } ).then( response => {
            setTeachers( response.data );
        } )
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form onSubmit={searchTeachers} id="search-teachers">

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={ e => { setSubject( e.target.value ) } }
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
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={ e => { setWeekDay( e.target.value ) } }
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
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={ e => { setTime( e.target.value ) } }
                    />
                    <button type="submit"> Buscar </button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers.map( (teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher} />
                    } )
                }
                
            </main>
        </div>
    );
}

export default TeacherList;