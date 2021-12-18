"use strict";

// Ladder Compliance to AS1657
export const complianceDataRung = {
  minMaxVHeight: [300, 6000], // Rung Ladder Min/Max Vertical Height
  ladderWidthRange: [375, 525], // Rung Ladder Min/Max Width
  ladderPitchRange: [70, 90], // Rung Ladder Min/Max Pitch
  maxRungSpc: 300, // Max rung spacing
};

export const complianceDataStep = {
  minMaxVHeight: [300, 6000], // Step Ladder Min/Max Vertical Height
  stepWidthRange: [450, 750], // Step Ladder Min/Max Width
  stepPitchRange: [60, 70], // Step Ladder Min/Max Pitch
  handrailClearance: [550, 750], // Handrail Clearance
  maxStepSpc: 300, // Max step spacing
};

export const complianceDataStair = {
  minMaxVHeight: [300, 4000], // Stair Min/Max Vertical Height
  stairWidthRange: [600], // Stair Min/Max Width
  stairPitchRange: [30, 38], // Stair Min/Max Pitch
  minMaxRiserSpc: [130, 225], // Riser Min/Max Spacing
  minMaxGoingDepth: [215, 355], // Tread Min/Max Going
  maxDepthGap: 30, // Max gap between treads
  minMaxCombination: [540, 700], // Stair Tread Combi Min/Max 2R + G
};
