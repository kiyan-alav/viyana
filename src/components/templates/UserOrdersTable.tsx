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

const tableColumns = [
    {label: "سفارش", key: "order"},
    {label: "تاریخ", key: "date"},
    {label: "وضعیت", key: "status"},
    {label: "جمع کل", key: "total"},
    {label: "", key: "action"}
];

const rows = [
    {
        key: 1,
        order: "#3203",
        date: "۲۷ اسفند ۱۳۹۹",
        status: "تکمیل شده",
        total: "۱۶,۹۵۰.۰۰ دلار برای ۹۳ کالا",
    },
    {
        key: 12,
        order: "#3204",
        date: "29 اسفند ۱۳۹۹",
        status: "در حال انجام",
        total: "۱۶,۹۵۰.۰۰ دلار برای ۹۳ کالا",
    }
];

function UserOrdersTable() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                        <TableRow key={row.key}>
                            <TableCell>{row.order}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.total}</TableCell>
                            <TableCell>
                                <Button
                                    onPress={onOpen}
                                    className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md bg-palette-50 text-white px-4 py-2.5 hover:text-white hover:bg-gray-600 hover:shadow w-max"
                                >
                                    مشاهده
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">جزئیات سفارش</ModalHeader>
                            <ModalBody className="flex flex-col gap-4">
                                <div className="flex items-center">
                                    <h3 className="flex-1 text-palette-50 text-sm lg:text-base font-semibold">شماره
                                        سفارش</h3>
                                    <p className="text-palette-50 text-sm lg:text-base font-medium">#3203</p>
                                </div>
                                <div className="flex items-center">
                                    <h3 className="flex-1 text-palette-50 text-sm lg:text-base font-semibold">تاریخ
                                        پرداخت</h3>
                                    <p className="text-palette-50 text-sm lg:text-base font-medium">۲۷ اسفند ۱۳۹۹</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="flex-1 text-palette-50 text-sm lg:text-base font-semibold">جزئیات
                                        اقلام</h3>
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

export default UserOrdersTable;