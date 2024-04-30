import SideBar from "@/components/Sidebar";

function Layout({ children }) {
  return (
    <>
      <section className="flex ">
        <SideBar />
        {children}
      </section>
    </>
  );
}

export default Layout;
