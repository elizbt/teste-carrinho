import styled from "styled-components";

  export const Container = styled.div`
    display: flex;
    justify-content: center;
    
    .cart {
      margin: 30px 30px;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      border-radius: 15px;
      width: 30vw;
    }
    
    .freeShippingButton {
         display: flex;
         justify-content: flex-end;
        button {
          padding: 5px 5px;
          margin: 3px;
        }
    }

    .header {
      text-align: center;
      font-size: 14px;
      border-bottom: 2px solid #e6e6e6;
      padding: 15px;
    }

    .products {
       display: flex;
       margin-left: 20px;
       height: 145px;

         img {
          width:8vw;
          height:8vw;
          border: solid 2px #e6e6e6;
        }

        .details {
          font-size: 14px;
          margin-top: 23px;
          margin-left: 10px;
        }
    }

    .footer{
        display: flex;
        flex-direction: column;
        text-align: center;
        border-top:solid 2px #e6e6e6;
       
        button {
            width: 25vw;
            padding: 15px;
            border-radius: 7px;
            background:#3366ff;
            color: #fff;
            font-size: 21px;
            border: none;
            font-weight:bold;
            margin-top: 10px;
            margin-bottom: 13px;
          
        }

        button:hover {
          background-color:#809fff;
        }
      }

      .amount {
        display: flex;
        justify-content: space-between;
        margin: 13px 14px 2px 12px; 
        font-weight:bold;
        font-size: 18px;
        padding-bottom: 20px;
      }

      .discount {
        margin-bottom: 18px;
        background-color:#99ff99;
        padding: 10px;
        border-radius:20px;
        width: 25vw;
        margin-left: 35px;
        color:#006600;
      }

  `
