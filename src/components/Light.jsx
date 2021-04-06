import React, { useState } from 'react'

function Light() {

    const [red, setRed] = useState("red-light");
    const [yellow,setYellow] = useState("yellow-light");
    const [green, setGreen] = useState("green-light");

    let luzRoja = false;
    let luzAmarilla = false;
    let luzVerde = false;


    const clickLuzRoja = () => {
        luzVerde = false;
        luzAmarilla = false;
        luzRoja = true;
        if (luzRoja) {
            setRed('redLightOn');
            setYellow('yellow-light-off');
            setGreen('green-light-off');
        };
    }

    const clickLuzAmarilla = () => {
        luzRoja = false;
        luzAmarilla = true;
        luzVerde = false;
        if (luzAmarilla) {
            setRed('red-light-off');
            setYellow('yellowLightOn');
            setGreen('green-light-off');

        }

    }

    const clickLuzVerde = () => {
        luzRoja = false;
        luzAmarilla = false;
        luzVerde = true;
        if (luzVerde) {
            setRed('red-light-off');
            setYellow('yellow-light-off');
            setGreen('greenLightOn');
        }
    }






    return (
        <>
            <div className="card my-5">
                <div className="card-body mx-auto">
                    <div className="red-light my-1" onClick={clickLuzRoja} id={red}></div>
                    <div className="yellow-light my-2" onClick={clickLuzAmarilla} id={yellow}></div>
                    <div className="green-light my-2" onClick={clickLuzVerde} id={green}></div>

                </div>
            </div>
        </>
    )
}

export default Light
