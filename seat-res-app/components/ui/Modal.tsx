import React from "react";
import { Card, CardHeader, Icon } from ".";

const Modal = () => {
  return (
    <div className="fixed flex justify-center items-center bg-black bg-opacity-50 w-screen h-screen z-30">
      <Card className="w-96">
        <CardHeader>
          <div>Confirm action</div>
          <Icon icon="expand" width={16} height={16} />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Modal;
