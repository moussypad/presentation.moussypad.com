type ConfigT = {
  apiKey: string;
  discoveryDocs: string[];
  clientId: string;
  scope: string
};

type UserProfileT = {
  username: string;
  thumbnailURL: string;
};

export class GoogleAuth2 {
  constructor(private config: ConfigT) { }

  public init = () => {
    return new Promise<UserProfileT>((resolve, reject) => {
      this.loadScript()
        .then(done => this.load())
        .then(done => this.clientInit())
        .then(done => {
          if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
            const userProfile = {
              username: profile.getName(),
              thumbnailURL: profile.getImageUrl()
            };
            resolve(userProfile);
          } else {
            reject(new Error('Failed to login user!'));
          }
        });
    });
  }

  public login = () => {
    return new Promise<UserProfileT>((resolve, reject) => {
      gapi.auth2.getAuthInstance().signIn().then(
        (googleUser: gapi.auth2.GoogleUser) => {
          const profile = googleUser.getBasicProfile();
          const userProfile = {
            username: profile.getName(),
            thumbnailURL: profile.getImageUrl()
          };
          resolve(userProfile);
        },
        (error: Error) => reject(error)
      );
    });
  }

  public signout = () => {
    return new Promise<'Done'>((resolve, reject) => {
      gapi.auth2.getAuthInstance().signOut().then(
        () => resolve('Done'),
        (error: Error) => reject(error)
      );
    });
  }

  private loadScript = () => {
    return new Promise<'Done'>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => resolve('Done');
      script.onerror = error => reject(error);
    });
  }

  private load = () => {
    return new Promise<'Done'>(resolve => {
      gapi.load('client:auth2', () => resolve('Done'));
    });
  }

  private clientInit = () => {
    return new Promise<'Done'>(resolve => {
      gapi.client.init(this.config)
        .then(() => resolve('Done'));
    });
  }
}