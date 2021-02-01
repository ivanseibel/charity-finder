import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;

    div {
      line-height: 1.5;
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e2e8f0;
      background-color: white;
      border-radius: 0.5rem;
      display: flex;
      height: auto;
      width: auto;
      flex-direction: column;
      font-size: 2rem;
      padding: 4rem;
      position: relative;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --text-opacity: 1;
      color: rgba(45, 55, 72, var(--text-opacity));

      @media (max-width: 400px) {
        max-width: 90%;
      }

      @media (max-width: 800px) {
        max-width: 90%;
      }

      @media (min-width: 1165px) {
        max-width: 40%;
      }

      button {
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
        font-size: 100%;
        text-transform: none;
        cursor: pointer;
        --bg-opacity: 1;
        background-color: rgba(254, 215, 215, var(--bg-opacity));
        align-self: flex-end;
        border-radius: 9999px;
        font-weight: 700;
        margin-bottom: 1.5rem;
        margin-top: -6rem;
        position: absolute;
        top: 0;
        right: 0;
        --text-opacity: 1;
        color: rgba(197, 48, 48, var(--text-opacity));
        height: 4rem;
        width: 4rem;

        transition: background-color 0.2s;
        transition: color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#f07167')};
          color: white;
        }
      }
    }
  }
`;
