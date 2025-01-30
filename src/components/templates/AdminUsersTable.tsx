"use client";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";
import {Button} from "@heroui/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@heroui/modal";
import {useDisclosure} from "@heroui/react";
import {Icon} from "@iconify/react";
import Swal from "sweetalert2";

const tableColumns = [
    {label: "ردیف", key: "index"},
    {label: "کاربر", key: "user"},
    {label: "ایمیل", key: "email"},
    {label: "موبایل", key: "mobile"},
    {label: "تاریخ ثبت نام", key: "date"},
    {label: "تعداد کل محصولات خریداری شده", key: "totalBoughtProduct"},
    {label: "", key: "action"}
];

const rows = [
    {
        index: 1,
        user: "کیان علوی",
        email: "kiyan@gmail.com",
        mobile: "09365584552",
        date: "25 دی 1403",
        totalBoughtProduct: 10,
    },
    {
        index: 2,
        user: "کیاوش علوی",
        email: "kiyan@gmail.com",
        mobile: "09152507552",
        date: "25 دی 1403",
        totalBoughtProduct: 15,
    }
];

function AdminUsersTable() {
    const {isOpen: isOpenProductInfo, onOpen: onOpenProductInfo, onOpenChange: onOpenChangeProductInfo} = useDisclosure();


    const banUserHandler = function (id: string) {
        Swal.fire({
            title: 'آیا از مسدود کردن کاربر مورد نظر اطمینان دارید؟',
            icon: 'warning',
            confirmButtonText: 'بله',
            showCancelButton: true,
            cancelButtonText: "خیر",
            customClass: {
                confirmButton: "bg-green-600",
                cancelButton: "bg-red-600"
            }
        }).then(({value}) => {
            if (value) {
                // call api
            }
        })
    }

    return (
        <>
            <Table classNames={{
                wrapper: "shadow-none",
                tr: "",
                td: "px-4 py-5 border-b border-gray-300 text-palette-50 text-sm lg:text-base font-medium",
                th: "px-4 py-5 font-semibold bg-gray-100 text-palette-50 text-sm lg:text-base",
            }}>
                <TableHeader>
                    {tableColumns.map((column) => (
                        <TableColumn key={column.key}>{column.label}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {rows.map((row) =>
                        <TableRow key={row.index}>
                            <TableCell>{row.index}</TableCell>
                            <TableCell>{row.user}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.totalBoughtProduct}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={onOpenProductInfo}
                                        className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-slate-600"
                                    >
                                        <Icon icon="icon-park-outline:shopping" width="24" height="24" />
                                    </button>
                                    <button
                                        onClick={() => banUserHandler("11")}
                                        className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer font-semibold text-center justify-center border-0 border-transparent text-red-600"
                                    >
                                        <Icon icon="mdi:ban" width="24" height="24" />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal isOpen={isOpenProductInfo} onOpenChange={onOpenChangeProductInfo}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">جزئیات سفارشات</ModalHeader>
                            <ModalBody className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <h3 className="flex-1 text-palette-50 text-sm lg:text-base font-semibold">جزئیات
                                        اقلام خریداری شده</h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center">
                                            <h4 className="flex-1 text-palette-50 text-sm lg:text-base font-medium">نایک
                                                مشکی</h4>
                                            <p className="text-palette-50 text-sm lg:text-base">$10.00</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h4 className="flex-1 text-palette-50 text-sm lg:text-base font-medium">نایک
                                                مشکی</h4>
                                            <p className="text-palette-50 text-sm lg:text-base">$10.00</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h4 className="flex-1 text-palette-50 text-sm lg:text-base font-medium">نایک
                                                مشکی</h4>
                                            <p className="text-palette-50 text-sm lg:text-base">$10.00</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h4 className="flex-1 text-palette-50 text-sm lg:text-base font-medium">نایک
                                                مشکی</h4>
                                            <p className="text-palette-50 text-sm lg:text-base">$10.00</p>
                                        </div>
                                    </div>
                                </div>
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

export default AdminUsersTable;