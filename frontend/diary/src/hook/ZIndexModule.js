const ZindexModule = (current, self) => {
  if (current === self) {
    return 4;
  } else if (current === 1) {
    if (self === 2) {
      return 3;
    } else {
      return 1;
    }
  }
};

export default ZindexModule;
