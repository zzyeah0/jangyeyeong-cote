import { useDraggable } from "@dnd-kit/core";
import { Trash2, Move } from "lucide-react";

export default function ApplicantCard(props) {

  const {attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.applicant.id,
  });

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    position: `fixed`,
    width: `294px`,  
  } : undefined;

  return (
    <div                  
      ref={setNodeRef}
      {...attributes}      
      className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow shadow-sm group"
      style={style}      
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0" onClick={props.onClick}>
          <p className="font-semibold text-slate-900 text-sm truncate">
            {props.applicant.name}
          </p>
          <p className="text-xs text-slate-500 mt-1">ID: {props.applicant.id}</p>
        </div>        
        <button
          onClick={() => props.onDelete(props.applicant.id)}       
          className="flex-shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
          title="Delete applicant"
        >
          <Trash2 size={16} />
        </button>
        <button                 
          {...listeners}
          className="flex-shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
          title="Delete applicant"
        >
          <Move size={16} />
        </button>
      </div>
    </div>
  );
}
