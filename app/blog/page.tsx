import BlogSection from "../components/blog/BlogSection";

export default function Blog() {
  return (
    <section className="w-full h-auto  mx-auto">
      <div className="w-full max-w-[90%] lg:max-w-[60%] mx-auto">
        <h1 className="text-6xl font-black">Blog</h1>
      </div>
      <div className="w-full">
        <BlogSection />
      </div>
    </section>
  );
}
