import React from 'react';
import './Style.css';
import Speaker1 from '../assets/speaker1.jpg';
import Speaker2 from '../assets/speaker2.jpg';
import Speaker3 from '../assets/speaker3.jpg';
import Speaker4 from '../assets/speaker4.jpg';
import Speaker5 from '../assets/speaker5.jpg';
import Speaker6 from '../assets/speaker6.jpg';

const Speakers = () => {
  return (
    <div className='container mt-5'>
      <div className='row mt-5 '>
        <div className='col-lg-12 col-sm-12 mt-5 text-center'>
          <i className='fas fa-users fa-4x text-warning mt-3'></i>
          <h1 className='speaker-title mt-3'>Speakers</h1>
          <p className='mt-3`'>
            Meet our<i className='text-warning'> professonals</i>
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker1} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">ERIC BOLDY</h5>
          <h5 className="text-secondary  mt-3 speaker-title">Project Manager</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker2} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">JAMES ROCK</h5>
          <h5 className="text-secondary  mt-3 speaker-title">VP Product @ Flopbox</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker3} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">ANDREA WARRAETY</h5>
          <h5 className="text-secondary  mt-3 speaker-title">Designer @ Winstagrap</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker4} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">MARTIN BRANSON</h5>
          <h5 className="text-secondary  mt-3 speaker-title">Evangelist @ Doogle</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker5} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">AMY WARNER</h5>
          <h5 className="text-secondary  mt-3 speaker-title">Graphic Designer</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <div className="col-lg-4 col-sm-12 mt-4 mb-3 text-center">
        <img src={Speaker6} alt="speakerimg" className="rounded-circle text-center"/>
          <h5 className="text-warning   mt-3 speaker-name">ALEC KROSOVIC</h5>
          <h5 className="text-secondary  mt-3 speaker-title">Project Manager</h5>
          <p className="text-center speaker-info">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's standard dummy text<br/> ever since the 1500s</p> 
          <a href="/"><i className="fab fa-facebook-f text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-twitter text-warning mr-3 fa-lg"></i></a>
          <a href="/"><i class="fab fa-instagram text-warning mr-3 fa-lg"></i></a>
        </div>
        <a href="/" className="btn btn-transparent border-warning mb-4 mt-4 px-5 mx-auto">Speakers Style</a>
      </div>
    </div>
  );
};

export default Speakers;
