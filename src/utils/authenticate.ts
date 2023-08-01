interface IToken {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: string;
  token_type: "Bearer";
}
export const localTokenStoreSave = (token: IToken): void => {
  localStorage.setItem("accessToken", token.access_token ?? "");
  localStorage.setItem("refreshToken", token.refresh_token ?? "");
  localStorage.setItem("expiresIn", token.expires_in ?? "");
  // localStorage.setItem("refreshTokenExpiresIn", <string>token.refresh_token_expires_in ?? 0);
  localStorage.setItem("tokenType", token.token_type ?? "");
};

export const localTokenStoreRemove = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem("refreshTokenExpiresIn");
  localStorage.removeItem("tokenType");
};
