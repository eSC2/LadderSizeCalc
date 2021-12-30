"use strict";

// HTML content - Ladder Calculator input fields
export const ladderCalcInput = `
<div class='subcontent-inputFields'>
  <p>Vertical Height</p>
  <input class="input-field" vHeight />
  <p>Internal Width</p>
  <input class="input-field" ladderWidth />
  <p>Desired Pitch</p>
  <input class="input-field" ladderPitch />
  </div>
  <br />
  <div class="subcontent-calculator-btn">
    <button class="btn-calc">Calculate</button>
  </div>
`;

// // HTML content - Rung ladder information
// export const infoRungLadder = `
// <div class="subcontent-sub-info" id="rungLadder">
//   <p>
//     A twin-stile rung ladder comprises of two stiles and rungs that assists user ascending/descending between levels. It is to be inclined between 70° and 90°, and can be both portable or permanently
//     fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be strictly followed for compliances. Please
//     contact certified supplier/installer or refer to Australian Standard AS1657 for more information.
//   </p>
//   <br />
//   <ul>
//     <li><strong>Vertical Height</strong> - Vertical measurement between levels (300mm - 6000mm)</li>
//     <li><strong>Ladder Width</strong> - Desired width of the ladder measuring between stiles (375mm - 525mm)</li>
//     <li><strong>Ladder Pitch</strong> - Desired slope of the ladder (70° - 90°)</li>
//   </ul>
// </div>

// <div class="subcontent-calc_result">${ladderCalcInput}</div>

// <div class="subcontent-error-message"></div>

// <div class="subcontent-image">
//   <img class="result-img" src="./src/js/img/rungladderdwg.jpg" alt="Rung Ladder Drawing" />
// </div>
// `;

// // HTML content - Steps ladder information
// export const infoStepLadder = `
// <div class="subcontent-sub-info" id="stepLadder">
//   <p>
//     A step ladder is similar to rung ladder where it comprises of two stiles and flat steps that assists user ascending/descending between levels, contra to round rungs. It is to be inclined between
//     60° and 70°, and can only be permanently fixed to a structure. The Australia Standard AS1657 sets out requirements for the design, selection, construction and installation of ladder and is to be
//     strictly followed for compliances. Please contact certified supplier/installer or refer to Australian Standard AS1657 for more information.
//   </p>
//   <br />
//   <ul>
//     <li><strong>Vertical Height</strong> - Vertical measurement between levels (300mm - 6000mm)</li>
//     <li><strong>Ladder Width</strong> - Desired width of the ladder measuring between stiles (450mm - 750mm)</li>
//     <li><strong>Ladder Pitch</strong> - Desired slope of the ladder (60° - 70°)</li>
//     <li><strong>Handrail Clearance</strong> - Width measuring between handrails (550mm - 750mm)</li>
//   </ul>
// </div>

// <div class="subcontent-calc_result">${ladderCalcInput}</div>

// <div class="subcontent-error-message"></div>

// <div class="subcontent-image">
//   <img class="result-img" src="./src/js/img/rungladderdwg.jpg" alt="Rung Ladder Drawing" />
// </div>
// `;

// HTML content - Rung ladder result
export function resultDataRungLadder(data) {
  return `
  <div class='subcontent-result'>
  <ul>
      <li>Vertical Height: ${data.verticalHeight}mm</li>
      <li>Internal Width: ${data.ladderWidth}mm</li>
      <li>Ladder Pitch: ${data.ladderPitch}°</li>
      <br>
      <li>Ladder Base Length: ${data.ladderBaseLength}mm</li>
      <li>Top Stile Length: ${data.topStileLength}mm</li>
      <li>Rung Height: ${data.rungSpace}mm</li>
      <li>Rung Quantity: ${data.rungQty} off</li>
      <br>
      <li>Total Ladder Height: ${data.totalStileLength}mm</li>
  </ul>
  <div>
  <br />
  <p><strong>Note</strong>: Result is for guidance only. Always seek professional advices from certified height safety product supplier.</p>
  <br />
  <div class="result-btn">
    <button class="btn-back">Back</button>
    <button class="btn-save">Save</button>
  </div>
  `;
}

// HTML content - Step ladder result
export function resultDataStepLadder(data) {
  return `
  <div class='subcontent-result'>
  <ul>
      <li>Vertical Height: ${data.verticalHeight}mm</li>
      <li>Internal Width: ${data.ladderWidth}mm</li>
      <li>Ladder Pitch: ${data.ladderPitch}°</li>
      <br>
      <li>Ladder Base Length: ${data.ladderBaseLength}mm</li>
      <li>Step Height: ${data.stepSpace}mm</li>
      <li>Step Quantity: ${data.stepQty} off</li>
      <br>
      <li>Total Ladder Height: ${data.totalStileLength}mm</li>
  </ul>
  <div>
  <br />
  <p><strong>Note</strong>: Result is for guidance only. Always seek professional advices from certified height safety product supplier.</p>
  <br />
  <div class="result-btn">
    <button class="btn-back">Back</button>
    <button class="btn-save">Save</button>
  </div>
  `;
}

// HTML content - Staircase result
export function resultDataStair(data) {
  return `
  <div class='subcontent-result'>
  <ul>
      <li>Vertical Height: ${data.verticalHeight}mm</li>
      <li>Internal Width: ${data.ladderWidth}mm</li>
      <li>Stair Slope: ${data.ladderPitch}°</li>
      <br>
      <li>Tread Riser: ${data.riserHeight}mm</li>
      <li>Tread Going: ${data.flightGoing}mm</li>
      <li>Tread Quantity: ${data.riserQty} off</li>
      <br>
      <li>Min. Tread Depth: ${data.flightDepth}mm</li>
  </ul>
  <div>
  <br />
  <p><strong>Note</strong>: Result is for guidance only. Always seek professional advices from certified height safety product supplier.</p>
  <br />
  <div class="result-btn">
    <button class="btn-back">Back</button>
    <button class="btn-save">Save</button>
  </div>
  `;
}
