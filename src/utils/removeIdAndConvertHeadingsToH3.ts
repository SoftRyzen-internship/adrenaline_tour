const removeIdAndConvertHeadingsToH3 = (html: string): string => {
  let cleanedHtml = html.replace(/(<h[1-6])( id="[^"]*")/g, '$1');

  cleanedHtml = cleanedHtml.replace(/<\/?h[1-6]/g, matched =>
    matched.replace(/\d/, '3'),
  );

  return cleanedHtml;
};

export default removeIdAndConvertHeadingsToH3;
