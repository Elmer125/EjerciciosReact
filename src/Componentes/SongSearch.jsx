import React, {useState,useEffect} from 'react'
import { SongDetails } from './SongDetails';
import { SongForm } from './SongForm';
import { Loader } from './Loader';
import {helpHttp} from "../helpers/helpHttp"

export const SongSearch = () => {
    const [Search, setSearch] = useState(null);
    const [lyric, setlyric] = useState(null);
    const [Bio, setBio] = useState(null);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        if(Search===null)return;
        const fetchData=async()=>{
            const {artist,song}=Search;
            let artistUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl=`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=7e280c701e78a5501fe9fc62472451be`;
            setLoading(true);
            const [artistRes, songRes]=await Promise.all([helpHttp().get(artistUrl), helpHttp().get(songUrl),]);
            
            setBio(artistRes);
            setlyric(songRes);
            setLoading(false);
        }
        fetchData();
    }, [Search]);

    const handleSearch=(data)=>{
        setSearch(data);
    }
    
    return (
        <div>
            <h2>Song Search</h2>
            <article className="grid-1-3">  
                <SongForm handleSearch={handleSearch}/>
                {Loading && <Loader/>}
                {Search&&!Loading&& <SongDetails Search={Search} lyric={lyric} Bio={Bio}/>}
            </article> 
        </div>
    )
}
