const removeDuplicate = (arr: string[]): string[] => {
  return Array.from(new Set(arr));
};

export default removeDuplicate;
