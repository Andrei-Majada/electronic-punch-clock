import React from "react";
import { Grid, List } from "semantic-ui-react";
/**
 * Card container used to display clocks list in user dashboard and admin dashboard.
 * @param {object} clock
 */
const ListExampleDivided = (clock) => (
  <List divided verticalAlign="middle">
    <List.Item>
      <div className="clocks">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <h4>
                <b>{clock.user.name}</b>
              </h4>
            </Grid.Column>
            <Grid.Column>
              {clock.clock.timeRegistered.substr(0, 10)}
            </Grid.Column>
            <Grid.Column>
              <h4>{clock.clock.timeRegistered.substr(10)}h</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </List.Item>
  </List>
);
export default ListExampleDivided;
