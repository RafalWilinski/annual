# ANNUAL GOALS - LIFE IS SHORT, MAKE IT COUNT

CRA-based extension for tracking annual goals.

[DOWNLOAD EXTENSION FOR CHROME](https://chrome.google.com/webstore/detail/nofdgimpkmhabeckcllmanidoglpofko) - opens as New Tab

Demo:

![Demo](assets/demo.gif?raw=true "Demo")

### Development
```
npm run dev
```


### Deployment
```
npm run build
aws s3 sync ./build s3://annualgoals.xyz
```