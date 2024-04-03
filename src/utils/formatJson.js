// This function formats JSON input by removing <b> tags and hyperlinks (<a> tags) from the input HTML string.
const formatJson = (input) => {
  // Remove <b> tags and keep their content
  const modifiedString = input.replace(/<b>(.*?)<\/b>/g, "$1");

  // Remove hyperlinks (<a> tags) from the modified string
  const withoutATags = modifiedString.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g, "");

  // Create a DOMParser object to parse the modified string as HTML
  let parser = new DOMParser();
  let htmlDoc = parser.parseFromString(withoutATags, "text/html");

  // Get all <a> tags from the parsed HTML
  let aTags = htmlDoc.getElementsByTagName("a");

  // Remove all <a> tags from the HTML
  for (let i = aTags.length - 1; i >= 0; i--) {
    let aTag = aTags[i];
    aTag.parentNode.removeChild(aTag);
  }

  // Get the modified HTML string without encoding
  let modifiedText = htmlDoc.body.innerHTML;
  modifiedText = modifiedText.replace(/&lt;/g, "<").replace(/&gt;/g, "");

  // Return the final modified text
  return modifiedText;
};

export default formatJson;
