import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Container } from "./styles";

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <Container>
      <textarea
        type="text"
        name="note"
        id="note"
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <ReactMarkdown source={value} />
    </Container>
  );
}
