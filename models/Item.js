export function createItem(content, category) {
  return {
    Content: content,
    IsCompleted: 0,
    Category: category,
  };
}
