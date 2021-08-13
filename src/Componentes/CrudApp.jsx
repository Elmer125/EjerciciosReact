import React, { useState } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

const initialDb=[
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso",
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragón",
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"Cisne",
    },
    {
        id:4,
        name:"Shun",
        constellation:"Andromeda",
    },
    {
        id:5,
        name:"Ikki",
        constellation:"Fenix",
    },
];

export const CrudApp = () => {
    const [Db, setDb] = useState(initialDb);
    const [DataToEdit, setDataToEdit] = useState(null);
    const createData=(data)=>{
        data.id=Date.now();
        setDb([...Db,data]) //combinacion de datos con el estado y la variable que se pasa 
    }
    const updateData=(data)=>{
        let newData=Db.map(el=>el.id===data.id? data:el);
        setDb(newData);
    }
    const deleteData=(id)=>{
        let isDelete=window.confirm(`¿Estas seguro de eliminar el registro con el '${id}'?`);
        if(isDelete){
            let newData=Db.filter(el=>el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    }
    return (
        <div>
            <h2>Crud App</h2>
            <article className="grid-1-2">
            <CrudForm createData={createData} updateData={updateData} DataToEdit={DataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={Db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
            </article>
        </div>
    )
}
