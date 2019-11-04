import React, { memo } from "react";
import classes from "./Sidebar.module.css";
import PanelsList from "../PanelsList";
import Panel from "components/Panel";
import AddPanel from "components/AddPanel";
import Annotation from "components/Annotation";
import NetworkView from "components/NetworkView";
import TimeSeriesView from "components/TimeSeriesView";
import TreeView from "components/TreeView";
import SyncAll from "components/SyncAll";

const Sidebar = () => (
  <div className={classes.Sidebar}>
    <PanelsList>
      <Panel title="DATA" flexOpen={true}>
        <TreeView />
      </Panel>
      <Panel title="ANNOTATION">
        <Annotation />
      </Panel>
      <Panel title="INFO" />
      <Panel title="EXPORT" open={false} />
      <Panel title="IMPORT" open={false} />
    </PanelsList>
    <PanelsList>
      <Panel title="SYNCHRONIZE ALL">
        <SyncAll />
      </Panel>
      {[1, 2, 3].map(e => (
        <Panel
          title={`TIME SERIES VIEW ${e}`}
          subTitle="based on Aggregation i"
          icon="ChartIcon"
          open={e === 2}
          view_type="time"
          view_id={e}
          key={e}
        >
          <TimeSeriesView view_id={1} />
        </Panel>
      ))}
      <Panel
        title="NETWORK VIEW 1"
        subTitle="based on Aggregation ii"
        icon="NetworkIcon"
        view_type="network"
        view_id={1}
      >
        <NetworkView view_id={1} />
      </Panel>
      <AddPanel />
    </PanelsList>
  </div>
);

export default memo(Sidebar);
