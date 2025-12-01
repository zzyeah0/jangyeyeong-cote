import ApplicantCard from "./ApplicantCard";
import { useDroppable } from '@dnd-kit/core';

export default function Column(props) {
  const { setNodeRef } = useDroppable({
    id: props.column.id,
  })

  return (
    <div
      className="bg-slate-50 border border-slate-200 rounded-lg flex flex-col w-full h-dvh min-w-[320px] max-w-[360px]"
    >
      <div className="px-4 py-3 border-b border-slate-200 bg-white rounded-t-lg">
        <h3 className="font-semibold text-slate-900 text-sm flex items-center justify-between">
          {props.column.title}
          <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {props.applicants.length}
          </span>
        </h3>
      </div>

      <div
        ref={setNodeRef}
        className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-3">
        {props.applicants.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 text-sm py-8">
            지원자 없음
          </div>
        ) : (
          props.applicants.map((applicant) => (
            <ApplicantCard
              key={applicant.id}
              applicant={applicant}
              columnId={props.column.id}
              onDelete={props.onDelete}
              onClick={props.onClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
