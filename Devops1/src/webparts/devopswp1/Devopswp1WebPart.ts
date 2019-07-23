import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Devopswp1WebPartStrings';
import Devopswp1 from './components/Devopswp1';
import { IDevopswp1Props } from './components/IDevopswp1Props';

export interface IDevopswp1WebPartProps {
  description: string;
}

export default class Devopswp1WebPart extends BaseClientSideWebPart<IDevopswp1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDevopswp1Props > = React.createElement(
      Devopswp1,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
