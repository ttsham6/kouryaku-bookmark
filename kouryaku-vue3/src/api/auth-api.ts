import { AuthState } from "@/types/store-type";
import { UserData } from "@/types/type";
import axios, { AxiosRequestConfig, Method, AxiosResponse } from "axios";

const API_URL = process.env.VUE_APP_API_HOST + "/auth/";
const timeout = 15000;
const headers: { [key: string]: string } = {};

// ユーザー認証リクエスト
export const getToken = async function(
  authState: AuthState,
  data: UserData
): Promise<any> {
  // ヘッダー作成

  headers["Content-Type"] = "application/json";
  // ログイン済みの場合
  if (authState.token) {
    // 取得済みのトークンとユーザーIDを設定
    headers["Authorization"] = "Token ${authState.token}";
    headers["User-Id"] = String(authState.userId);
  }

  // リクエスト設定
  const config: AxiosRequestConfig = {
    url: API_URL,
    method: "post",
    headers,
    timeout,
    data
  };

  return axios(config)
    .then(res => res)
    .catch(err => err);
};

export const deleteToken = async (token: string) => {
  headers["Content-Type"] = "application/json";
  // リクエスト設定
  const config: AxiosRequestConfig = {
    url: API_URL,
    method: "post",
    headers,
    timeout,
    data: {
      token
    }
  };

  return axios(config)
    .then(res => res)
    .catch(err => err);
};