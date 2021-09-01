import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

//    const [images, setimages] = useState([]);
  
const {data, loading} = useFetchGifs(category);





    return (
        <>
          <h3>{category}</h3>
          {loading && <p>loading</p>}
        <div className="card-grid">
            {
                data.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}/>
                 ) )
            }  
            
               
            
        </div>
                </>
    )
}
