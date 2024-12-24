// 这是后端API的示例代码
export async function handleGithubAuth(code: string) {
  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const data = await tokenResponse.json();
  // 处理令牌并返回自定义JWT
  return generateJWT(data);
}

export async function handleWechatAuth(code: string) {
  // 实现微信登录逻辑
  const accessToken = await getWechatAccessToken(code);
  const userInfo = await getWechatUserInfo(accessToken);
  return generateJWT(userInfo);
}
