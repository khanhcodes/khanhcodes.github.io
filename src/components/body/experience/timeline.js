import React from "react";
import "./timeline.css";

function Timeline() {
  return (
    <div class="timeline">
      <header className="section-title">Experience </header>
      <div class="outer">
        <div class="card">
          <div class="info">
            <h3 class="title">
              June 2022: I started my intership at Wisdom Robotics as a machine
              learning intern
            </h3>
            <p>
              - Work on applying graph neural networks (GNNs) and reinforcement
              learning to predict 3D protein structures from amino acid
              sequences{" "}
            </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">
              May 2022: I became a Summer Research Fellow at UGA to conduct
              research on deep learning applications in cell-type identification
            </h3>
            <p>
              - Conduct research on new dimensionality reduction techniques in
              computational biology
              <br />- Construct an autoencoder neural network model, perform
              principal component analysis, and apply deep learning methods to
              optimize a cell-type classification model
            </p>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h3 class="title">
              May 2022: I wrapped up my 3-month internship at UGA's Department
              of Gentics as a machine learning engineer intern
            </h3>
            <p>
              - Build an end-to-end machine learning pipeline that classifies
              cell type from single-cell RNA-seq data with 88% accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
