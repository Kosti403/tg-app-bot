import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Card from "../../shared/ui/card/CardComponents";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [animationParent] = useAutoAnimate();

  const fetchWorkers = async () => {
    try {
      const response = await fetch("https://196aaaeccf054b68.mokky.dev/people");
      const data = await response.json();
      setWorkers(data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  return (
    <div className="workers">
      <h1 className="text-3xl font-bold text-center my-5">Сотрудники</h1>
      <div ref={animationParent}>
        {workers.map((worker) => (
          <Card
            key={worker.id}
            title={worker.name}
            subtitle={`Username: ${worker.username}`}
            body={`Email: ${worker.email}`}
            additionalInfo={
              <>
                <p className="text-gray-600">
                  Address: {worker.address.street}, {worker.address.city}
                </p>
                <p className="text-gray-600">Phone: {worker.phone}</p>
                <p className="text-gray-600">
                  Website:
                  <a
                    className="text-gray-600"
                    href={`http://${worker.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {worker.website}
                  </a>
                </p>
                <p className="text-gray-600">Company: {worker.company.name}</p>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Workers;
