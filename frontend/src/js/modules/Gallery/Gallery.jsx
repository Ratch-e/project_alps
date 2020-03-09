import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Preview from './NewPhoto/Preview';

const Gallery = () => {
    const [photo, setPhoto] = useState(null);

    const choosePhoto = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
    };
    return (
        <div>
            {
                photo
                    ? (
                        <>
                            <Preview imageURL={photo} />
                            <Button onClick={() => setPhoto(null)}>Delete</Button>
                        </>
                    )
                    : <input type="file" onChange={(event) => choosePhoto(event)} />
            }
            <Button>Upload</Button>
        </div>
    );
};
export default Gallery;
