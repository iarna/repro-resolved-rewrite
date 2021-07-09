To repro, using npm 7:

```
$ npm it
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

added 162 packages, and audited 163 packages in 3s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> poc-resolved-rewrite@1.0.0 test
> node proxy.js & cd test ; rm -rf empty node_modules ; npm i --registry=http://localhost:8080 --cache=empty ; kill $!

Proxy listening on http://localhost:8080
npm ERR! code E404
npm ERR! 404 Not Found - GET http://localhost:8080/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.5.tgz
npm ERR! 404
npm ERR! 404  '@babel/helper-validator-identifier@http://localhost:8080/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.5.tgz' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/rebecca/code/repro-resolved-rewrite/test/empty/_logs/2021-07-09T17_24_32_540Z-debug.log
```
