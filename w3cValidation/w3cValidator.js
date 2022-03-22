import { w3cHtmlValidator } from 'w3c-html-validator';

const args = process.argv.slice(2);
const type = args[0];

if (args.length === 0) {
  console.log('No file to validate!');
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
    console.log(args)
    const index = { filename: args[0].padStart(2, '../') };
    w3cHtmlValidator.validate(index).then(w3cHtmlValidator.reporter);
  }
}

// const index = { filename: '../index.html' };
// // w3cHtmlValidator.validate(index).then(console.log);

// const contact = { filename: '../contact.html' };
// // w3cHtmlValidator.validate(contact).then(console.log);
