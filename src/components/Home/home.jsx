import './home.css'
import house from './../../img/image 9.png'
import doctor from './../../img/doctor 1.png'
import yoga from './../../img/yoga.png'
import List from '../App-list/list';
import video from './../../img/video.mp4';
import circle from './../../img/pngwing.com (1).png'
function Home() {

    return (
        <section className='Home'>
            <div className="content">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter"> FOHOW</h3>
                    </div>
                </div>
                <div className="doctor">
                    <img className="doctor-img" src={doctor} alt="doctor-img" />
                    <div className="doctor-txt">
                        <h1 className='doctor-h1'>FOHOW</h1>
                        <p>
                            Доброго времени суток, дорогой друг! Вы заинтересованы в восстановлении или поддержании вашего здоровья, а может Вас интересуют возможности развития в новом деле? Значит, Вы здесь оказались неслучайно. Вы находитесь на сайте официального представительства корпорации <strong> Fohow RUE17</strong> в городе Омске.
                        </p>
                    </div>
                </div>
                <div className="content_video-1">
                    <video className='video-1' src={video} controls>.
                        Ваш браузер не поддерживает тег <code>video</code>.
                    </video>
                </div>
                
                <div className="list">
                    <h1 className='list-h1'>Новая продукция</h1>
                    <List></List>
                </div>
                <div className="content_video">
                    <video className='video' src={video} controls>.
                        Ваш браузер не поддерживает тег <code>video</code>.
                    </video>
                </div>
                <div className="fohow-omsk">
                    <div className="fohow-omsk_txt">
                        <h1 className='omsk-h1'>
                            FOHOW.OMSK
                        </h1>
                        <p>
                            Представительство открылось <strong>1 марта 2018 года </strong>при поддержке и всесторонней помощи Екатеринбургского филиала и нашего наставника, Амбассадора корпорации Галины Тюриной. За это время наша команда пополнилась новыми, активными, амбициозными партнерами. Многие из них успешно продвигаются по карьерной лестнице <strong>Fohow</strong> и развивают свой бизнес в разных регионах. Количество благодарных потребителей,получающих замечательные результаты по применению продукции <strong>Fohow</strong>, с каждым днем растет, что, несомненно,радует. Все это говорит об огромном доверии к компании.
                        </p>
                    </div>
                    <img className="house" src={house} alt="house-img" />
                </div>
                <div className="shen">
                    <img className="yoga" src={yoga} alt="yoga" />
                    <div className="shen-txt">
                        <h1 className='shen-h1'>Культурa Ян-Шен</h1>
                        <p>
                            Наша команда – это взаимообмен мудростью и опытом разных поколений. Такая команда вдохновляет на желание двигаться вперед, заряжает желанием достигать цели и ставить новые. В такой команде сам становишься активным.В представительстве каждый день идет активная работа по распространению культуры Ян-Шен, чтобы как можно большее количество людей обрело здоровую и счастливую жизнь.Организована система обучения, где каждый партнер получает необходимые ему знания и умения. Постоянно проводятся различные школы по продукции и бизнесу, презентации, мастер-классы, городские мероприятия,обучения базовым техникам работы на БЭМ и ТИМ.
                        </p>
                    </div>
                    <img className="circle" src={circle} alt="circle" />
                </div>

            </div>
        </section>
    )
}

export default Home;