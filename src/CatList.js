// write your CatList component here
import React from 'react'

class CatList extends React.Component {

    render() {
        return(
            <div>

                {this.props.catPics.map(pic => {
                    return(
                        <div key={pic.id}>
                            <img src={pic.url} alt="cat pic"/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CatList