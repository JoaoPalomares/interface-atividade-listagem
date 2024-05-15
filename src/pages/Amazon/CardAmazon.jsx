import styles from './Amazon.module.css';
import NavBar from '../../components/NavBar';
import CardLivro from '../../components/CardLivro/CardLivro';
import AmazonRequests from '../../components/fetchs/AmazonRequests';
import { useEffect, useState } from 'react';

function CardAmazon() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const listaLivros = await AmazonRequests.listarLivros();
                setLivros(listaLivros);
            } catch (error) {
                console.error('Erro ao buscar animais: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <h1>Card Amazon</h1>
            <div className='ctn-livro'>
                {livros ? (
                    // Renderize o seu componente para cada item da lista
                    livros.map(livro => (
                        <CardLivro key={livro.id_livro} livro={livro} />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default CardAmazon;