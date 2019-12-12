import React from "react";

class MemeCard extends React.Component {

    render(){
       return (
           <div className="container">
           <div className="card">
               <div className="card-image">
                    <figure className="image is-4by3">
                        <img  alt="meme" src={this.props.memeObject.url}></img>
                    </figure>
               </div>
               <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{this.props.memeObject.name}</p>
                    </div>
               </div>
           </div>
           </div>
       ) 
    }
}

export default MemeCard