import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?' rgb(58, 56, 56)':' rgb(175, 210, 211)',
        border:props.mode==='dark'?'white':'black'
    }
    
    return (
        <>
            <div className='container' >
            <h1>{props.heading}</h1>
                <div className="accordion" id="accordionExample"style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze Your Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                The website offers a tool to analyze text, providing functionalities like counting characters, words, or performing text modifications (e.g., case changes, whitespace removal, etc.).
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use                           </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            The service is entirely free, making it accessible for all users without any subscription or payment barriers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                            The website is designed to be compatible with all modern web browsers, ensuring users can access it seamlessly across different devices and platforms.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

