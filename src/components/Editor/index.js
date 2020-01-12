import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";

import { Container, ResultPane, Form } from "./styles";

export default function Editor() {
  const [draft, setDraft] = useState("");

  function handleChange(event) {
    setDraft(event.target.value);
  }

  return (
    <Container>
      <Form>
        <textarea
          type="text"
          name="editor"
          className="editor"
          onChange={e => handleChange(e)}
          value={draft}
        />
      </Form>

      <ResultPane>
        <ReactMarkdown
          className="result"
          source={draft}
          escapeHtml={false}
          sourcePos={true}
        />
      </ResultPane>
    </Container>
  );
}
