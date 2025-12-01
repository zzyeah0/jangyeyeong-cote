import { useState } from 'react';
import Column from "./components/Column";
import { applicants } from "./data/applicants";
import "./global.css";
import { DndContext } from '@dnd-kit/core';

function App() {
  const COLUMNS = [
    {
      id: "applied",
      title: "지원",
    },
    {
      id: "screencall",
      title: "스크린콜",
    },
    {
      id: "codingtest",
      title: "코딩테스트",
    },
    {
      id: "interview1",
      title: "1차 인터뷰",
    },
    {
      id: "interview2",
      title: "2차 인터뷰",
    },
    {
      id: "offer",
      title: "최종 협의",
    },
    {
      id: "accepted",
      title: "입사 확정",
    },
  ];

  const [apps, setApps] = useState(applicants);

  function handleDrageEnd(e) {  

    const { active, over } = e;

    if (!over) return;

    const applicantId = active.id;
    const newStatus = over.id;

    setApps(() => apps.map(app => app.id === applicantId ? {
      ...app,
      status: newStatus,
    } : app));        
  }

  const handleDelete = (applicantId) => {
     setApps(() => apps.map(app => app.id === applicantId ? {
      ...app,
      status: "deleted",
    } : app));
  };

  const handleClick = () => {
    window.open('https://interxlab.career.greetinghr.com/ko/interxlab', '_blank');
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">프론트엔드 개발자 데이터 스페이스</h1>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max pr-6">
          <DndContext onDragEnd={handleDrageEnd}>
            {COLUMNS.map((column) => (
              <Column
                key={column.id}
                column={column}
                applicants={apps.filter(applicant => applicant.status === column.id)}
                onDelete={handleDelete}
                onClick={handleClick}                
              />
            ))}            
          </DndContext>
        </div>
      </div>
    </div>
  )
}

export default App
