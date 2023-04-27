import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/public/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/public/images/photo.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/public/images/photo.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/public/images/photo.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/public/images/photo.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 18px;
  background: #fff;
  div{
    button{
      color: rgba(0,0,0,0.6);
      font-size: 13px;
      line-height: 1.2;
      min-height: 40px;
      /* margin: 48px; */
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img{
        width: 40px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        padding: 0 0 0 16px;
        border-radius: 35px;
        border: 1px solid rgba(0,0,0,0.15);
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button{
        img{
          margin: 0 4px 0 -2px;
          width: 30px;
        }
        span{
          color: #70b5f9;
        }
      }
    }
  }

  `

export default Main;