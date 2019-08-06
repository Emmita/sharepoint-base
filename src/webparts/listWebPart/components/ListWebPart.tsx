import * as React from "react";
import styles from "./ListWebPart.module.scss";
import { IListWebPartProps } from "./IListWebPartProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { IListWebPartState } from "./IListWebPartState";
import { Card } from "./Card/Card";

export default class ListWebPart extends React.Component<
  IListWebPartProps,
  IListWebPartState
> {
  public constructor(props: any, state: any) {
    super(props);
    this.state = {
      list: []
    };
  }

  public componentDidMount() {
    this._getDummyData();
  }

  public render(): React.ReactElement<IListWebPartProps> {
    return (
      <div className={styles.listWebPart}>
        <h2>My Links</h2>
        <div className={styles.grid}>
          {this.state.list.map(item => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    );
  }

  private _getDummyData(): void {
    const dummyData = [
      {
        title: "Title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Title 7",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        link: "https://docs.microsoft.com/en-us/sharepoint/dev/",
        img:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      }
    ];

    this.setState({
      list: dummyData
    });
  }
}
