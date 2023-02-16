import * as React from 'react'
import {ReactComponent as HeartRed} from './../Icons/heart-red.svg'
import {ReactComponent as HeartBlack} from './../Icons/heart-black.svg'
import {ReactComponent as Clapping} from './../Icons/clapping.svg'


export default function Card({item}) {

    const [clapCount,setClapCount] = React.useState(item.claps);

    const [like,setLike] = React.useState(false);

    const increaseClap = () => {
        setClapCount(clapCount+1);
    }

    const changeLike = () => {
        setLike(!like);
    } 

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
                        <Clapping className='Clapping' onClick={increaseClap}/> {clapCount}
                    </div>
                    <div class="likes">
                        {like && <HeartRed onClick={changeLike} className='HeartRed' />}
                        {!like && <HeartBlack onClick={changeLike} className='HeartBlack' />}

                    </div>

                </div>

            </div>
        </div>
        </div>
      );
}