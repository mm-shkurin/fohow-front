import MapWithMarker from "./Contact";
import './Contact.css'

function Contact_m() {

    return (
        <section className="contact">
            <div className="content">
                <h1 className="contact-h1">Контактная информация</h1>
                <div id='con' className="thrid-content">
                    <MapWithMarker></MapWithMarker>
                    <div className="contact-txt">
                        <h1>Номера для связи</h1>
                        <p><strong>Прямой номер:</strong>47-12-05</p>
                        
                        <p><strong>Офисный номер:</strong>+7-908-318-43-00</p>
                        
                        <p><strong>Связь для общения:</strong>+7-913-653-37-55</p>
                        
                        <p><strong>Адрес:</strong>Гагарина 8/2 офис 112</p>
                        

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact_m;