import React from "react";
import { Check } from "./Check";

export const Contact = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  const shoe = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed:false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false,
    },
  ];

  // rend text

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {shoe.map((item, index) => {
        // console.log(item.completed[0].kjashhd, 'aksjdnhfkjdsafkjh');
        return (
          <>
            <div key={index} >
              <span> user id {item.userId}</span>
              <span> title {item.title}</span>
              <span> completed {item.completed}</span>
            </div>
          </>
        );
      })}

      {/* {shoe.map((item, index) =>item?.completed?.map((ite, ind) => {
          console.log(ite, "akjdhkj")
          return (
            <>
              <div>
                <span> user id {ite.kjashhd}</span>
              </div>
            </>
          );
        })
      )} */}

      <Check props ={shoe} name ={"durgshs"} />
    </div>
  );
};
