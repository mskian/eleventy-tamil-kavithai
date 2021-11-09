const outdent = require('outdent')({ newline: ' ' });

module.exports = (copykavithai) => {
    return outdent`
    <br><p class="text-center"><button id="btncopy" class="btn orange" data-clipboard-target="#getkavithai">${copykavithai}</button></p>
    <p class="text-center"><div id="copied"></div></p><br>`;
};