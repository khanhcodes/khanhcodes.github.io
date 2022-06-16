import React from "react";
import "./about-detail.css";

function AboutDetail() {
  return (
    <div className="about-detail">
      <header className="section-title">About me </header>
      <p>
        I came from Ho Chi Minh, Vietnam, a bustling city with delicious
        cuisines. I'm currently a rising sophomore pursuing a double major in
        Computer Science and Mathematics with an emphasis on Artificial
        Intelligence at University of Georgia. My primary topic of interest lies
        in machine learning, data analytics, computer vision, bioinformatics,
        and website development. I'm passionate about building impactful
        applications that can advance the healthcare field.
      </p>
      <p>
        My other hobbies include experimenting with new UX/UI trends, singing,
        and trying out new cooking recipes.
      </p>
      <p>
        <b>Languages:</b> Python, Java, JavaScript (familiar)
        <br />
        <b>Web development:</b> HTML, CSS, Bootstrap, Material UI, React.js,
        Node.js, jQuery
        <br />
        <b>Tools:</b> Scikit-learn, Tensorflow, Pandas, Numpy, Keras, Git
      </p>
    </div>
  );
}

export default AboutDetail;
