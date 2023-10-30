import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { NextPage } from "next";

import React, { useEffect, useState } from "react";
// recoil
import { useRecoilValue } from "recoil";
import tokenState from "../recoil/atoms/tokenState";

const BlogPage: NextPage = () => {
  const token = useRecoilValue(tokenState);
  // stateを追加
  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  // 入力されたデータをパラータとして送信するための
  // 新規登録用のAPIコールメソッド
  const onClick = () => {
    // const params = {
    //   title: title,
    //   caption: caption,
    // };
    // console.log(token);

    // axios
    //   .post("http://localhost:3000/api/v1/posts", params, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


      const params = {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: title,
          caption: caption,
        })
    };
    console.log(token);
    fetch("http://localhost:3000/api/v1/posts", params)
        .then(response => response.json())



    // fetch('/api/test'
    //   ,{
    //     method: 'GET',
    //     headers: {
    //       'Authorization': 'Bearer '+token,
    //       'Content-Type': 'application/json',
    //     }
    //   }
    // ).then(async (response)=>{
    //   console.log('response : ', response);
    //   console.log('json : ', await response.json());
    // }).then((data)=>{
    //   console.log('data : ', data);
    // }).catch((error) => {
    //   console.error('error : ', error);
    // });


  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="">タイトル</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          onChange(e, setTitle);
        }}
      />
      <br />
      <label htmlFor="">本文</label>
      <input
        type="text"
        value={caption}
        onChange={(e) => {
          onChange(e, setCaption);
        }}
      />
      <br />
      <button onClick={onClick}>新規投稿</button>
    </div>
  );
};

export default BlogPage;