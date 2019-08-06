import * as React from "react";

export default class PersonComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render(): React.ReactElement<any> {
  return( 

    <div>Name's person: {this.props.name} </div>
    
    );
  }
}
