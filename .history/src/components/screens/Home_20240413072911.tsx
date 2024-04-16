import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Home = () => {
  return (
    <section className="flex items-center justify-center ">
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader>
            <img
              src="https://cdn.sanity.io/images/r4c6igeu/production/e05fa34cbbcb5073f6e089b8efe3cbf6d21fca1e-400x400.jpg"
              alt=""
            />
          </CardHeader>
          <CardContent>
            <p>kelvin Celso</p>
            <p>Descrição do consultor something something</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Home;
