export const formatText = (text) => {
  if (!text) return text;

  let output = text;

  // highlight using !
  output = output.replace(/!\s*([^.!?\n]+)/g,
    '<span class="bg-yellow-300 font-semibold px-1">$1</span>'
  );    

  // red text
  output = output.replace(
    /\[red\](.*?)\[\/red\]/gi,
    '<span class="text-red-600 font-semibold">$1</span>'
  );

  // bold
  output = output.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );

  return <span dangerouslySetInnerHTML={{ __html: output }} />;
};