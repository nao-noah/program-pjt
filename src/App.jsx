import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>
        Hello, It's Noah 👋
        <br />
        <span className="headline-sub">
          5 years experienced full-stack devloper
        </span>
      </h1>
      <h2>👨‍💻 My TechStack</h2>
      <h3>Frontend</h3>
      <p>TypeScript, React.js, Next.js, Flutter/Dart</p>
      <h3>Backend</h3>
      <p>Go, Node.js, Ruby</p>
      <h3>Infrastructure / Middlewares / Tools</h3>
      <p>
        AWS (ECS, ECR, API Gateway, Cognito, RDS, EC2, CodeDeploy, CloudWatch,
        Lambda, ElastiCache(Redis), Elasticsearch, CloudFront, Route53,
        Redshift, Amplify, SES, SNS, SQS, EventBridge). GCP(CloudRun,
        CloudStorage, CloudSQL, GAE) Firebase, Auth0, Envoy, MongoDB Atlas,
        Docker, Terraform, CircleCI, GithubActions, SendGrid, Metabase,
        SuperSet, DigDag, Embulk, Nginx, Vercel, Sprite, Discourse
      </p>
      <h3>Methods</h3>
      <p>
        REST API, gRPC(ProtocolBuffers), Microservices, Domain-Driven Design,
        Agile Software Development(Scrum)
      </p>
      <h2>🚀 My Apps</h2>
      <div className="app-container">
        <a href="https://dec-fin.vercel.app/" target="_blank">
          <div className="app-box">
            <div className="app-title">Happy Adding Numbers</div>
            <p>
              Are you drunk right now? But you wanna count numbers for some
              reason? If that's the case, this app is just for you.
            </p>
          </div>
        </a>
        <a href="https://owm-nao-noah.vercel.app/" target="_blank">
          <div className="app-box">
            <div className="app-title">Vancouver's Weather</div>
            <p>
              Are you too lazy to even ask your Siri what's the weather now?
              Okay, this app is definitely for you. You should keep this page on
              your browser, that's the only way you will keep yourself dry.
            </p>
          </div>
        </a>
        <a href="https://cic3-nodejs-fin.vercel.app/" target="_blank">
          <div className="app-box">
            <div className="app-title">Shout Your Current Status</div>
            <p>
              Have you been cooped up too much and got cabin fever? Okay I know,
              you wanna shout. This app is for you, shout here instead of
              shouting to a stranger.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
