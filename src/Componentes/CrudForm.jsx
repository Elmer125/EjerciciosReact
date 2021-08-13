import React, {useState,useEffect} from 'react'

const initialForm={
    name:"",
    constellation:"",
    id:null,
}

export const CrudForm = ({createData, updateData, DataToEdit,setDataToEdit}) => {
    const [Form, setForm] = useState(initialForm);

    useEffect(() => {
        if(DataToEdit){
            setForm(DataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [DataToEdit])
    const handleChange=(e)=>{
     setForm({
         ...Form,[e.target.name]:e.target.value,
     })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!Form.name || !Form.constellation){
            alert("Datos Incompletos")
            return;
        }

        if(Form.id===null){
            createData(Form);
        }else{
            updateData(Form);
        }
        handleReset();
    };

    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };
    
    return (
        <div>
            <h3>{DataToEdit? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={Form.name} type="text" name="name" placeholder="Nombre"/>
                <input onChange={handleChange} value={Form.constellation} type="text" name="constellation" placeholder="Constelacion"/>
                <input type="Submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}
