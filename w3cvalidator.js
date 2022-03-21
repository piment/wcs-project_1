import { w3cHtmlValidator } from "w3c-html-validator";

const index = { filename: "index.html" };
w3cHtmlValidator.validate(index).then(console.log);

const contact = { filename: "contact.html" };
w3cHtmlValidator.validate(contact).then(console.log);
