function booWho(bool) {
  const isBoolean = typeof bool === "boolean";
  return isBoolean;
}

booWho(null);
booWho([1, 2, 3]);
booWho(1);
booWho("true");