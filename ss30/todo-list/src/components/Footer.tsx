import { Button, message, Popconfirm, type PopconfirmProps } from "antd";

const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel: PopconfirmProps["onCancel"] = (e) => {
  console.log(e);
  message.error("Click on No");
};

function Footer() {
  return (
    <div
      style={{ width: "375px" }}
      className="m-3 flex justify-around items-center"
    >
      <Popconfirm
        title="Xoa toan bo ?"
        description="Ban co chac muon xoa toan bo khong ?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger style={{ width: "150px" }} name="">
          Delete Done
        </Button>
      </Popconfirm>

      <Popconfirm
        title="Xoa cac cong viec da xong ?"
        description="Ban co chac muon xoa khong ?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger style={{ width: "150px" }} name="">
          Delete Done
        </Button>
      </Popconfirm>
    </div>
  );
}

export default Footer;
