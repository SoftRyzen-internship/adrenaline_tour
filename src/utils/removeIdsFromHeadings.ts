const removeIdsFromHeadings = (html: string): string => {
  return html.replace(/(<h[1-6])( id="[^"]*")/g, '$1');
};

export default removeIdsFromHeadings;
