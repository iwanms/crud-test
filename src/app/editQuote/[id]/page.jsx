import EditForm from "@/components/EditForm";

const getQuoteById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/quote/${id}`);
  const quotes = await response.json();
  return quotes;
};

export default async function EditQuote({ params }) {
  const { id } = await params;
  const { quote } = await getQuoteById(id);
  const { title, description } = quote;

  return <EditForm id={id} title={title} description={description} />;
}
