import config from "config";

export default function Home() {
  const message = config.get<string>("MESSAGE");

  return <div>{message}</div>;
}
