import AdminCommentTable from "@/components/templates/AdminCommentTable";

function Comments() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-palette-50">
        نظرات دریافتی
      </h2>
      <AdminCommentTable />
    </div>
  );
}

export default Comments;
