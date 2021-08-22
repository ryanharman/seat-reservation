import React from "react";
import { Card } from "../../../components/ui";
import { format } from "date-fns";

const ReservationsCard = () => {
  return (
    <Card>
      <div>
        {sampleData.map((r) => {
          console.log(r.dateBooked);
          return (
            <div className="">
              {format(r.dateBooked, "do 'of' LLLL yyyy")}
              <span className="ml-4">{r.office.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ReservationsCard;

const sampleData = [
  {
    id: 1,
    bookedItem: {
      id: 2,
      type: "seat",
    },
    office: {
      id: 1,
      name: "First floor",
    },
    dateBooked: new Date(),
  },
  {
    id: 2,
    bookedItem: {
      id: 2,
      type: "seat",
    },
    office: {
      id: 1,
      name: "First floor",
    },
    dateBooked: new Date(),
  },
];
