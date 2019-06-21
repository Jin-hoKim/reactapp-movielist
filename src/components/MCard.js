
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

class MCard extends Component {

    componentDidMount() {
        // console.log(this.props.torrents);
    }

    static propTypes ={
        id: PropTypes.number.isRequired,
        bgimg: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        genres: PropTypes.array.isRequired,
        rating: PropTypes.number.isRequired,
        synopsis: PropTypes.string.isRequired,
        torrents: PropTypes.array
    }   

    downloadTorrentFile = (fileURL) => {
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = this.props.title
        a.style.display= 'none';
        document.body.appendChild(a);
        a.click();
    }

    render() {
        return (
            <li className="mCard" style={{backgroundImage: `url(${this.props.bgimg})`}}>
                <div className="mCard__box">
                    <MCardPoster url={this.props.poster} />
                    <div className="mCard__info">
                        <MCardTitle title={this.props.title} 
                                    year={this.props.year} 
                                    rating={this.props.rating} />
                        <MCardGenre genres={this.props.genres} />
                        <MCardSynopsis synopsis={this.props.synopsis} />
                        <MCardTorrents fileList={this.props.torrents} 
                                       sendTorrentFile={this.downloadTorrentFile.bind(this)} />
                    </div>
                </div>
            </li>
        )
    }
}

function MCardPoster({url}) {
    return(
        <div className="mCardPoster">
            <img src={url} alt=""/>
        </div>
    );
}

function MCardTitle({title,year, rating}) {
    return(
        <div className="mCardTitle">
            <span className="mCardTitle__title">{title} ({year})</span>
            <span className="mCardTitle__rating">
                <i className="fas fa-star"></i>
                <span>{rating}</span>
            </span>
        </div>
    );
}

function  MCardGenre({genres}) {
    return (
        <ul className="mCardGenres">
            {
                genres.map((data, index)=>{
                    return (
                        <li className="mCardGenre" key={index}>#{data}</li>
                    )
                })
            }
        </ul>
    );
}

function MCardSynopsis({synopsis}) {
    return (
        <LinesEllipsis className="mCardSynopsis"
                       text={synopsis}
                       maxLine='6'
                       ellipsis="..."
                       trimRight
                       basedOn='letters' />
        
    );
}

class MCardTorrents extends Component {

    static propTypes = {
        fileList: PropTypes.array
    }

    getTorrentFile = (fileURL) => {
        this.props.sendTorrentFile(fileURL, this.props.title);
    }

    render() {
        return (
            <ul className="mCardTorrents">
            {
                this.props.fileList.map((data,index)=>{
                    return (
                        <li className="mCardTorrent" 
                            key={index}
                            title={ data.size + ' / ' + data.seeds + ' seeds, ' + data.peers + ' peers' }
                            onClick={()=>this.getTorrentFile(data.url)}>
                                <i className="fas fa-file-download"></i>
                        </li>
                    )
                })
            }    
            </ul>
        )
    }
}


export default MCard;
