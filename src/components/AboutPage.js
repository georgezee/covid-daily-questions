import React from 'react';
import Button from './Button';

const AboutPage = ({visible, handleClick}) => {

  return (
    <div className="App-about-page" style={{display: visible ? 'block' : 'none' }}>
      Covid-Daily-Questions<br/>
      <hr/>
      <p>
        This is intended as a simple web page that can ask users a daily questionnaire and share the status as a clear indicator on a daily basis.<br/>
      </p>

      <p>
        For further guidance and advice on Covid-19, visit <a href="https://sacoronavirus.co.za/">https://sacoronavirus.co.za/</a>
      </p>

      <p>
        Background:<br/>
        This is an open information initiative that began at the <a href="https://codebridge.org.za/">Cape Town Codebridge</a> community evenings.<br/>
      </p>
      <p>
      Possible use case: : 
      <ol>
        <li>At the entrance of your building, maybe while standing in line, have visitors scan a QR code or enter the short URL on their phone</li>
        <li>Visitor answers the questionnaire on their phone</li>
        <li>At the entrance have the visitor show the result</li>
      </ol>
      </p>
      <br/>
      <a href="https://github.com/georgezee/covid-daily-questions">&lt;View the source on Github/&gt;</a>
      <Button handleClick={handleClick} title="close"/>
    </div>
  )
 }

export default AboutPage;
