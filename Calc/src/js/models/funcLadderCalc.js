"use strict";

class LadderCalc {
  _userInputLadderInfo = {
    verticalHeight: "",
    ladderPitch: "",
    ladderWidth: "",
  };
}

class RungLadderCalc extends LadderCalc {
  _topStileLength = "";
  _ladderBaseLength = "";
  _totalStileLength = "";
  _rungQty = "";
  _rungSpace = "";
}

export default new RungLadderCalc();
