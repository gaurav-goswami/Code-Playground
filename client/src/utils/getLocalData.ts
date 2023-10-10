const getLocalData = (_data: string | null): string | null => {
  const localData = localStorage.getItem("set_auth");
  if (localData !== null) {
    return JSON.parse(localData)?._data;
  } else {
    return null;
  }
};

export default getLocalData;
