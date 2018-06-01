import React from 'react';
import splash from '../images/splash.jpg';

export default function Home() {
  return (
    <section className="hero has-background-info body-content">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
          </h2>
            <img src={splash} />
          <p className="subtitle has-text-white">
            "Life... dreams... hope... Where do they come from? And where do they go...?"
          </p>
        </div>
      </div>
    </section>
  );
}
