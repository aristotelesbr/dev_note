import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import Button from "@material-ui/core/Button";

import { TreeArea, NewFolder } from "./styles";

export default function FileSystemNavigator() {
  return (
    <>
      <TreeArea>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
            <TreeItem nodeId="5" label="Webstorm" />
            <TreeItem nodeId="6" label="Webstorm" />
            <TreeItem nodeId="7" label="Webstorm" />
            <TreeItem nodeId="8" label="Webstorm" />
            <TreeItem nodeId="9" label="Webstorm" />
            <TreeItem nodeId="10" label="Webstorm" />
            <TreeItem nodeId="11" label="Webstorm" />
            <TreeItem nodeId="12" label="Webstorm" />
            <TreeItem nodeId="13" label="Webstorm" />
          </TreeItem>
        </TreeView>
      </TreeArea>
      <NewFolder>
        <Button
          variant="contained"
          color="primary"
          classes={{ "align-self": "flex-end" }}
          startIcon={<BookOutlinedIcon />}
        >
          Criar Caderno
        </Button>
      </NewFolder>
    </>
  );
}
