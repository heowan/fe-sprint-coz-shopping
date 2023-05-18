export function getBookmarkList(num) {
  const bookmarkList = JSON.parse(window.localStorage.getItem("bookmark"));

  if (!bookmarkList) {
    return [];
  } else {
    if (num) {
      return bookmarkList.slice(0, num);
    }
    return bookmarkList;
  }
}

export function setBookmarkList(arr) {
  return window.localStorage.setItem("bookmark", JSON.stringify(arr));
}
