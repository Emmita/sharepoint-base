import * as React from "react";
import styles from "./Card.module.scss";
import { ICardProps } from "./ICardProps";

export class Card extends React.Component<ICardProps, {}> {
  public constructor(props: ICardProps, state: any) {
    super(props);
  }

  public render(): React.ReactElement<ICardProps> {
    return (
      <a href={this.props.item.link}>
        <div className={styles.Card}>
          <img className={styles.imgCard} src={this.props.item.img} />
          <h3> {this.props.item.title} </h3>
          <p className={styles.desc}>{this.props.item.description}</p>
        </div>
      </a>
    );
  }
}
