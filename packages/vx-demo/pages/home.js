import React from 'react';
import Page from '../components/page2';
import Footer from '../components/footer';


export default () => (
  <Page>
    <div className="home">
      <div className="hero">
        <h1>React + D3 = VX</h1>
        <a className="btn" href="https://github.com/hshoff/vx">View on Github</a>
      </div>
      <div className="container">
        <div className="content"><p><code>vx</code> is collection of reusable low-level visualization components. <code>vx</code> combines the power of <code>d3</code> to generate your visualization with the benefits of <code>react</code> for updating the DOM.</p></div>
        <div className="content">
          <h3>Goal</h3>
          <p>The goal is to create a library of components you can use to make both your own resuable chart library or your slick custom one-off chart. <code>vx</code> is largely unopinionated and is meant to be build on top of. Keep your bundle sizes down and use only the packages you need.</p>
        </div>
        <div className="content">
          <h3>How?</h3>
          <p>Under the hood, <code>vx</code> is using <code>d3</code> for the calculations and math. If you're creating your own awesome chart library ontop of vx, it's easy to create a component api that hides <code>d3</code> entirely. Meaning your team could create charts as easily as using reusable react components.</p>
        </div>
        <div className="content">
          <h3>But why?</h3>
          <p>Mixing two mental models for updating the DOM is never a good time. Copy and pasting d3 code into <code>componentDidMount()</code> is just that. This collection of components lets you easily build your own reusable visualization charts or library without having to learn d3. No more selections or <code>enter()</code>/<code>exit()</code>/<code>update()</code>.</p>
        </div>
        <div className="content">
          <h3>FAQ</h3>
          <ol className="faq">
            <li>
              <p>What does <code>vx</code> stand for?</p>
              <blockquote>
              <p>vx stands for visualization components.</p>
              </blockquote>
            </li>
            <li>
              <p>Do you plan on supporting animation/transitions?</p>
              <blockquote>
              <p>yup!</p>
              </blockquote>
            </li>
            <li>
              <p>Do I have to use every package to make a chart?</p>
              <blockquote>
              <p>nope! pick and choose the packages you need.</p>
              </blockquote>
            </li>
            <li>
              <p>Can I use this to create my own library of charts for my team?</p>
              <blockquote>
              <p>Please do.</p>
              </blockquote>
            </li>
            <li>
              <p>I like using <code>d3</code>.</p>
              <blockquote>
              <p>Me too.</p>
              </blockquote>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>

    <style jsx>{`
      .btn {
        padding: 8px 20px;
        background-color: #eb4226;
        // border: 3px solid #eb4226;
        border-radius: 30px;
        color: #FFFFFF;
        font-family: "Montserrat";
        text-transform: uppercase;
      }

      .home {
        display: flex;
        flex-direction: column;
        background: white;
      }

      .home h1 {
        font-family: "Montserrat";
        color: #eb4226;
        font-size: 95pt;
        line-height: 1em;
        margin: 0;
        padding: 0;
        opacity: .9;
        margin-top: 280px;
        padding-bottom: 80px;
        letter-spacing: 20px;
        text-transform: uppercase;
        text-align: center;
      }

      .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 80vh;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('static/tiger-gray.png');
      }

      .container {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .content {
        max-width: 640px;
        min-width: 640px;
        margin: 1rem auto 0;
        display: flex;
        flex-direction: column;
      }

      .content h3 {
        margin-bottom: 0;
      }

      blockquote {
        border-left: 2px solid #efefef;
        padding: .5rem 1rem;
        color: #777;
      }

      blockquote p {
        margin: 0;
      }

      .faq {
        min-width: 640px;
      }
    `}</style>
  </Page>
)
