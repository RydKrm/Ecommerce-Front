import Container from "../../components/ui/container/Container";
import Hero from "../../components/ui/Hero";
import BlogHeader from "./components/BlogHeader";
import BlogList from "./components/BlogList";

const Blog = () => {
  const list = ["list", "list 2"];
  return (
    <Container>
      <Hero title={"Blog & News"} breadcrumbList={list} />
      <BlogHeader />
      <BlogList />
    </Container>
  );
};

export default Blog;
