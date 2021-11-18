/////////////////////////////////

OVERVIEW

Web-Based Calculator for Height Safety Products

The calculator needs to be able to CALCULATE A LADDER DIMENSION based on INPUT FROM USER, in ACCORDANCE & COMPLIES TO AUSTRALIAN STANDARD, by height, width and pitch. It will then recommend user which TYPE OF LADDER is best suitable complete with RESULT DIMENSIONS SHOWN as well as IMAGES CORRESPONDING to it. A simple GUIDELINE FROM AUSTRALIAN STANDARD will be available on site as a checklist.

Ladder type involved includes RUNG LADDER, STEP LADDER and STAIR.

The calculator needs to be EXPENDIBLE where future implementations can be done in accordance to user's need.

/////////////////////////////////

TECHNICAL ASPECT

- MVC Architecture
- Object Oriented Programming
- Helper file for information organization
- information handling with import/export

/////////////////////////////////

// OBJECTS //

australianStandard

- rungLadder
  - minMaxHeight: Array
  - minMaxInnerWidth: Array
  - minMaxPitch: Array
  - minMaxRungHeight: Array
- stepLadder
  - minMaxHeight: Array
  - minMaxInnerWidth: Array
  - minMaxPitch: Array
  - minMaxStepHeight: Array
- stairCase
  - minMaxHeight: Array
  - minMaxInnerWidth: Array
  - minMaxPitch: Array
  - minMaxStepHeight: Array

ladderTypes

- rungLadder
  - verticalHeight: Number
  - ladderWidth: Number
  - ladderPitch: Number
  - ladderBaseLength: Number
  - ladderTopStileLength: Number
  - rungQuantity: Number
  - rungSpacing: Number
  - totalStileLength: Number
  - totalRungLength: Number
- stepLadder
  - verticalHeight: Number
  - ladderWidth: Number
  - ladderPitch: Number
  - ladderBaseLength: Number
  - stepQuantity: Number
  - stepSpacing: Number
  - totalStileLength: Number
  - totalStepLength: Number
- stairCase
  - verticalHeight: Number
  - stairWidth: Number
  - stairPitch: Number
  - stairBaseLength: Number
  - stepQuantity: Number
  - stepSpacing: Number
  - totalStileLength: Number
  - totalStepLength: Number

handrailTypes

- inLineHandrail
  - minBaseStart: Number
  - maxBaseStart: Number
- continuousHandrail
  - minBaseStart: Number
  - maxBaseStart: Number
- extendibleHandrail
  - minBaseStart: Number
  - maxBaseStart: Number

// FUNCTIONS //

calculationFormulas

- ladderCalc
  - radianConvert: Number - Return Value
  - calcBaseStileLength: Number - Return Value
  - calcRungSpace: Number - Return Value
  - calcRungQuantity: Number - Return Value
  - calcTotalLadderLength: Number - Return Value
- materialCalc
  - MaterialTotalStile: Number - Return Value
  - MaterialTotalRung: Number - Return Value

dataCheck

- inputCheck
- complianceCheck
- ladderTypeCheck

renderView

- renderCalcResult
- renderCorrImg
- renderErrorMsg
