"use strict";

// This file contains all text informations. Make sure all texts are within " ".

export const ladderCalcInput = `
<div class='subcontent-inputFields'>
  <p>Vertical Height</p>
  <input class="input-field" vHeight />
  <p>Ladder Width</p>
  <input class="input-field" ladderWidth />
  <p>Ladder Pitch</p>
  <input class="input-field" ladderPitch />
  </div>
  <br />
  <div class="subcontent-calculator-btn">
    <button class="btn-calc">Calculate</button>
  </div>
`;

export const infoRungLadder = `
<div class="subcontent-sub-info" id="rungLadder">
  <p>
    A twin-stile rung ladder comprises of two stiles and rungs that assists user ascending/descending between levels. It is to be inclined between 70° and 90°, and can be both portable or permanently
    fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be strictly followed for compliances. Please
    contact certified supplier/installer or refer to Australian Standard AS1657 for more information.
  </p>
  <br />
  <ul>
    <li><strong>Vertical Height</strong> - Vertical measurement between levels (300mm - 6000mm)</li>
    <li><strong>Ladder Width</strong> - Desired width of the ladder measuring between stiles (375mm - 525mm)</li>
    <li><strong>Ladder Pitch</strong> - Desired slope of the ladder (70° - 90°)</li>
  </ul>
</div>

<div class="subcontent-calc_result">${ladderCalcInput}</div>

<div class="subcontent-error-message"></div>

<div class="subcontent-image">
  <img class="result-img" src="./src/js/img/rungladderdwg.jpg" alt="Rung Ladder Drawing" />
</div>
`;

export const infoStepLadder = `
<div class="subcontent-sub-info" id="stepLadder">
  <p>
    A step ladder is similar to rung ladder where it comprises of two stiles and flat steps that assists user ascending/descending between levels, contra to round rungs. It is to be inclined between
    60° and 70°, and can only be permanently fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be
    strictly followed for compliances. Please contact certified supplier/installer or refer to Australian Standard AS1657 for more information.
  </p>
  <br />
  <ul>
    <li><strong>Vertical Height</strong> - Vertical measurement between levels (300mm - 6000mm)</li>
    <li><strong>Ladder Width</strong> - Desired width of the ladder measuring between stiles (450mm - 750mm)</li>
    <li><strong>Ladder Pitch</strong> - Desired slope of the ladder (60° - 70°)</li>
    <li><strong>Handrail Clearance</strong> - Width measuring between handrails (550mm - 750mm)</li>
  </ul>
</div>

<div class="subcontent-calc_result">${ladderCalcInput}</div>

<div class="subcontent-error-message"></div>

<div class="subcontent-image">
  <img class="result-img" src="./src/js/img/rungladderdwg.jpg" alt="Rung Ladder Drawing" />
</div>
`;

// Ladder Compliance to AS1657
export const complianceData1 = {
  minMaxVHeight: [300, 6000], // Rung Ladder Min/Max Vertical Height
  ladderWidthRange: [375, 525], // Rung Ladder Min/Max Width
  ladderPitchRange: [70, 90], // Rung Ladder Min/Max Pitch
  maxRungSpc: 300, // Max rung spacing
};

export const complianceData2 = {
  minMaxVHeight: [300, 6000], // Step Ladder Min/Max Vertical Height
  stepWidthRange: [450, 750], // Step Ladder Min/Max Width
  stepPitchRange: [60, 70], // Step Ladder Min/Max Pitch
  handrailClearance: [550, 750], // Handrail Clearance
  maxStepSpc: 300, // Max step spacing
};

export const complianceData3 = {
  minMaxVHeight: [300, 4000], // Stair Ladder Min/Max Vertical Height
  stairWidthRange: [600], // Stair Ladder Min/Max Width
  stairPitchRange: [30, 38], // Stair Ladder Min/Max Pitch
  maxStepSpc: 300, // Max step spacing
};
