import React, { useEffect, useState } from 'react';
import { UilEnvelopeEdit } from '@iconscout/react-unicons';
import { Snackbar } from '@mui/material';

function Contact() {

    const [open, setOpen] = useState(false)
    function copyToClicpboard(data) {
        setOpen(true)


        // Get the text field
        // var copyText = document.getElementById("myInput");

        // // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(data);
        // setIn(setOpen(false), 10000)

        // Alert the copied text
        // alert("Copied phone number");

    }

    useEffect(()=>{
        setTimeout(()=>setOpen(false),1000)
        // setOpen(false)
    },[open])

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle" style={{cursor:"pointer"}} onClick={()=>copyToClicpboard(7906740699)}>Get in touch<br></br>+91 7906740699</span>

            <div className="contact__container container">
                <div className="contact__wrapper">

                    <a href="mailto:vpetitwork@gmail.com" >
                        <div className="contact__information">
                            <UilEnvelopeEdit className="contact__icon" />

                            <div  onClick={()=>copyToClicpboard("jatindumka@gmail.com")}>
                                <h3  className="contact__title">Email Me</h3>
                                <span className="contact__subtitle">jatindumka@gmail.com</span>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"center" }}
                open={open}
                message="Copied!!!"
                autoHideDuration={2000}
            // key={1 + 1}
            />
        </section>
    )
}

export default Contact;
