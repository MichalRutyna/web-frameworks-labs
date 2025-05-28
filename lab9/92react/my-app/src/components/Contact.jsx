import { useEffect, useState, useRef } from "react";
import Errors from "./Errors"
import "./Contact.css"
const Contact = ({ }) => {
    const [csrfToken, setCsrfToken] = useState("");
    const [data, setData] = useState({
        "email": "",
        "message": ""
    })
    const [errors, setErrors] = useState({
        "email": "",
        "message": ""
    })

    const formRef = useRef();

    useEffect(() => {
        fetch("http://localhost:3000/contact", { credentials: 'include' })
            .then((response) => response.json())
            .then((data) => setCsrfToken(data.csrfToken))
            .catch((error) => console.error("Error fetching CSRF token:", error));
            
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRF-Token": csrfToken
                },
                credentials: 'include'
            });
            const result = await response.json();
            if (result.success) {
                alert(result.success);
                formRef.current.reset();
            } else {
                console.error("Form submission error:", result);
                setErrors({});
                for (const error of result.errors) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        [error.path]: error.msg
                    }));
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>
            <h2>Formularz</h2>
            <form ref={formRef} onSubmit={handleSubmit} noValidate encType="multipart/form-data">
                <input type="hidden" name="_csrf" value={csrfToken} />

                <div className={"form-field " + (errors.message ? "form-field-invalid" : "")}>
                    <label htmlFor="message">Message</label>
                    <textarea className="input" id="message" name="message" rows="4" defaultValue={data.message} autoFocus />
                    <p className="error-message">{errors.message ? <Errors message={errors.message} /> : ''}</p>
                </div>

                <div className={"form-field " + (errors.email ? "form-field-invalid" : "")}>
                    <label htmlFor="email">Email</label>
                    <input className="input" id="email" name="email" type="email" defaultValue={data.email} />
                    <p className="error-message">{errors.email ? <Errors message={errors.email} /> : ''}</p>
                </div>

                <div className="form-field">
                    <label htmlFor="photo">Photo</label>
                    <input className="input" id="photo" name="photo" type="file" />
                </div>
                <div className="form-actions">
                    <button className="btn" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact