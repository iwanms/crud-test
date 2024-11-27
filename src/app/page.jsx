import { getPost } from "@/app/api/quote/route";
import List from "@/components/List";

const getQuote = async () => {
  const response = await fetch(`http://localhost:3000/api/quote`);
  const quotes = await response.json();
  return quotes;
};

const Home = async () => {
  const quotes = await getQuote();
  return <List api={quotes} />;
};

export default Home;
