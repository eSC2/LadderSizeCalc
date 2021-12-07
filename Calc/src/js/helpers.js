"use strict";

// This file contains all text informations. Make sure all texts are within " ".

export const infoDefault = "Default info Text Here (From helpers.js)";

export const infoCalculator = `
  <p>Vertical Height</p>
  <input class="input-field" vHeight/>
  <p>Ladder Width</p>
  <input class="input-field" ladderWidth/>
  <p>Ladder Pitch</p>
  <input class="input-field" ladderPitch/>
  <br />
  <div class="subcontent-calculator-btn">
    <button class="btn-calc">Calculate</button>
  </div>
`;

export const infoRungLadder = `
<div class="subcontent-sub-info">
  <p>
    A twin-stile rung ladder comprises of two stiles and rungs that assists user ascending/descending between levels. It is to be inclined between 70° and 90°, and can be both portable or
    permanently fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be strictly followed for
    compliances. Please contact certified supplier/installer or refer to Australian Standard AS1657 for more information.
  </p>
  <br />
  <ul>
    <li><strong>Vertical Height</strong> - Vertical measurement between levels (300mm - 6000mm)</li>
    <li><strong>Ladder Width</strong> - Desired width of the ladder measuring between stiles (375mm - 525mm)</li>
    <li><strong>Ladder Pitch</strong> - Desired slope of the ladder (70° - 90°)</li>
  </ul>
</div>

<div class="subcontent-calc_result">
${infoCalculator}
</div>

<div class="subcontent-error-message"></div>

<div class="subcontent-image">
  <img class="result-img" src="./src/js/img/rungladderdwg.jpg" alt="Rung Ladder Drawing" />
</div>
`;

// Ladder Compliance to AS1657
export const ladderComplianceData = {
  minMaxVHeight: [300, 6000], // Rung Ladder Min/Max Vertical Height
  ladderWidthRange: [375, 525], // Rung Ladder Min/Max Width
  ladderPitchRange: [70, 90], // Rung Ladder Min/Max Pitch
  maxRungSpc: 300, // Max rung spacing
};
