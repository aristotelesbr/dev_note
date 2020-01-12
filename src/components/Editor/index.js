import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import Sidebar from "../Sidebar";
import { Grid, Paper } from "@material-ui/core";

import { Form, ResultPane, Container } from "./styles";

export default function Editor() {
  const editorContainer = { height: "100%" };
  const [draft, setDraft] = useState("");

  function handleChange(event) {
    setDraft(event.target.value);
  }

  return (
    <Container>
      <Grid container dispacing={4} style={editorContainer}>
        <Grid item xs={2} style={editorContainer}>
          <Sidebar />
        </Grid>
        <Grid item xs={5} style={editorContainer}>
          <Paper elevation={3} style={editorContainer}>
            <Form>
              <textarea
                type="text"
                name="editor"
                onChange={e => handleChange(e)}
                value={draft}
                placeholder="O que vamos fazer hoje?"
              />
            </Form>
          </Paper>
        </Grid>
        <Grid item xs={5} style={editorContainer}>
          <Paper elevation={3} style={editorContainer}>
            <ResultPane>
              <div>
                <ReactMarkdown
                  source={draft}
                  escapeHtml={false}
                  sourcePos={true}
                />
              </div>
            </ResultPane>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
