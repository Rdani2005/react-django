import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    // Variables and States
    let [note, setNote] = useState(null)

    let { id } = useParams()
    // Functions
    useEffect(() => {
        getNote()
    }, [id])

    let getNote = async () => {

        if (id === 'new') return


        let res = await fetch(`/api/notes/${id}/`)
        let data = await res.json()
        console.log(data);

        setNote(data)
    }

    let updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })


    }

    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })


    }

    let deleteNote = async () => {
        fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })

        // window.location.href = '/'
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }

    let handleSubmit = () => {

        if (id !== 'new' && !note.body) {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id == 'new' && note !== null) {
            createNote()
        }

    }

    return (
        <div className="note">
            <div className="note-header">
                <h3 onClick={handleSubmit}>
                    Update
                </h3>
                <h3>
                    <Link to="/">Go back</Link>
                </h3>

                {id !== 'new' ? (<button onClick={deleteNote}>Delete</button>) : (<button onClick={handleSubmit}>Done</button>)}


            </div>

            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}>

            </textarea>
        </div>
    );
};

export default NotePage;
