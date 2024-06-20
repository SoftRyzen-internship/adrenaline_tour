import showdown from 'showdown';

const converter = new showdown.Converter();

const replaceHeadersWithH2 = (html: string): string => {
  return html
    .replace(/<h[1-6](.*?)>/g, '<h2$1>')
    .replace(/<\/h[1-6]>/g, '</h2>');
};

const markdownToHtml = (markdown: string): string => {
  const htmlContent = converter.makeHtml(markdown);
  return replaceHeadersWithH2(htmlContent);
};

export { markdownToHtml };
