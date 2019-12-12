import React from "react";
import MemeCard from '../components/MemeCard'

class ResultsContainer extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
                <div className="results-container">
                    {this.props.memesArray.map(meme => {
                        return < MemeCard key={meme.id} memeObject={meme}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ResultsContainer