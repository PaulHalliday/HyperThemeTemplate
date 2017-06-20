const homeDir = require('home-dir');
const path = homeDir('/.hyper_plugins/node_modules/my-hyper-theme/backgrounds/');

exports.decorateConfig = config => {
  const pathToBackground = path + 'your-background-here.png';

  console.log(pathToTheme)
    return Object.assign({}, config, {
        foregroundColor: '',
        backgroundColor: '',
        borderColor: '',
        cursorColor: '',
        colors: [
        ],
        termCSS: `
      ${config.termCSS || ''}
    `,
        css: `
      ${config.css || ''}
      .terms_terms {
          background: url(${pathToBackground}) center;
          background-size: cover;
      }
    `
    })
}