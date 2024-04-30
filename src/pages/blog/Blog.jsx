import CountryTable from "../../components/countryTable/CountryTable";
import BlogData from "../../assets/Data";

const Blog = () => {
  return (
    <div className="bg-[var(--globalColor)] text-white h-full">
        <CountryTable data={BlogData} isBlogData ={true}/>
    </div>
  );
};

export default Blog;
