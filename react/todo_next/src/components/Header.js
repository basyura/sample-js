import React from "react";

const Header = () => {
  console.log("Header#start");

  return (
    <div>
      <ul>
        <li>
          <a href="https://qiita.com/rioc/items/8723c236e10d989e827d">
            create-react-appを使ってReactでToDoリストを作成するぞ
          </a>
        </li>
        <li>
          <a href="https://qiita.com/popose/items/e4df7c5e7117a967b075">
            React Hooks と Context で手軽に状態管理がしたい
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
