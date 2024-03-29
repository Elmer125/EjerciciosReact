import React, { useState , useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';
import { Loader } from './Loader';
import { Message } from "./Message";

export const CrudApi = () => {
    const [Db, setDb] = useState(null);
    const [DataToEdit, setDataToEdit] = useState(null);
    const[error,setError]=useState(null);
    const [loading, setLoading] = useState(false)
    let api=helpHttp();
    let url="http://localhost:5000/santos";

   useEffect(()=>{
       setLoading(true);
       helpHttp().get(url).then(res=>{
           if(!res.err){
               setDb(res);
               setError(null)
           }else{
               setDb(null)
               setError(res)
           }
           setLoading(false);
        })
       
   }, [url]);
   
   

    const createData=(data)=>{
       /*  data.id=Date.now(); */ //EL JSON SERVER LE PONE ID
        let options={
            body:data,
            headers:{"content-type":"application/json"},
        }
        api.post(url,options).then(res=>{
            console.log(res);
            if(!res.err){
                setDb([...Db,res]);
            }else{
                setError(res);
            }
        });
    }
    const updateData=(data)=>{
        let endpoint=`${url}/${data.id}`;
        let options={
            body:data,
            headers:{"content-type":"application/json"},
        }
        api.put(endpoint,options).then(res=>{
            if(!res.err){
                let newData=Db.map(el=>el.id===data.id? data:el);
                setDb(newData);
            }else{
                setError(res);
            }
        });

    }
    const deleteData=(id)=>{
        let isDelete=window.confirm(`¿Estas seguro de eliminar el registro con el '${id}'?`);
        if(isDelete){
            let options={
                headers:{"content-type":"application/json"},
            }
            let endpoint=`${url}/${id}`;
            api.del(endpoint,options).then(res=>{
                if(!res.err){
                let newData=Db.filter(el=>el.id!==id);
                setDb(newData);
                }else{
                    setError(res);
                }
            })
        }else{
            return;
        }
    }
    return (
        <div>
            <h2>Crud Api</h2>
            <article className="grid-1-2">
            <CrudForm createData={createData} updateData={updateData} DataToEdit={DataToEdit} setDataToEdit={setDataToEdit}/>
            {loading && <Loader/> }
            { error && <Message msg={`Error ${error.status}:${error.statusText}`} bgcolor="#dc3545"/>}

            {Db &&<CrudTable 
                data={Db} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData} 
            />}
            </article>
        </div>
    )
}
