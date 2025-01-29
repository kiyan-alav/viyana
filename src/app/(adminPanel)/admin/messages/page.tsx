import AdminMessagesTable from "@/components/templates/AdminMessagesTable";

function Messages() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
                پیام های دریافتی
            </h2>
            <AdminMessagesTable/>
        </div>
    );
}

export default Messages;