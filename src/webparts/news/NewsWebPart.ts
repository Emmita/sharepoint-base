import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from "@microsoft/sp-property-pane";

import * as strings from "NewsWebPartStrings";
import News from "./components/News";
import { INewsProps } from "./components/INewsProps";

export interface INewsWebPartProps {
  description: string;
  news: number;
}

export default class NewsWebPart extends BaseClientSideWebPart<
  INewsWebPartProps
> {
  public render(): void {
    const element: React.ReactElement<INewsProps> = React.createElement(News, {
      description: this.properties.description,
      news: this.properties.news
    });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider("news", {
                  label: "news number",
                  max: 10,
                  min: 3,
                  value: 5
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
