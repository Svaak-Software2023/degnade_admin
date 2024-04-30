import CountryTable from "../../components/countryTable/CountryTable";
import data from "../../assets/Data";

const CountryServe = () => {
  return (
    <div className="bg-[var(--globalColor)] text-white h-full">
        <CountryTable data={data} />
    </div>
  );
};

export default CountryServe;
