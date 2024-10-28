import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <div className="hero-section about-hero">
        <div className="container">
          <small className="hero-small-text">Welcome to Prestige Properties</small>
          <h1 className="hero-heading">Your Trusted Partner in Real Estate</h1>
          <p className="hero-subtext">
            At Prestige Properties, we believe in helping you find the perfect home for your
            needs. With a passion for real estate and a commitment to our
            clients, we’re here to guide you through every step of the process.
          </p>
        </div>
      </div>
      <div className="about-container">
        <h2>About Prestige Properties</h2>
        <p>
          Prestige Properties is a full-service investment and advisory firm
          advising clients on their real estate strategies. We are recognized
          real estate consultants in Nairobi, Kenya, delivering the insights and
          experience needed to help private and institutional clients achieve
          their real estate investment objectives. Our consulting is guided by
          the regulations of the Estate Agents Act, 1984 CAP 533 Laws of Kenya,
          under which our principals are registered and fully insured.
        </p>

        <h3>What We Do</h3>
        <div className="services">
          <div className="service">
            <h4>Estate Agency</h4>
            <p>
              Our disciplined professionals will assist in all aspects of
              property purchases, sales, and letting processes to ensure that
              value is maximized. We have a relentless commitment to making our
              clients our priority.
            </p>
          </div>

          <div className="service">
            <h4>Facilities Management</h4>
            <p>
              This is the integration of processes, people, and technology to
              ensure the functionality of the built environment. We offer a
              unique model to ensure consistency and responsibility so you can
              focus on your core business.
            </p>
          </div>

          <div className="service">
            <h4>Property Management</h4>
            <p>
              Our property management division endeavors to maximize net income
              by increasing rental income, reducing vacancies, minimizing
              operating expenses, and minimizing arrears.
            </p>
          </div>

          <div className="service">
            <h4>Feasibility Studies</h4>
            <p>
              We are respected for keen insights and straightforward assessments
              regarding a project's viability. We work one-on-one with our
              clients to ensure that each project is specifically tailored to
              the company’s needs.
            </p>
          </div>

          <div className="service">
            <h4>Asset Tagging</h4>
            <p>
              This facilitates quick and easy asset identification, simple
              inventory management, financial reporting, location tracking,
              maintenance management, and loss prevention.
            </p>
          </div>

          <div className="service">
            <h4>Consulting and Accounting</h4>
            <p>
              Today’s real estate sector and accounting environment is
              increasingly complex, with more demands for transparency. We offer
              assistance to help you respond to these demands.
            </p>
          </div>
        </div>

        <h3>Our Values</h3>
        <div className="values">
          <div className="value">
            <h4>You</h4>
            <p>
              Clients come first. We strive to provide exceptional real estate
              solutions, guidance, and recommendations to our clients. We are
              always oriented towards serving your needs.
            </p>
          </div>

          <div className="value">
            <h4>Openness</h4>
            <p>
              Accountability and Responsibility. We are responsible and
              accountable for our work. Our team works together to achieve a
              common goal, improving our performance over time and leading to
              customer satisfaction.
            </p>
          </div>

          <div className="value">
            <h4>Integrity</h4>
            <p>
              Trust and Commitment. We are a comprehensive and objective real
              estate consulting firm. Trust, respect, and effective
              communication are our key elements for building quality
              relationships.
            </p>
          </div>
        </div>

        <h3>Some of Our Experts</h3>
        <div className="experts">
          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farida Mutai"
              />
            </div>
            <h4>Farida Mutai</h4>
            <p>Strategy / Management</p>
          </div>

          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Michael Shalom"
              />
            </div>
            <h4>Michael Shalom</h4>
            <p>Investment Consultant</p>
          </div>

          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Alexander Master"
              />
            </div>
            <h4>Alexarnder Master</h4>
            <p>Feasibility Study</p>
          </div>

          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Emmanuel Onyango"
              />
            </div>
            <h4>Emmanuel Onyango</h4>
            <p>Finance / Admin</p>
          </div>

          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Christine Karimi"
              />
            </div>
            <h4>Christine Karimi</h4>
            <p>Property Management</p>
          </div>
          <div className="expert">
            <div className="image-holder">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Albert Byrone"
              />
            </div>
            <h4>Albert Byrone</h4>
            <p>Sales Associate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;