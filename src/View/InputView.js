const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR, BRIDGE } = require("../Utils/constant");
const BridgeRandomNumberGenerator = require("../Utils/BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (answer) => {
      const size = +answer;
      if (this.bridgeSizeValidate(answer)) {
        return answer;
      }
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      this.readMoving();
    });
  },

  bridgeSizeValidate(size) {
    if (+size < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH < +size) {
      throw new Error(ERROR.BRIDGE_LENGTH_RANGE);
    }
    if (isNaN(+size)) {
      throw new Error(ERROR.BRIDGE_LENGTH_ISNAN);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
      const move = answer;
      if (this.moveValidate(answer)) {
      }
      return move;
    });
  },

  moveValidate(move) {
    if (!["U", "D"].includes(move)) {
      throw new Error(ERROR.MOVE);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
