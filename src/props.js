import React from 'react'

// function Car(props) {
//   return (
//       <div>
//             <h2>I am a { props.brand }!</h2>;
//   <h3>I Can ride at the speed of { props.speed }</h3>;
//   <h4>you can buy me with { props.price }</h4>
//       </div>
//   )
// }

class Car extends React.Component {

      render() {
            return (
                  <div>
                  <h2>I am a { this.props.brand }!</h2>
        <h3>I Can ride at the speed of { this.props.speed }</h3>
        <h4>you can buy me with { this.props.price }</h4>
        
            </div>
            )
      }
}

export default Car