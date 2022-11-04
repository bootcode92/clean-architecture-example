type UserProperties = {
    id: string;
    email: string;
    username: string;
    password: string;
    confirmedAt: Date;
}

export class User {
    props: UserProperties;

    constructor(
        props: UserProperties
    ) {
      if (props.password.length <= 8) {
        console.log('cest pas bon !!');
      }
      this.props = props;
    }

}