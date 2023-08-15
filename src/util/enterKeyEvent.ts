export const enterKeyEvent = (e: React.KeyboardEvent, func: () => void) => {
  if (e.key === "Enter") func();
};
