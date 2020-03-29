import React, { useState, useContext } from 'react';
import Axios from 'axios';
import Button from '../../components/Button/Button';
import Preview from './NewPhoto/Preview';
import AuthStore from '../../store/AuthStore';
import { PHOTOS_UPLOAD } from '../../constants/routing';

const Gallery = () => {
    const [photo, setPhoto] = useState(null);
    // const { loggedInUser } = useContext(AuthStore);

    const upload = () => {
        const uploadData = new FormData(photo);
        uploadData.append('file', photo, photo.name);
        Axios.post(PHOTOS_UPLOAD, {
            uploadData,
        });
    };

    return (
        <div>
            {
                photo
                    ? (
                        <>
                            <Preview imageURL={URL.createObjectURL(photo)} />
                            <Button onClick={() => setPhoto(null)}>Delete</Button>
                        </>
                    )
                    : <input type="file" onChange={(event) => setPhoto(event.target.files[0])} />
            }
            <Button onClick={() => upload()}>Upload</Button>
        </div>
    );
};
export default Gallery;
