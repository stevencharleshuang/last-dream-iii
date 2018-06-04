import React from 'react';
import splash from '../images/splash.jpg';

export default function Home() {
  return (
    <section className="hero has-background-info body-content">
      <div className="hero-body">
        <div className="container">
          <img id="splash" src={splash} />
          <p className="subtitle has-text-white">
            <span id="subtitle">"Life... dreams... hope... Where do they come from? And where do they go...?"</span>
          </p>
        </div>
      </div>
    </section>
  );
}
