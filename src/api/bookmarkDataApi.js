export function getBookmarkList() {
  const bookmarkList = JSON.parse(window.localStorage.getItem("bookmark"));

  if (!bookmarkList) {
    return [];
  } else {
    return bookmarkList;
  }
}

export function setBookmarkList(arr) {
  return window.localStorage.setItem("bookmark", JSON.stringify(arr));
}
