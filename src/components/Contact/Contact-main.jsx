import MapWithMarker from "./Contact";
import './Contact.css'

function Contact_m() {

    return ( 
        <section className="contact">
            <div className="contact_content">
                <h1 className="contact-h1">Контактная информация</h1>
                <div className="contact-txt">
                    <h1>Номера для связи</h1>
                    <h3><strong>Прямой номер:</strong></h3><p>47-12-05</p><br/>   
                    <h3><strong>Офисный номер:</strong></h3><p>+7-908-318-43-00</p>
                    <h3><strong>Связь для общения:</strong></h3><p>+7-913-653-37-55</p>
                    <br/><h1>Адрес:</h1>
                    <p><strong>Гагарина 8/2 офис 112</strong></p>
                </div>
                <div className="content_map">
                    <MapWithMarker></MapWithMarker>
                </div>
                
            </div>
        </section>
    )
}

export default Contact_m;