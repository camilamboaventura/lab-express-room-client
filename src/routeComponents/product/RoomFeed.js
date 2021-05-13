import { useState, useEffect } from "react";
import RoomCard from "./ProductCard";
import api from "../../apis/index";

function RoomFeed() {
  const [room, setrooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await api.get("/room");

        setRoom([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRooms();
  }, []);

  return (
    <div className="row">
      {rooms.map((room) => {
        return (
          <div key={room._id} className="col-12 col-sm-4 col-md-3">
            <ProductCard room={room} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductFeed;
