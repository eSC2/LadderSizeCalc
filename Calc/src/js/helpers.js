"use strict";

// This file contains all text informations. Make sure all texts are within " ".

export const infoDefault = "Default info Text Here (From helpers.js)";

export const infoRungLadder = `
<h3>Twin-Stile Rung-Type Ladders</h3>
<p>A twin-stile rung ladder comprises of two stiles and rungs that assists user ascending/descending between levels. It is to be inclined between 70° and 90°, and can be both portable or permanently fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be strictly followed for compliances. Please contact certified supplier/installer or visit Australian Standard AS1657 for more information.</p>
<p>Note: The rung ladder calculator only serves as a reference for ladder construction. The author does NOT certify nor responsible for any compliance issues that may arise. Alway refer to a certified supplier for approval and certification.</p>
<p><strong>Type in the following information and click "calculate":</strong></p>
<p>Vertical Height - Vertical measurement between levels (300mm - 6000mm)</p>
<p>Ladder Width - Desired width of the ladder measuring between stiles (375mm - 525mm)</p>
<p>Ladder Pitch - Desired slope of the ladder (70° - 90°)
`;

// Ladder Compliance to AS1657
export const ladderComplianceData = {
  minMaxVHeight: [300, 6000], // Rung Ladder Min/Max Vertical Height
  ladderWidthRange: [375, 525], // Rung Ladder Min/Max Width
  ladderPitchRange: [70, 90], // Rung Ladder Min/Max Pitch
  maxRungSpc: 300, // Max rung spacing
};
