export const addRecentTool = (slug: string) => {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("recentTools");
  let tools: string[] = stored ? JSON.parse(stored) : [];

  tools = tools.filter((t) => t !== slug);
  tools.unshift(slug);

  if (tools.length > 5) tools = tools.slice(0, 5);

  localStorage.setItem("recentTools", JSON.stringify(tools));
};

export const getRecentTools = (): string[] => {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem("recentTools");
  return stored ? JSON.parse(stored) : [];
};
