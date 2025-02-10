"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

const tableColumns = [
  { label: "ردیف", key: "index" },
  { label: "فرستنده", key: "sender" },
  { label: "تاریخ ارسال", key: "date" },
  { label: "", key: "action" },
];

const rows = [
  {
    index: 1,
    sender: "کیان علوی",
    date: "25 دی 1403",
  },
  {
    index: 2,
    sender: "کیاوش علوی",
    date: "25 دی 1403",
  },
];

function AdminCommentTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const approveCommentHandler = function (id: string) {
    Swal.fire({
      title: "آیا از تایید نظر مورد نظر اطمینان دارید؟",
      icon: "warning",
      confirmButtonText: "بله",
      showCancelButton: true,
      cancelButtonText: "خیر",
      customClass: {
        confirmButton: "bg-green-600",
        cancelButton: "bg-red-600",
      },
    }).then(({ value }) => {
      if (value) {
        // call api
      }
    });
  };

  const rejectCommentHandler = function (id: string) {
    Swal.fire({
      title: "آیا از رد نظر مورد نظر اطمینان دارید؟",
      icon: "warning",
      confirmButtonText: "بله",
      showCancelButton: true,
      cancelButtonText: "خیر",
      customClass: {
        confirmButton: "bg-green-600",
        cancelButton: "bg-red-600",
      },
    }).then(({ value }) => {
      if (value) {
        // call api
      }
    });
  };

  return (
    <>
      <Table
        classNames={{
          wrapper: "shadow-none",
          tr: "",
          td: "px-4 py-5 border-b border-gray-300 text-palette-50 text-sm lg:text-base font-medium",
          th: "px-4 py-5 font-semibold bg-gray-100 text-palette-50 text-sm lg:text-base",
        }}
      >
        <TableHeader>
          {tableColumns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.index}>
              <TableCell>{row.index}</TableCell>
              <TableCell>{row.sender}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <button
                    onClick={onOpen}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-blue-600"
                  >
                    <Icon icon="mdi:eye" width="24" height="24" />
                  </button>
                  <button
                    onClick={() => approveCommentHandler("11")}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-green-600"
                  >
                    <Icon
                      icon="material-symbols:check-rounded"
                      width="36"
                      height="36"
                    />
                  </button>
                  <button
                    onClick={() => rejectCommentHandler("11")}
                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-red-600"
                  >
                    <Icon icon="maki:cross" width="24" height="24" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                متن پیام
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <p className="text-palette-50 text-sm lg:text-base font-medium">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminCommentTable;
