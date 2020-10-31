class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(msg, key, decode = false) {
    this._checkParameters(msg, key);
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let result = ``;
    for (let i = 0, j = 0; i < msg.length; i++) {
      const char = msg[i].charCodeAt(0) - this._getAsciiCorrection();
      const keyChar = key[j % key.length].charCodeAt(0) - this._getAsciiCorrection();
      if (char >= 0 && char < this._getCharAmoun()) {
        if (decode) {
          result += String.fromCharCode((char + this._getCharAmoun() - keyChar) % this._getCharAmoun() + this._getAsciiCorrection());
        } else {
          result += String.fromCharCode((char + keyChar) % this._getCharAmoun() + this._getAsciiCorrection());
        }
        j++;
      } else {
        result += msg[i];
      }
    }
    return this.isDirect ? result : result.split(``).reverse().join(``);
  }

  decrypt(encrMsg, key) {
    return this.encrypt(encrMsg, key, true);
  }

  _getCharAmoun(writingSystem = `en`) {
    let result = 0;
    if (writingSystem.toLowerCase() === `en`) {
      result = 26;
    } else if (writingSystem.toLowerCase() === `ru`) {
      result = 33;
    }
    return result;
  }

  _getAsciiCorrection(charCase = `upper`) {
    let result = 0;
    if (charCase === `upper`) {
      result = 65;
    } else if (charCase === `lower`) {
      result = 97;
    }
    return result;
  }

  _checkParameters(str, key) {
    if (!str || !key) {
      throw new Error(`Parameters are undefined.`);
    } else if (!str) {
      throw new Error(`String is undefined.`);
    } else if (!key) {
      throw new Error(`Key is undefined.`);
    }
  }
}

module.exports = VigenereCipheringMachine;
