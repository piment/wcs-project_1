import { w3cHtmlValidator } from 'w3c-html-validator';

const args = process.argv.slice(2);
const type = args[0];

if (args.length === 0) {
  // eslint-disable-next-line no-console
  console.log('No file to validate! Please indicate a file to validate.');
} else {
  // eslint-disable-next-line no-lonely-if
  if (args.length > 1) {
    if (type === 'reporter') {
      const index = { filename: args[1].padStart(2, '../') };
      w3cHtmlValidator.validate(index).then(console.log);
    } else {
      const index = { filename: args[1].padStart(2, '../') };
      w3cHtmlValidator.validate(index).then(w3cHtmlValidator.reporter);
    }
  } else {
    const index = { filename: args[0].padStart(2, '../') };
    w3cHtmlValidator.validate(index).then(w3cHtmlValidator.reporter);
  }
}