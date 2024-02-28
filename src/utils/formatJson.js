const formatJson = (input) => {
  const modifiedString = input.replace(/<b>(.*?)<\/b>/g, "$1");

  const withoutATags = modifiedString.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g, "");

  let parser = new DOMParser();
  let htmlDoc = parser.parseFromString(withoutATags, "text/html");

  // Get all <a> tags
  let aTags = htmlDoc.getElementsByTagName("a");

  // Remove all <a> tags
  for (let i = aTags.length - 1; i >= 0; i--) {
    let aTag = aTags[i];
    aTag.parentNode.removeChild(aTag);
  }

  // Get the modified HTML string without encoding
  let modifiedText = htmlDoc.body.innerHTML;
  modifiedText = modifiedText.replace(/&lt;/g, "<").replace(/&gt;/g, "");

  return modifiedText;
};

export default formatJson;
