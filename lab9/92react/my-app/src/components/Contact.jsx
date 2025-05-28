import { useEffect, useState, useRef } from "react";
import Errors from "./Errors"

const Contact = ({ data, errors }) => {
    const [csrfToken, setCsrfToken] = useState("");
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
            } else if (result.errors) {
                console.log("Validation errors:", result.errors);
            }
            if (!response.ok) {
                console.error("Form submission error:", result);
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
                    {errors.message ? <Errors message={errors.message} /> : ''}
                </div>

                <div className={"form-field " + (errors.email ? "form-field-invalid" : "")}>
                    <label htmlFor="email">Email</label>
                    <input className="input" id="email" name="email" type="email" defaultValue={data.email} />
                    {errors.email ? <Errors message={errors.email} /> : ''}
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