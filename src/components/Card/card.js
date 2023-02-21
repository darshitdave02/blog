import * as React from 'react'
import  HeartRed from '../../Icons/heart-red.svg'
import  HeartBlack from '../../Icons/heart-black.svg'
import {ReactComponent as Clapping} from '../../Icons/clapping.svg'


export default function Card({item}) {

    const [clapCount,setClapCount] = React.useState(0);

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
            <div className="card">

            <img src={require(`../../Images/${item.image}`)} alt={item.image} />

            <div className="details">
                <div className="meta">
                    <p>
                        {item.date}
                    </p>
                    <p>
                        {item.readingTime}
                    </p>
                </div>
                <div className="caption">
                    <p>
                        {item.title}
                    </p>
                </div>
                <div className="description">
                    <p>
                        {item.description}
                    </p>
                </div>
                <div className="interaction">
                    <div className="claps">
                        <Clapping data-testid="clapIcon" className='Clapping' onClick={increaseClap}/>
                        <div data-testid="clap">
                        {clapCount}
                        </div>
                        
                    </div>
                    <div className="likes">
                        {/* {like && <HeartRed data-testid="like" onClick={changeLike} className='HeartRed' />}
                        {!like && <HeartBlack data-testid="like" onClick={changeLike} className='HeartBlack' />} */}

                        <img src={like ? HeartRed : HeartBlack} data-testid="like" onClick={changeLike} className='HeartRed HeartBlack' alt="heartIcon" />

                    </div>

                </div>

            </div>
        </div>
        </div>
      );
}