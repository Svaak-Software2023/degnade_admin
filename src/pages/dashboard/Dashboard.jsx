import { Link } from "react-router-dom";
import blogData from "../../assets/Data";
import Table from "../../components/table/Table";

const Dashboard = () => {
  const sections = [
    { title: "Welcome !", content: `Mr. Admin` },
    { title: "Blogs", content: `${blogData.length}`, url: "/blog" },
    { title: "Country Serve", content: `${blogData.length}`, url: "" }
  ];

  return (
    <>
      <div className="flex justify-center items-start gap-5 py-6 flex-wrap bg-[var(--tableColor)] h-full">
        {sections.map((section, index) => (
          <Link to={section?.url} key={index}><div className="flex justify-center items-center w-100 md:w-[400px] h-60 rounded-md bg-[var(--globalColor)] text-[3rem] text-[var(--headingColor)]">
            <h1>{section.title} <br /> <span className="text-[2.2rem] flex justify-center">{section.content}</span> </h1>
          </div></Link>
        ))}
      </div>
      <Table />
    </>
  )
}

export default Dashboard;
