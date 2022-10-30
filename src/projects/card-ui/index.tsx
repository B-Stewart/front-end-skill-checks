import { css, Global } from "@emotion/react";

export const CardUI = () => {
  // This isn't the cleanest but it gets something out there for responsiveness.
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #fff;
            font-family: "Roboto", sans-serif;
          }
          .container {
            display: flex;
            height: auto;
            margin: 30px auto;
          }
          .box {
            width: 32%;
            height: auto;
            border: 1px solid #ccc;
            margin-right: 1%;
            background: white;
            border-radius: 10px;
            transition: 0.9;
          }
          .box:hover {
            box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
            cursor: pointer;
          }
          img {
            width: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          h3,
          p {
            text-align: center;
            color: rgb(104, 92, 92);
          }
          p {
            font-size: 15px;
            padding: 0 5px;
          }
          @media (max-width: 800px) {
            .container {
              width: 100%;
            }
          }
          @media (max-width: 600px) {
            .container {
              width: 85%;
              display: block;
            }
            .box {
              width: 100%;
              margin-bottom: 4%;
            }
          }
        `}
      />
      <div className="container">
        <div className="box">
          <img src="https://picsum.photos/seed/picsum1/500/300" />
          <h3>Invesment</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nulla dolorum ducimus, tempora suscipit inventore obcaecati
            architecto rem fuga possimus!
          </p>
        </div>
        <div className="box">
          <img src="https://picsum.photos/seed/picsum2/500/300" />
          <h3>Work Palce</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nulla dolorum ducimus, tempora suscipit inventore obcaecati
            architecto rem fuga possimus!
          </p>
        </div>
        <div className="box">
          <img src="https://picsum.photos/seed/picsum3/500/300" />
          <h3>Creative Progress</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nulla dolorum ducimus, tempora suscipit inventore obcaecati
            architecto rem fuga possimus!
          </p>
        </div>
      </div>
    </>
  );
};
