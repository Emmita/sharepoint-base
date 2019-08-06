import * as React from "react";
import styles from "./SecondWebPart.module.scss";
import { ISecondWebPartProps } from "./ISecondWebPartProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { PersonComponent } from "./PersonComponent/index";

export default class SecondWebPart extends React.Component<
  ISecondWebPartProps,
  {}
> {
  public render(): React.ReactElement<ISecondWebPartProps> {
    return (
      <div className={styles.secondWebPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <PersonComponent name="Emmanuel" />
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
