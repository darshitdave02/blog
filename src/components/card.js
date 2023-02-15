import * as React from 'react'
import {ReactComponent as HeartRed} from './../Icons/heart-red.svg'
import {ReactComponent as HeartBlack} from './../Icons/heart-black.svg'
import {ReactComponent as Clapping} from './../Icons/clapping.svg'


export default function Card({item}) {
    return (
        <div>
          {/* {data.map((item) => ( */}
            <div class="card">

            <img src={require(`./../Images/${item.image}`)} alt={item.image} />

            <div class="details">
                <div class="meta">
                    <p>
                        {item.date}
                    </p>
                    <p>
                        {item.readingTime}
                    </p>
                </div>
                <div class="caption">
                    <p>
                        {item.title}
                    </p>
                </div>
                <div class="description">
                    <p>
                        {item.description}
                    </p>
                </div>
                <div class="interaction">
                    <div class="claps">
                        <Clapping className='Clapping'/> {item.claps}
                    </div>
                    <div class="likes">
                        {item.liked && <HeartRed className='HeartRed'/>}
                        {!item.liked && <HeartBlack className='HeartBlack'/>}

                        

                    </div>

                </div>

            </div>
        </div>
        </div>
      );
}