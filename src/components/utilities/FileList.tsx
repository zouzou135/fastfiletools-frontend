import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableFileItem from "./SortableFileItem";
import { useMemo } from "react";

type FileListProps = {
  files: File[];
  onRemove: (index: number) => void;
  onMove?: (from: number, to: number) => void;
};

const FileList = ({ files, onRemove, onMove }: FileListProps) => {
  const fileIds = useMemo(
    () =>
      files.map((file, i) => ({
        id: `${file.name}-${file.lastModified}-${i}-${crypto.randomUUID()}`,
        index: i,
      })),
    [files]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
      eventOptions: {
        filter: (event: DragEvent) => {
          const target = event.target as HTMLElement;
          return !target.closest("[data-no-dnd]");
        },
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const from = fileIds.findIndex((f) => f.id === active.id);
    const to = fileIds.findIndex((f) => f.id === over.id);

    if (from !== -1 && to !== -1 && onMove) {
      onMove(from, to);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext
        items={fileIds.map((f) => f.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {fileIds.map(({ id, index }) => (
            <SortableFileItem
              key={id}
              id={id}
              file={files[index]}
              index={index}
              lastIndex={files.length - 1}
              onRemove={onRemove}
              onMove={onMove} // still pass it down for arrow buttons
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default FileList;
