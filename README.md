[![Build Status](https://travis-ci.com/perkinsjr/AreTheyUp.svg?branch=master)](https://travis-ci.com/perkinsjr/regex-hexcolor)
[![tippin.me](https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@james_r_perkins/F0918E)](https://tippin.me/@james_r_perkins)
[![Donate.Paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/jamesperkinsOSS)
[![Donate.Coffee](https://img.shields.io/badge/Donate-BuyMeCoffee-red.svg)](https://www.buymeacoffee.com/Of6xAMjSK)
[![Donate.Patreon](https://img.shields.io/badge/Donate-Patreon-orange.svg)](https://www.patreon.com/james_perkins)

# Regex git

Regular expression for matching any git based url

## Install

    $ npm install --save regex-git

## Usage

    const regexGit = require('regex-git');
    const https = 'https://github.com/perkinsjr/regex-git.git';
    const git = 'git@github.com:perkinsjr/regex-git.git'

    regexGit.test(https);
    regexGit.test(git);

### License

MIT © [James Perkins](https://jamesperkins.io)


