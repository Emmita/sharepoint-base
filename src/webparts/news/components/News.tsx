import * as React from "react";
import styles from "./News.module.scss";
import { INewsProps } from "./INewsProps";
import { INewsState } from "./INewsState";
import { escape } from "@microsoft/sp-lodash-subset";
import { Carousel } from "react-responsive-carousel";
import "./carousel.min.css";

export default class News extends React.Component<INewsProps, INewsState> {
  public constructor(props: INewsProps, state: INewsState) {
    super(props);
    this.state = {
      news: []
    };
  }

  public componentDidMount() {
    this._getData();
  }

  public render(): React.ReactElement<INewsProps> {
    console.log(this.props.news);
    let newsArray = [];
    newsArray = this.state.news.slice(0, this.props.news);

    return (
      <div className={styles.news}>
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
          {newsArray.map(item => {
            return (
              <div>
                <img src={item.image} />
                <a href={item.link} className="legend">
                  {item.title}
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }

  private _getData(): void {
    const data = [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:
          "https://medium.com/crowdbotics/creating-a-graphql-server-with-nodejs-ef9814a7e0e6",
        image:
          "https://images.techhive.com/images/article/2015/02/020415-sharepoint-logo-100566777-large.jpg"
      }
    ];

    this.setState({
      news: data
    });
  }
}
