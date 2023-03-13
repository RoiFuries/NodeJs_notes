const sharp = require('sharp');

sharp('charmander.png')
    .resize(80)
    .toFile('resizes.png')