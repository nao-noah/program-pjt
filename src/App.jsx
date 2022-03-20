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
      <h2>My TechStack</h2>
      <h3>Frontend</h3>
      <p>TypeScript, React.js, Next.js, Flutter/Dart</p>
      <h3>Backend</h3>
      <p>Go, Node.js, Ruby</p>
      <h3>Infrastructure / Middleware / Tools</h3>
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
    </div>
  );
}

export default App;
