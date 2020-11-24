import store from "../store";

/**
 *
 * @param {string} contentType
 * @returns { [key: string]: string }
 */
export const createHeaders = (
  contentType: string
): { [key: string]: string } => {
  const token = store.getters.getToken;
  const userId = String(store.getters.getUserId);

  return {
    "Content-Type": contentType,
    Authorization: "Token " + token,
    "User-Id": userId
  };
};
