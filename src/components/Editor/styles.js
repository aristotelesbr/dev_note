import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  height: calc(100% - 80px);

  p {
    padding: 8px;
  }

  h1,
  h2 {
    padding: 8px;
  }

  ul,
  li {
    padding: 8px;
  }

  blockquote {
    color: #666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }
  pre {
    border: 1px solid #ccc;
  }

  tr {
    border-top: 1px solid #c6cbd1;
    background: #fff;
  }

  th,
  td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  hr {
    margin: 6px;
  }

  table tr:nth-child(2n) {
    background: #f6f8fa;
  }
`;

export const ResultPane = styled.div`
  display: flex;
  position: fixed;
  height: calc(100% - 50px);
  right: 0;
  left: 50%;
  bottom: 0;
  overflow: auto;
  padding: 10px;
  padding-left: 20px;
  color: #444;
  line-height: 1.5em;
`;

export const Form = styled.div`
  display: flex;
  position: fixed;
  top: 57px;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  overflow: auto;
  box-shadow: -10px 2px 6px 10px rgba(0, 0, 0, 0.4);

  textarea {
    padding: 20px;
    height: 100%;
    width: 100%;
    border: none;
    overflow: auto;
    outline: none;
    font-size: 16px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }
`;
