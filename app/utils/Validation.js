function isEmpty(value) {
  if (!value.trim()) {
    return true;
  }
}
function isEmailValidate(value) {
  // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // let reg =
  // 	/^[a-zA-Z0-9] + (?:[._-][a-zA-Z0-9] + ) * @[a-zA-Z0-9-] + (?: \. [a-zA-Z0-9-]{2,4} + ) *\. [a-zA-Z]{2,4}$/; //Umed
  let reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(value.trim()) === false) {
    return true;
  } else {
    return false;
  }
}
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

function isPasswdValidate(password) {
  // let check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  // let check = `/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*).{8,16}$/`;
  const check =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (password.match(check)) {
    return true;
  } else {
    return false;
  }
}

function formatMobileNumber(text, backSpace) {
  if (backSpace === 'backspace') {
    if (text.charAt(text.length - 1) === '-') {
      return text.slice(0, -1);
    } else {
      return text;
    }
  } else if (backSpace === 'write') {
    let cleaned = text.replace(/\D/g, ''); // remove non-digit characters
    let match = null;
    if (cleaned.length > 0 && cleaned.length < 2) {
      return `(${cleaned}`;
    } else if (cleaned.length == 3) {
      return `(${cleaned}) `;
    } else if (cleaned.length > 3 && cleaned.length < 5) {
      match = cleaned.match(/(\d{3})(\d{1,3})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}`;
      }
    } else if (cleaned.length == 6) {
      match = cleaned.match(/(\d{3})(\d{3})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-`;
      }
    } else if (cleaned.length > 6) {
      match = cleaned.match(/(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
    }
    return text;
  }
}
function formatedMobileNumb(text) {
  var cleaned = ('' + text).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '',
      number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
        '',
      );

    return number;
  }
}

function isMobileValidate(text) {
  if (/^\d{10}$/.test(text)) {
    return false;
  } else {
    return true;
  }
}

function isZipCode(text) {
  if (/^\d{5}$/.test(text)) {
    return false;
  } else {
    return true;
  }
}

function isOTP(text) {
  if (/^\d{5}$/.test(text)) {
    return false;
  } else {
    return true;
  }
}

function isURLValidate(text) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );
  return pattern.test(text);
}

function lineLoop(startNumb, loopSize) {
  const lineSize = [startNumb];
  for (var i = 0; i <= loopSize; i++) {
    const randomHeight = Math.floor(Math.random() * 50) + startNumb;
    lineSize.push(randomHeight);
  }
  return lineSize;
}

function isValidteSpacialChar(text) {
  const regex = /^[a-zA-Z0-9 ]+$/;
  if (text === '' || regex.test(text)) {
    return true;
  } else {
    return false;
  }
}

function renderIf(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}
export {
  isEmpty,
  isEmailValidate,
  isPasswdValidate,
  formatMobileNumber,
  formatedMobileNumb,
  isURLValidate,
  isMobileValidate,
  isOTP,
  isZipCode,
  lineLoop,
  isValidteSpacialChar,
  renderIf,
};
