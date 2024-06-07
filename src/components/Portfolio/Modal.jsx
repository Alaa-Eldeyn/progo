import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import Link from "../../assets/Portfolio/Link.svg";
import share from "../../assets/Portfolio/Share.svg";

const Modal = ({ handleOpen, title, description, dialogImg, open }) => {
  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <div className="-mt-px flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-[9px] md:text-xs font-normal"
            >
              {description}
            </Typography>
          </div>
        </div>
        <div className="center gap-2 md:gap-4">
          <a href="" className="center bg-primary rounded-full p-1">
            <img
              src={Link}
              alt=""
              className="w-6 h-6 bg-secondary rounded-full p-[5px]"
            />
            <span className=" px-2 text-[9px] md:text-[11px] text-secondary">Open the website</span>
          </a>
          <img src={share} alt="" className="w-6 h-6" />
          <Button className=" bg-secondary py-1 px-2" onClick={handleOpen}>
            X
          </Button>
        </div>
      </DialogHeader>
      <DialogBody className="h-[42rem] overflow-y-scroll bg-[#2D2C36]">
        <img alt="nature" className="h-fit w-full rounded-lg" src={dialogImg} />
      </DialogBody>
    </Dialog>
  );
};

export default Modal;
