import { Link } from 'react-router-dom';
import useFetch from './../componets/useFetch';

const Blog = () => {
    const { data, error, loading } = useFetch('https://rickandmortyapi.com/api/character');

    if (loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if (error) return (<h1>La pistola de portales no funciona...</h1>)

    console.log(data.results);
    return (
        <div>
            <h2>Blog - Elige tu personaje favorito</h2>
            <ul className='list-group'>
                {
                    data.results.map(item => {
                        return (
                            <Link className='list-group-item'
                                key={item.id}
                                to={`/blog/${item.id}`}>
                                {item.name}</Link>)
                    })
                }
            </ul>
        </div>
    );
};

export default Blog;