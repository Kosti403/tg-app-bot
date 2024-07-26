import { useState, useEffect } from "react";
import Card from "../../components/ui/CardComponents";


function Workers() {
  const [workers, setWorkers] = useState([]);

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
      <h1>Сотрудники</h1>
      <div className="workers-list">
        {workers.map((worker) => (
          <Card
            key={worker.id}
            title={worker.name}
            subtitle={`Username: ${worker.username}`}
            body={`Email: ${worker.email}`}
            additionalInfo={
              <>
                <p>
                  Address: {worker.address.street}, {worker.address.city}
                </p>
                <p>Phone: {worker.phone}</p>
                <p>
                  Website:{" "}
                  <a
                    href={`http://${worker.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {worker.website}
                  </a>
                </p>
                <p>Company: {worker.company.name}</p>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Workers;
