import React from "react";
import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [num, setNum] = useState();
    const [date, setDate] = useState()
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleNumChange = (e) => {
        setNum(e.target.value)
    }

    const hadleDate = (e) => {
        setDate(e.target.value)
    }

    const handleMesChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault();
        setName('');
        setNum('');
        setMessage('');
        setDate('');
    }
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
        const x = pointerX.toFixed(2)
        const y = pointerY.toFixed(2)
        const xp = (pointerX / window.innerWidth).toFixed(2)
        const yp = (pointerY / window.innerHeight).toFixed(2)
        document.documentElement.style.setProperty('--x', x)
        document.documentElement.style.setProperty('--xp', xp)
        document.documentElement.style.setProperty('--y', y)
        document.documentElement.style.setProperty('--yp', yp)
    }
    document.body.addEventListener('pointermove', syncPointer)
    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            numPeople: num,
            date: date,
            message: message
        };
        try {
            const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container contact">
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="catering_test">Catering Service, 42nd Living St, 43043 New York, NY</p>
            <form>
                <input onChange={handleChange} value={name} placeholder="name" type="test" />
                {name}
                <br />
                <input onChange={handleNumChange} value={num} placeholder="How many people" />
                {num}
                <br />
                <input onChange={hadleDate} value={date} placeholder="Date" type="datetime-local" />
                {date}
                <br />
                <input onChange={handleMesChange} value={message} placeholder="Message \ Special requirements" type="test" />
                {message}
                <div className="btn">
                <button onClick={handleClick} ><span> SEND MESSAGE </span> </button>
                <button onClick={handleClear} ><span>CLEAR MESSAGE</span></button>

                </div>            </form>
        </div>
    )
}

export default Contact;