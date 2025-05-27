import Errors from "./Errors"

const Contact = ({ data, errors, csrfToken }) => {
    return (
        <div>
            <h2>Formularz</h2>
            <form method="post" action="/contact?_csrf={csrfToken}" noValidate encType="multipart/form-data">
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