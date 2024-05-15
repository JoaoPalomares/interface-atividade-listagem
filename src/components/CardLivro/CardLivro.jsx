import './CardLivro.css'

function CardLivro({ livro }) {

    return (
        <div className='card-amazon'>
            <p>Nome do Livro: {livro.nome_produto}</p>
            <p>Data da Venda: {livro.data_venda}</p>
            <p>Edição: {livro.edicao}</p>
            <p>Id Livro: {livro.id_livro}</p>
        </div >
    );
}

export default CardLivro;