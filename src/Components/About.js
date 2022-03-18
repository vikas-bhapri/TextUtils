import React from 'react'

export default function About(props) {
  return (
    <>
        <div className="container my-4">
            <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>About Us</h1>
            <p style={{color: props.mode === 'light' ? 'black' : 'white', textAlign: "justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam blanditiis, ex quo facilis exercitationem suscipit vel minima, deleniti corrupti tempore adipisci eaque iste magnam? Cumque vero iusto asperiores illo voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi, facilis unde tenetur accusamus molestias cum laudantium facere! Voluptatibus animi tenetur minus dolor dolore perspiciatis vel quas debitis facilis quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste officia eos dolorem, reiciendis magnam quas ipsum non culpa rerum ratione. Sit earum temporibus architecto praesentium tempora optio nihil asperiores nemo.
            </p>
        </div>
    </>
  )
}
