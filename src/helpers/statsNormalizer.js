export const normalizeStats = stats => {
  const keys = Object.keys(stats);
  if (!keys.includes("data")) {
    return null;
  }
  const itemKeys = keys.filter(key => key !== "data");
  const items = itemKeys.map(itemKey => ({
    name: itemKey,
    value: stats[itemKey],
  }));
  return {
    data: items,
    title: stats.data,
  };
};
