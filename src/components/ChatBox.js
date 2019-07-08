import React from 'react'

export const ChatBox=({openForm, closeForm,handleSubmit})=>{
    return(
        <div>
            <button className="open-button" onClick={openForm}>Chat</button>
        <div className="chat-popup" id="myForm" onSubmit={handleSubmit}>
            <form  className="form-container">
                <header id='header1'>
                    <h1>Chat</h1></header>
                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required></textarea>
                <button type="submit" className="btn">Send</button>
                <button type="button" className="btn cancel"  onClick={closeForm}>Close</button>
            </form>
        </div>
        </div>
    )
}