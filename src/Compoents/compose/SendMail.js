import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import firebase from "firebase/compat/app"
import { db } from '../../firebase';

function SendMail() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onsubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail-header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail-close" />
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="text"
                    {...register("to", { required: true })}
                />

                {
                    errors.to && <p className="sendMail-errors">To required!</p>
                }

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: true })}
                />

                {
                    errors.subject && <p className="sendMail-errors">Subject is required!</p>
                }

                <input
                    name="message"
                    placeholder="Message"
                    type="text"
                    className="sendMail-message"
                    {...register("message", { required: true })}
                />

                {
                    errors.message && <p className="sendMail-errors">Message is required!</p>
                }

                <div className="sendMail-options">
                    <Button
                        className="sendMail-send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
