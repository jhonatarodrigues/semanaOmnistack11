import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        try{
            const data = {
                title,
                description,
                value
            };
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            alert('Cadastrado com sucesso!');

            history.push('/profile');
        } catch(err) {
            alert(`Houve um erro ao cadastrar`);
        }
    }

    return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" placeholder="Titulo do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <input type="text" placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}