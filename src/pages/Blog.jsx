import { Link } from 'react-router-dom';
import useFetch from './../componets/useFetch';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {
    const { data, error, loading } = useFetch('https://rickandmortyapi.com/api/character');
    //con serchParams.get(nombre accedemos al valor de la url que queremos
    //con el setSearchParams establecemos el valor
    let [searchParams, setSerchParams] = useSearchParams();

    const handleChange = (e) => {
        setSerchParams({ [e.target.name]: e.target.value })
    }


    if (loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if (error) return (<h1>La pistola de portales no funciona...</h1>)

    console.log(data.results);
    return (
        <div>
            <h2>Blog - Elige tu personaje favorito</h2>

            <input
                type="text"
                name='filter'
                onChange={handleChange}
                className='form-control my-3'
                alt='Buscador'
                value={searchParams.get('filter') || ''}
            />

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