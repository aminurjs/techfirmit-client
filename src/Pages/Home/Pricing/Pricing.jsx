import { Button } from "@mui/material";
import Table from "./Table";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="text-center mb-10">
        <h2 className="text-lg md:text-xl bg-gradient-to-r from-blue-01 to-blue-02 text-transparent bg-clip-text font-medium mb-4">
          ~ Pricing Plan ~
        </h2>
        <h1 className="text-dark-01 text-4xl font-semibold max-w-3xl mx-auto mb-4">
          Our Awesome Pricing Plans
        </h1>
        <Button variant="soft" sx={{ background: "#ddd" }}>
          First Time Save 20%
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Table
          name={"Basic Plan"}
          price={"$29"}
          body={
            "Our purpose is to build solutions that remove barriers preventing people."
          }
        />
        <Table
          name={"Standard Plan"}
          price={"$49"}
          body={
            "We encourage every team member to be a whole person. We have a flexible."
          }
        />
        <Table
          name={"Extended Plan"}
          price={"$99"}
          body={
            "What separates theme from all other web design agencies is the ability to offer."
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
