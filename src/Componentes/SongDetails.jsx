import React from 'react'
import { SongArtista } from './SongArtista'
import { SongLyric } from './SongLyric'
import {Message} from './Message'
export const SongDetails = ({Search,lyric,Bio}) => {
    if(!lyric || !Bio)return null;
    return (
        <>
            {lyric.error || lyric.message.header.status_code===404 || lyric.name==="AbortError"?<Message msg={`Error: no existe la cancion "<em>${Search.song}</em>"`} bgcolor="#dc3545"/>:<SongLyric title={Search.song} lyrics={lyric.message.body.lyrics.lyrics_body}/>}
            {Bio.artists?<SongArtista artist={Bio.artists[0]}/>: <Message  msg={`Error: no existe el interprete "<em>${Search.artist}</em>"`} bgcolor="#dc3545"/>}
        </>
    )
}
