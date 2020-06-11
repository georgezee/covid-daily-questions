import React from 'react';
import Button from './Button';

const AboutPage = ({visible, handleClick}) => {

  return (
    <div className="App-about-page" style={{display: visible ? 'block' : 'none' }}>
      Are you feeling fine?
      <hr/>
      <p>
        Answer these Covid questions daily - and show at the entrance to your school, work or other public place (from a safe distance!).<br/>
        Show that you've considered your health and the safety of others by showing the status of your questions.
      </p>

      <p>
        For further guidance and advice on Covid-19, visit <a href="https://sacoronavirus.co.za/">https://sacoronavirus.co.za/</a>
      </p>

      <p>
        Background:<br/>
        This is an open initiative that began at the <a href="https://codebridge.org.za/">Cape Town Codebridge</a> community evenings.<br/>
      </p>
      <br/>
      <a href="https://github.com/georgezee/covid-daily-questions">&lt;View the source on Github/&gt;</a>
      <Button handleClick={handleClick} title="close"/>
    </div>
  )
 }

export default AboutPage;
