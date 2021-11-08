const outdent = require('outdent')({ newline: ' ' });

module.exports = (kavithai) => {
    return outdent`
    <p class="text-center"><button id="btncopy" class="btn red" data-clipboard-target="#tamilquotes">${kavithai}</button></p>
    <p class="text-center"><div id="copied"></div></p><br>`;
};