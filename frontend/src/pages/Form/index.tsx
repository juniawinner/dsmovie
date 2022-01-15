import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const movie = {
        id: 1,
        image: "https://rederuasp.files.wordpress.com/2017/08/cropped-13041255_1022453481173057_7646186484742796767_o.jpg",
        title: "Não Somos Mendigos",
        count: 2,
        score: 4.5
    };
    
    return (
    <div className="dsmovie-form-container">
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="dsmovie-form">
            <div className="form-group dsmovie-form-group">
                <label htmlFor="email">Informe seu email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group dsmovie-form-group">
                <label htmlFor="score">Informe sua avaliação</label>
                <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="dsmovie-form-btn-container">
                <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
            </div>
        </form >
        <Link to="/">
        <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
    </div >
</div >
    );
}

export default Form;
