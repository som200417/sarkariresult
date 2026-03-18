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

// utils/helpers.js

// Parse table (| separated)
export const parseTable = (text = "") => {
  const lines = text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return { columns: [], rows: [] };
  }

  const columns = lines[0].split("|").map(col => col.trim());

  const rows = lines.slice(1).map(line =>
    line.split("|").map(cell => cell.trim())
  );

  return { columns, rows };
};


// Parse sections (## heading)
export const parseSections = (text = "") => {
  const sections = {};
  let current = null;

  text.split(/\r?\n/).forEach(line => {
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


// Combine section + table
export const parseSectionTables = (text = "") => {
  const sections = parseSections(text);

  return Object.entries(sections).map(([title, lines]) => ({
    title,
    ...parseTable(lines.join("\n")),
  }));
};