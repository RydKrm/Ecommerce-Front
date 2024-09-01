import Container from "../../components/ui/container/Container";
import Hero from "../../components/ui/Hero";
import ProductList from "./ProductList";

const page = () => {
  const list = ["list", "list2"];
  return (
    <Container>
      <Hero title="Snacks" breadcrumbList={list} />
      <ProductList />
    </Container>
  );
};

export default page;
