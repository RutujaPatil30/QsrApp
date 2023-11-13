const mockStorage = {} as { [key: string]: any };

const getItem = async (
  key: string,
): Promise<string | null> => Promise.resolve(mockStorage?.[key] ?? null);

const removeItem = async (key: string): Promise<void> => {
  delete mockStorage[key];
  return Promise.resolve();
};

const setItem = async (key: string, value: string): Promise<void> => {
  mockStorage[key] = value;
  return Promise.resolve();
};

export default {
  getItem,
  removeItem,
  setItem,
};
