import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  //ログイン後のリダイレクト先を指定
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}/home`;
  return (
    <Auth0Provider
      domain={process.env["NEXT_PUBLIC_AUTH0_DOMAIN"]!}
      clientId={process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"]!}
      audience={process.env["NEXT_PUBLIC_AUTH0_AUDIENCE"]!}
      redirectUri={redirectUri}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Auth0Provider>
  );
}

export default MyApp;