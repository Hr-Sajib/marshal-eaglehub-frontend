import Footer from "@/component/shared/footer/Footer";
import Navbar from "@/component/shared/Navbar/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
