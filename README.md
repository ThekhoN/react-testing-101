This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<h1>React Testing - Simple</h1>

<h3>Using Enzyme with CRA</h3>
<ol>
<li>
Install:
enzyme-adapter-react-16
react-addons-test-utils
react-test-renderer
</li>
<li>
Create setupTests.js inside /src

```javascript
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
```

</li>
</ol>
