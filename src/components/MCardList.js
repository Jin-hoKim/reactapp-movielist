import React, { Component } from 'react';
import MCard from './MCard';

class MCardList extends Component {

    componentDidUpdate() {
        if( this.props.mlist ) {
            console.log(this.props.mlist);
        } else {
            console.log("nothing..");
        }
    }

    renderMCard = () => {
        return this.props.mlist.map( (data) => {
            return <MCard key={data.id}
                          id={data.id}
                          bgimg={data.background_image}
                          poster={data.medium_cover_image}
                          title={data.title} 
                          year={data.year}
                          runtime={data.runtime}
                          genres={data.genres}
                          rating={data.rating}
                          synopsis={data.synopsis}
                          torrents={data.torrents}
                          />
        })
    }

    render() {
        return (
            <ul className="mCardList">
            {this.props.mlist?this.renderMCard():"now loading.."}
            </ul>
        )
    }
}

export default MCardList;
