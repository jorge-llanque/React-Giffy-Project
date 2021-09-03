import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import {Helmet} from 'react-helmet'

export default function Detail({params}) {
    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    const title = gif ? gif.title : ''

    /*
        ESTE BLOQUE QUE VALIDA LOADING  DEBERÍA IMPLEMENTARLO EN LAS PÁGINAS QUE CONSUMEN DATOS, O TALVEZ COLOCARLO EN UN CUSTOM HOOK
    */
    if(isLoading){
        return (
        <>
          <Helmet>
              <title>Cargando...</title>
          </Helmet>
          <div>Loading...</div>
        </>
        )
    } 
    if(isError) return <Redirect to="/404" />
    if(!gif) return null

    return <>
        <Helmet>
            <title>{title} | Giffy</title>
        </Helmet>
        <h3 className="App-title" >{gif.title}</h3>
        <Gif  {...gif} />
    </>
}