import React from 'react'
import { useFetchGifs } from '../hooks/useFetchtGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data, loading}= useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category)
    //         //.then(imgs => setImages(imgs))
    //         .then(setImages);
    // }, [category]);

   
    return (
        <>
            <h1 className='animate__animated animate__fadeIn'>{category}</h1>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {
                    data.map(img => (
                        <GifGridItem {...img} key={img.id} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
