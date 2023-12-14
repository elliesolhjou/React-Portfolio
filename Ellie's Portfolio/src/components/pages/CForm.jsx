import React, { useState } from 'react';
import emailjs from 'emailjs-com';
    const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            // Use your EmailJS service ID, template ID, and user ID
            const serviceId = 'your_service_id';
            const templateId = 'your_template_id';
            const userId = 'your_user_id';

            // Set the template parameters with form data
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            // Send the email using EmailJS
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    // Reset form data after successful submission
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        );
    };

    export default ContactForm;
