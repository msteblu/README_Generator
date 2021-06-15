// Create variables for license badges and links
let badge;
let link;

// Create a function that returns a badge and a link based on which license is passed in.
// If there is no license, return an empty string: 
function renderLicense(license) {
  switch(license[0]) {
    case `GNU AGPLv3`:
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      link = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case `GNU GPLv3`:
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case `GNU LGPLv3`:
      link = "https://www.gnu.org/licenses/lgpl-3.0";
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case `Mozilla Public License 2.0`:
      link = "https://opensource.org/licenses/MPL-2.0";
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case `Apache License 2.0`:
      link = "https://opensource.org/licenses/Apache-2.0";
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case `MIT License`:
      link = "https://opensource.org/licenses/MIT";
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case `Boost Software License 1.0`:
      link = "https://www.boost.org/LICENSE_1_0.txt";
      badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case `The Unlicense`:
      link = "https://unlicense.org/";
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      badge = "";
      link = "";
  }
  // Return the respective values for badge and link
  return {
    badge,
    link,
  };
};

// Export the renderLicense function as well as the values for badge/link
module.exports = {
  renderLicense,
  badge,
  link,
}
