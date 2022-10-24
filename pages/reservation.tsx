import React, { useState } from "react";

type Props = {};

const Reservation = (props: Props) => {
  const [name, setName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="pt-24 px-[140px] space-y-12">
      <div className="space-y-4">
        <h1 className="font-medium text-[40px]">Book a table</h1>
        <p className="text-xl opacity-80">
          Our dining atmosphere is casual and comfortable. To reflect this
          environment, we maintain a formal dress.
        </p>
      </div>
      <div className="space-y-12">
        <div className="flex flex-col gap-y-4">
          <label className="opacity-80">Name</label>
          <input
            className="bg-black px-6 py-[15.5px] rounded-[10px] border border-white border-opacity-10"
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="opacity-80">Number of guests</label>
          <input
            className="bg-black px-6 py-[15.5px] rounded-[10px] border border-white border-opacity-10"
            type="number"
            name="Number of guests"
            value={numberOfGuests}
            onChange={event => setNumberOfGuests(parseInt(event.target.value))}
          />
        </div>
        <div className="flex gap-x-8">
          <div className="w-full flex flex-col gap-y-4">
            <label className="opacity-80">Date</label>
            <input
              className="bg-black px-6 py-[15.5px] rounded-[10px] border border-white border-opacity-10"
              type="date"
              name="Date"
              value={date}
              onChange={event => setDate(event.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-y-4">
            <label className="opacity-80">Time</label>
            <input
              className="bg-black px-6 py-[15.5px] rounded-[10px] border border-white border-opacity-10"
              type="time"
              name="Time"
              value={time}
              onChange={event => setTime(event.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="bg-[#F8D49E] w-full text-center h-[70px] text-black rounded-full font-medium leading-4">BOOK A TABLE</button>
    </div>
  );
};

export default Reservation;
