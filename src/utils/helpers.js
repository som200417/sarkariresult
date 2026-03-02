// utils/helpers.js

export const parseList = (text) => {
  if (!text) return [];

  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      if (line.includes(":")) {
        const [label, ...rest] = line.split(":");
        return [label.trim(), rest.join(":").trim()];
      }
      return ["", line];
    });
};

/**
 * Format:
 * Title | https://example.com
 */
export const parseLinkList = (text) => {
  if (!text) return [];

  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [title, url] = line.split("|");
      return {
        title: title?.trim(),
        url: url?.trim(),
      };
    })
    .filter(item => item.title && item.url);
};
export const parseSections = (text = "") => {
  const sections = {};
  let current = null;

  text.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("##")) {
      current = trimmed.replace("##", "").trim();
      sections[current] = [];
    } else if (current && trimmed) {
      sections[current].push(trimmed);
    }
  });

  return sections;
};