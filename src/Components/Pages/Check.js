import React from "react";

export const Check = ({props, name}) => {


  return (
    <div>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <span>check page props cheinh</span>
      {props.map((item, index) => {
        // console.log(item.completed[0].kjashhd, 'aksjdnhfkjdsafkjh');
        return (
          <>
            <div key={index}>
              <span> user id {item.userId}</span>
              <span> title {item.title}</span>
              <span> completed {item.completed}</span>
            </div>
          </>
        );
      })}

      <div>
         {name}
      </div>
    </div>
  );
};
