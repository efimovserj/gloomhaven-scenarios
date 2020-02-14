import React, { PureComponent } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import Achievement from "types/Achievement";

// Utils
import { scenarios } from "utils/scenarios";

interface Props {
  achievements: Achievement[];
  dispatch: any;
}

class ScenariosList extends PureComponent<Props> {
  render() {
    const { achievements } = this.props;

    return (
      <div className={"lists"}>
        <div>
          {scenarios.map(scenario => (
            <div
              key={scenario.id}
              className={classNames({
                hide:
                  (scenario.requirements || scenario.dependedBy) &&
                  scenario.type === "main"
              })}
            >
              <input
                type="checkbox"
                onChange={() => this.scenarioComplete(scenario.id)}
              />
              {`${scenario.id} (${scenario.code}) ${scenario.name}`}
            </div>
          ))}
        </div>

        <div>
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={classNames({
                hide: !achievement.complete
              })}
            >{`${achievement.name} (${achievement.type})`}</div>
          ))}
        </div>
      </div>
    );
  }

  scenarioComplete = (id: number) => {
    console.log("scenarioComplete", id);
  };
}

const mapStateToProps = (state: any) => {
  return {
    achievements: state.achievements
  };
};

export default connect(mapStateToProps)(ScenariosList);
