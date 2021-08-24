export default function Preloader() {
  return (
    <div id="preloader">
        <div id="loader"></div>
        <style jsx>
            {`
              #preloader {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgb(255 255 255 / 85%);
                  z-index: 999;
              }
              #loader {
                  display: block;
                  position: relative;
                  left: 50%;
                  top: 50%;
                  width: 150px;
                  height: 150px;
                  margin: -75px 0 0 -75px;
                  border-radius: 50%;
                  border: 3px solid transparent;
                  border-top-color: #9370DB;
                  -webkit-animation: spin 2s linear infinite;
                  animation: spin 2s linear infinite;
              }
              #loader:before {
                  content: "";
                  position: absolute;
                  top: 5px;
                  left: 5px;
                  right: 5px;
                  bottom: 5px;
                  border-radius: 50%;
                  border: 3px solid transparent;
                  border-top-color: #BA55D3;
                  -webkit-animation: spin 3s linear infinite;
                  animation: spin 3s linear infinite;
              }
              #loader:after {
                  content: "";
                  position: absolute;
                  top: 15px;
                  left: 15px;
                  right: 15px;
                  bottom: 15px;
                  border-radius: 50%;
                  border: 3px solid transparent;
                  border-top-color: #FF00FF;
                  -webkit-animation: spin 1.5s linear infinite;
                  animation: spin 1.5s linear infinite;
              }
              @-webkit-keyframes spin {
                  0%   {
                      -webkit-transform: rotate(0deg);
                      -ms-transform: rotate(0deg);
                      transform: rotate(0deg);
                  }
                  100% {
                      -webkit-transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      transform: rotate(360deg);
                  }
              }
              @keyframes spin {
                  0%   {
                      -webkit-transform: rotate(0deg);
                      -ms-transform: rotate(0deg);
                      transform: rotate(0deg);
                  }
                  100% {
                      -webkit-transform: rotate(360deg);
                      -ms-transform: rotate(360deg);
                      transform: rotate(360deg);
                  }
              }
            `}
        </style>
    </div>
    // <div
    //   style={{
    //     backgroundColor: "#1e6cc7",
    //     width: "100%",
    //     height: "100vh",
    //     margin: "0",
    //   }}
    // >
    //   <div className="bookshelf_wrapper">
    //     <ul className="books_list">
    //       <li className="book_item first"></li>
    //       <li className="book_item second"></li>
    //       <li className="book_item third"></li>
    //       <li className="book_item fourth"></li>
    //       <li className="book_item fifth"></li>
    //       <li className="book_item sixth"></li>
    //     </ul>
    //     <div className="shelf"></div>
    //     <style jsx>
    //       {`
    //         .bookshelf_wrapper {
    //           position: relative;
    //           top: 60%;
    //           left: 50%;
    //           transform: translate(-50%, -50%);
    //         }

    //         .books_list {
    //           margin: 0 auto;
    //           width: 300px;
    //           padding: 0;
    //         }

    //         .book_item {
    //           position: absolute;
    //           top: -120px;
    //           box-sizing: border-box;
    //           list-style: none;
    //           width: 40px;
    //           height: 120px;
    //           opacity: 0;
    //           background-color: #1e6cc7;
    //           border: 5px solid white;
    //           transform-origin: bottom left;
    //           transform: translateX(300px);
    //           -webkit-animation: travel 2500ms linear infinite;
    //           animation: travel 2500ms linear infinite;
    //         }
    //         .book_item.first {
    //           top: -140px;
    //           height: 140px;
    //         }
    //         .book_item.first:before,
    //         .book_item.first:after {
    //           content: "";
    //           position: absolute;
    //           top: 10px;
    //           left: 0;
    //           width: 100%;
    //           height: 5px;
    //           background-color: white;
    //         }
    //         .book_item.first:after {
    //           top: initial;
    //           bottom: 10px;
    //         }
    //         .book_item.second:before,
    //         .book_item.second:after,
    //         .book_item.fifth:before,
    //         .book_item.fifth:after {
    //           box-sizing: border-box;
    //           content: "";
    //           position: absolute;
    //           top: 10px;
    //           left: 0;
    //           width: 100%;
    //           height: 17.5px;
    //           border-top: 5px solid white;
    //           border-bottom: 5px solid white;
    //         }
    //         .book_item.second:after,
    //         .book_item.fifth:after {
    //           top: initial;
    //           bottom: 10px;
    //         }
    //         .book_item.third:before,
    //         .book_item.third:after {
    //           box-sizing: border-box;
    //           content: "";
    //           position: absolute;
    //           top: 10px;
    //           left: 9px;
    //           width: 12px;
    //           height: 12px;
    //           border-radius: 50%;
    //           border: 5px solid white;
    //         }
    //         .book_item.third:after {
    //           top: initial;
    //           bottom: 10px;
    //         }
    //         .book_item.fourth {
    //           top: -130px;
    //           height: 130px;
    //         }
    //         .book_item.fourth:before {
    //           box-sizing: border-box;
    //           content: "";
    //           position: absolute;
    //           top: 46px;
    //           left: 0;
    //           width: 100%;
    //           height: 17.5px;
    //           border-top: 5px solid white;
    //           border-bottom: 5px solid white;
    //         }
    //         .book_item.fifth {
    //           top: -100px;
    //           height: 100px;
    //         }
    //         .book_item.sixth {
    //           top: -140px;
    //           height: 140px;
    //         }
    //         .book_item.sixth:before {
    //           box-sizing: border-box;
    //           content: "";
    //           position: absolute;
    //           bottom: 31px;
    //           left: 0px;
    //           width: 100%;
    //           height: 5px;
    //           background-color: white;
    //         }
    //         .book_item.sixth:after {
    //           box-sizing: border-box;
    //           content: "";
    //           position: absolute;
    //           bottom: 10px;
    //           left: 9px;
    //           width: 12px;
    //           height: 12px;
    //           border-radius: 50%;
    //           border: 5px solid white;
    //         }
    //         .book_item:nth-child(2) {
    //           -webkit-animation-delay: 416.6666666667ms;
    //           animation-delay: 416.6666666667ms;
    //         }
    //         .book_item:nth-child(3) {
    //           -webkit-animation-delay: 833.3333333333ms;
    //           animation-delay: 833.3333333333ms;
    //         }
    //         .book_item:nth-child(4) {
    //           -webkit-animation-delay: 1250ms;
    //           animation-delay: 1250ms;
    //         }
    //         .book_item:nth-child(5) {
    //           -webkit-animation-delay: 1666.6666666667ms;
    //           animation-delay: 1666.6666666667ms;
    //         }
    //         .book_item:nth-child(6) {
    //           -webkit-animation-delay: 2083.3333333333ms;
    //           animation-delay: 2083.3333333333ms;
    //         }

    //         .shelf {
    //           width: 300px;
    //           height: 5px;
    //           margin: 0 auto;
    //           background-color: white;
    //           position: relative;
    //         }
    //         .shelf:before,
    //         .shelf:after {
    //           content: "";
    //           position: absolute;
    //           width: 100%;
    //           height: 100%;
    //           background: #1e6cc7;
    //           background-image: radial-gradient(
    //             rgba(255, 255, 255, 0.5) 30%,
    //             transparent 0
    //           );
    //           background-size: 10px 10px;
    //           background-position: 0 -2.5px;
    //           top: 200%;
    //           left: 5%;
    //           -webkit-animation: move 250ms linear infinite;
    //           animation: move 250ms linear infinite;
    //         }
    //         .shelf:after {
    //           top: 400%;
    //           left: 7.5%;
    //         }

    //         @-webkit-keyframes move {
    //           from {
    //             background-position-x: 0;
    //           }
    //           to {
    //             background-position-x: 10px;
    //           }
    //         }

    //         @keyframes move {
    //           from {
    //             background-position-x: 0;
    //           }
    //           to {
    //             background-position-x: 10px;
    //           }
    //         }
    //         @-webkit-keyframes travel {
    //           0% {
    //             opacity: 0;
    //             transform: translateX(300px) rotateZ(0deg) scaleY(1);
    //           }
    //           6.5% {
    //             transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    //           }
    //           8.8% {
    //             transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    //           }
    //           10% {
    //             opacity: 1;
    //             transform: translateX(270px) rotateZ(0deg);
    //           }
    //           17.6% {
    //             transform: translateX(247.2px) rotateZ(-30deg);
    //           }
    //           45% {
    //             transform: translateX(165px) rotateZ(-30deg);
    //           }
    //           49.5% {
    //             transform: translateX(151.5px) rotateZ(-45deg);
    //           }
    //           61.5% {
    //             transform: translateX(115.5px) rotateZ(-45deg);
    //           }
    //           67% {
    //             transform: translateX(99px) rotateZ(-60deg);
    //           }
    //           76% {
    //             transform: translateX(72px) rotateZ(-60deg);
    //           }
    //           83.5% {
    //             opacity: 1;
    //             transform: translateX(49.5px) rotateZ(-90deg);
    //           }
    //           90% {
    //             opacity: 0;
    //           }
    //           100% {
    //             opacity: 0;
    //             transform: translateX(0px) rotateZ(-90deg);
    //           }
    //         }
    //         @keyframes travel {
    //           0% {
    //             opacity: 0;
    //             transform: translateX(300px) rotateZ(0deg) scaleY(1);
    //           }
    //           6.5% {
    //             transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
    //           }
    //           8.8% {
    //             transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
    //           }
    //           10% {
    //             opacity: 1;
    //             transform: translateX(270px) rotateZ(0deg);
    //           }
    //           17.6% {
    //             transform: translateX(247.2px) rotateZ(-30deg);
    //           }
    //           45% {
    //             transform: translateX(165px) rotateZ(-30deg);
    //           }
    //           49.5% {
    //             transform: translateX(151.5px) rotateZ(-45deg);
    //           }
    //           61.5% {
    //             transform: translateX(115.5px) rotateZ(-45deg);
    //           }
    //           67% {
    //             transform: translateX(99px) rotateZ(-60deg);
    //           }
    //           76% {
    //             transform: translateX(72px) rotateZ(-60deg);
    //           }
    //           83.5% {
    //             opacity: 1;
    //             transform: translateX(49.5px) rotateZ(-90deg);
    //           }
    //           90% {
    //             opacity: 0;
    //           }
    //           100% {
    //             opacity: 0;
    //             transform: translateX(0px) rotateZ(-90deg);
    //           }
    //         }
    //       `}
    //     </style>
    //   </div>
    // </div>
  );
}
