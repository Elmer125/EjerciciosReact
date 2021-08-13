import React , {useState} from 'react'
const initialForm={
    artist:"",
    song:"",
}
export const SongForm = ({handleSearch}) => {
    const [Form, setForm] = useState(initialForm);
    const handleChange=(e)=>{
        setForm({...Form,[e.target.name]:e.target.value})
    };  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!Form.artist || !Form.song){
            alert("Datos Incompletos")
            return;
        }
        handleSearch(Form);
        setForm(initialForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={Form.artist} type="text" name="artist" placeholder="Nombre del interprete"/>
                <input onChange={handleChange} value={Form.song} type="text" name="song" placeholder="Nombre de la cancion"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
