import React, { useState, useEffect } from 'react'
import { IPhotos } from '../models/IUsers';
import { PhotoService } from '../services/UserService';

interface IState {
    loading: boolean,
    photos: IPhotos[],
    errorMsg: string
}

const Photos: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        photos: [] as IPhotos[],
        errorMsg: ''
    })
    useEffect(() => {
        setState({ ...state, loading: true })
        PhotoService.getAllUsers()
            .then((res) =>
                setState({
                    ...state, loading: false, photos: res.data
                }))
            .catch(err => setState({
                ...state, loading: false, errorMsg: err.message

            }))
        //eslint-disable-next-line
    }, [])
    const { loading, photos, errorMsg } = state
    return (
        <>
            {errorMsg && (<p>{errorMsg}</p>)}
            {loading && <h1>Loading...</h1>}
           { photos.length>0 && photos.map(photo=> (
            <div className="col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={photo.url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-text">AlbumId:{photo.albumId} and Id:{photo.id} </h5>
                    <h5 className="card-title">{photo.title}</h5>
                </div>
            </div>
            </div>
            ))}

        </>
    )

}

export default Photos