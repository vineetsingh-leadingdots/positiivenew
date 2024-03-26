import React from "react";

const Notes = () => {
  return (
    <>
      <div className="contactView notesList">
        <div className="contactList">
          <h3>
            <img src="/images/notes.webp" />
            Notes{" "}
            <button className="ml-1">
              <img src="/images/create.svg" />
            </button>
          </h3>
          <div className="mt-5">
            <p>Meeting with Lisa: 8/10/23, 12:00 PM</p>
            <p>Promo: 8/23/23, 7:00 PM</p>
            <p>Pickup wrong shipped item on: 8/24/23 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
