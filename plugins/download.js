const outdent = require('outdent')({ newline: ' ' });

module.exports = (imagename) => {
    return outdent`
    <br><p class="text-center"><a href="/images/${imagename}-1000w.jpeg" class="btn black" download="${imagename}.jpeg">📥 Download image</a><br>`;
};